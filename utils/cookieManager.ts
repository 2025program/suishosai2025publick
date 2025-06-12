// utils/cookieManager.ts
import { SITE_COOKIES } from "./cookies"

const COOKIE_CONSENT_KEY = 'cookie_consent'
const COOKIE_CONSENT_EXPIRY_DAYS = 1

// ヘルパー関数: クッキーを設定
const setCookie = (name: string, value: string, days: number) => {
    if (typeof document === 'undefined') return
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = `expires=${date.toUTCString()}`
    const secure = location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Lax${secure}`
}

// ヘルパー関数: クッキーを取得
const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null
    const nameEQ = name + "="
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length))
    }
    return null
}

// ヘルパー関数: クッキーを削除
const eraseCookie = (name: string) => {
    if (typeof document === 'undefined') return
    document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`
}

// 同意状態を取得
export const getCookieConsent = (): boolean | null => {
    const consent = getCookie(COOKIE_CONSENT_KEY)
    if (consent === 'true') return true
    if (consent === 'false') return false
    return null
}

// 同意状態を設定
export const setCookieConsent = (consent: boolean) => {
    try {
        setCookie(COOKIE_CONSENT_KEY, consent.toString(), COOKIE_CONSENT_EXPIRY_DAYS)
    } catch (error) {
        console.error('Failed to set cookie consent:', error)
    }
}

// 特定のクッキーを削除
export const deleteCookie = (name: string) => {
    try {
        eraseCookie(name)
    } catch (error) {
        console.error(`Failed to delete cookie ${name}:`, error)
    }
}

// クッキーの値を取得
export const getCookieValue = (name: string): string | null => {
    return getCookie(name)
}

// クッキーを設定（同意が必要）
export const setSiteCookie = (name: string, value: string, maxAge: number) => {
    if (!getCookieConsent()) return
    try {
        const secure = location.protocol === 'https:' ? '; Secure' : ''
        document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`
    } catch (error) {
        console.error(`Failed to set site cookie ${name}:`, error)
    }
}

// 全てのサイトクッキーを削除
export const deleteAllSiteCookies = () => {
    SITE_COOKIES.forEach(name => deleteCookie(name))
}
