import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname === '/login' ||
    req.nextUrl.pathname === '/sk/login' ||
    req.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const hash = req.cookies['authHash']

  console.log(hash)

  if (hash && ['-270901830', '191995071', '-270901278'].includes(hash)) {
    return NextResponse.next()
  }

  return NextResponse.redirect('/login')
}
