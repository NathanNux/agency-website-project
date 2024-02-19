import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname === '/') {
        return NextResponse.rewrite('/page')
    }

    if (pathname === '/pricing') {
        return NextResponse.rewrite('/pricing/page')
    }

    return NextResponse.next()
}