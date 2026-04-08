import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const correctPassword = process.env.ADMIN_PASSWORD

  if (!correctPassword) {
    // No password set — allow access so owner can use dashboard
    return NextResponse.json({ ok: true })
  }

  if (password === correctPassword) {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
