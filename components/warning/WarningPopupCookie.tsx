"use client"

import Image from 'next/image';
import React, { useEffect, useState } from "react"
import { getCookieValue } from "@/utils/cookieManager"  // パスは実際のディレクトリ構造に合わせてください
import "./warning.css"

const COOKIE_NAME = "warning_popup"
const COOKIE_EXPIRY_DAYS = 2

const WarningPopupCookie = () => {
    const [visible, setVisible] = useState(false)

    // クッキーを自動で設定するヘルパー関数
    const setWarningCookie = () => {
        if (typeof document === "undefined") return
        const date = new Date()
        date.setTime(date.getTime() + COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000)
        const expires = `expires=${date.toUTCString()}`
        // httpsの場合は Secure 属性を付与
        const secure = location.protocol === 'https:' ? '; Secure' : ''
        document.cookie = `${COOKIE_NAME}=true; ${expires}; path=/; SameSite=Lax${secure}`
    }

    useEffect(() => {
        // クッキーの存在を確認し、なければポップアップを表示
        const cookieValue = getCookieValue(COOKIE_NAME)
        if (!cookieValue) {
            setVisible(true)
        }
    }, [])

    // 背景スクロールの制御：visible 状態に応じて overflow を変更
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            // クリーンアップ：コンポーネントのアンマウント時にスクロールを再開
            document.body.style.overflow = ''
        }
    }, [visible])

    const handleClose = () => {
        setWarningCookie()
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="warning-popup" onClick={handleClose}>
            <div className="warning-box">
                <div className='warning-title'>
                    <span className='warning-text'>現金での支払いはできません</span>
                    <p className='gaku'>※学食は現金のみ利用できます</p>
                </div>
                <Image
                    className="cash"
                    src="/cash.png"
                    alt=""
                    width={1000}
                    height={1000}
                    priority
                />
                <button onClick={handleClose} className='warning-close'>閉じる</button>
            </div>
        </div>
    )
}

export default WarningPopupCookie
