'use client'

import { useState, useEffect } from 'react'

type Stats = {
  activeUsers: number
  sessions7d: number
  pageViews7d: number
  sessions30d: number
  pageViews30d: number
  topPages: { page: string; views: number }[]
  topSources: { source: string; sessions: number }[]
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState('')
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    const res = await fetch('/api/admin-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setAuthed(true)
      setError('')
    } else {
      setError('Incorrect password.')
    }
  }

  useEffect(() => {
    if (!authed) return
    setLoading(true)
    fetch('/api/analytics')
      .then((r) => r.json())
      .then((data) => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [authed])

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mb-6">Enter password to access analytics.</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Koshuta AV — site statistics</p>
          </div>
          <a
            href="https://analytics.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            Open Google Analytics
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && !stats && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <p className="text-amber-800 font-semibold mb-2">Analytics API not configured yet</p>
            <p className="text-amber-700 text-sm mb-4">
              Set up Google Analytics 4 and add credentials to Vercel environment variables.
            </p>
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Open Google Analytics Dashboard
            </a>
          </div>
        )}

        {!loading && stats && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Active Users (now)', value: stats.activeUsers },
                { label: 'Sessions (7 days)', value: stats.sessions7d.toLocaleString() },
                { label: 'Page Views (7 days)', value: stats.pageViews7d.toLocaleString() },
                { label: 'Sessions (30 days)', value: stats.sessions30d.toLocaleString() },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">{card.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-4">Top Pages (30 days)</h2>
                <ul className="space-y-3">
                  {stats.topPages.map((p) => (
                    <li key={p.page} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 truncate flex-1">{p.page}</span>
                      <span className="font-semibold text-gray-900 ml-3">{p.views.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-4">Traffic Sources (30 days)</h2>
                <ul className="space-y-3">
                  {stats.topSources.map((s) => (
                    <li key={s.source} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 capitalize">{s.source}</span>
                      <span className="font-semibold text-gray-900">{s.sessions.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
