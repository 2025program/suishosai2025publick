// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // ログインページやエラー画面は認証不要
    if (
        pathname.startsWith('/admin/login') ||
        pathname.startsWith('/error')
    ) {
        return NextResponse.next();
    }

    const token = req.cookies.get(process.env.NEXT_PUBLIC_COOKIE!)?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
