// app/api/dev-mode/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify, SignJWT } from 'jose';

const DEV_COOKIE_NAME = 'dev_mode_token';
const DEV_COOKIE_EXPIRES_DAYS = 30;
const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

async function createDevToken(isDevMode: boolean) {
    return await new SignJWT({ devMode: isDevMode })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(`${DEV_COOKIE_EXPIRES_DAYS}d`)
        .sign(secret);
}

export async function GET() {
    // クッキーからトークンを取得して検証
    const cookieStore = cookies();
    const token = (await cookieStore).get(DEV_COOKIE_NAME)?.value;
    let isDevMode = false;
    if (token) {
        try {
            const { payload } = await jwtVerify(token, secret, { algorithms: ['HS256'] });
            isDevMode = Boolean(payload.devMode);
        } catch (error) {
            // トークンが無効な場合はデフォルト値 false とする
            isDevMode = false;
        }
    }
    return NextResponse.json({ isDevMode });
}

export async function POST(request: Request) {
    // リクエストボディから開発モードの状態を取得（例: { isDevMode: true }）
    const { isDevMode } = await request.json();
    const token = await createDevToken(isDevMode);
    const response = NextResponse.json({ isDevMode });
    const expires = new Date(Date.now() + DEV_COOKIE_EXPIRES_DAYS * 24 * 60 * 60 * 1000);

    // HttpOnly、Secure（本番環境のみ）、SameSite 等のオプションを設定
    response.cookies.set(DEV_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // 本番環境では secure を有効にする
        expires,
        sameSite: 'lax',
        path: '/',
    });

    return response;
}
