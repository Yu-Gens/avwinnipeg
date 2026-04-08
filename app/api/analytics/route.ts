import { NextResponse } from 'next/server'

export async function GET() {
  const propertyId = process.env.GA4_PROPERTY_ID

  if (!propertyId) {
    return NextResponse.json({ error: 'GA4_PROPERTY_ID not configured' }, { status: 503 })
  }

  try {
    const { BetaAnalyticsDataClient } = await import('@google-analytics/data')
    const client = new BetaAnalyticsDataClient()

    const [report7d, report30d, topPages, topSources, realtime] = await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 8 as unknown as number,
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 6 as unknown as number,
      }),
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
