import { NextResponse } from 'next/server'

// This route calls the Google Analytics Data API (GA4 Reporting API)
// Requires: GOOGLE_APPLICATION_CREDENTIALS or GA4_CLIENT_EMAIL + GA4_PRIVATE_KEY in .env.local
// and GA4_PROPERTY_ID in .env.local

export async function GET() {
  const propertyId = process.env.GA4_PROPERTY_ID

  if (!propertyId) {
    return NextResponse.json({ error: 'GA4_PROPERTY_ID not configured' }, { status: 503 })
  }

  try {
    // Dynamic import to avoid crashing if package not installed
    const { BetaAnalyticsDataClient } = await import('@google-analytics/data')

    const client = new BetaAnalyticsDataClient()

    const [report7d, report30d, topPages, topSources, realtime] = await Promise.all([
      // Sessions + pageviews, last 7 days
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
      }),
      // Sessions + pageviews, last 30 days
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
      }),
      // Top pages, last 30 days
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: BigInt(8),
      }),
      // Top traffic sources, last 30 days
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: BigInt(6),
      }),
      // Real-time active users
      client.runRealtimeReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: 'activeUsers' }],
      }),
    ])

    const r7 = report7d[0]?.rows?.[0]?.metricValues ?? []
    const r30 = report30d[0]?.rows?.[0]?.metricValues ?? []

    return NextResponse.json({
      activeUsers: Number(realtime[0]?.rows?.[0]?.metricValues?.[0]?.value ?? 0),
      sessions7d: Number(r7[0]?.value ?? 0),
      pageViews7d: Number(r7[1]?.value ?? 0),
      sessions30d: Number(r30[0]?.value ?? 0),
      pageViews30d: Number(r30[1]?.value ?? 0),
      topPages: (topPages[0]?.rows ?? []).map((row) => ({
        page: row.dimensionValues?.[0]?.value ?? '/',
        views: Number(row.metricValues?.[0]?.value ?? 0),
      })),
      topSources: (topSources[0]?.rows ?? []).map((row) => ({
        source: row.dimensionValues?.[0]?.value ?? 'unknown',
        sessions: Number(row.metricValues?.[0]?.value ?? 0),
      })),
    })
  } catch (err) {
    console.error('GA4 API error:', err)
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
  }
}
