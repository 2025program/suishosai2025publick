// components/CookieConsent.tsx
"use client"
import React, { useState, useEffect } from 'react'
import { setCookieConsent, getCookieConsent, deleteAllSiteCookies } from '@/utils/cookieManager'

export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        try {
            const consent = getCookieConsent()
            console.log('Cookie consent from cookies:', consent)
            if (consent === null) {
                setIsVisible(true)
            }
        } catch (error) {
            console.error('Error accessing cookie consent:', error)
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        try {
            setCookieConsent(true)
            console.log('Cookie consent set to true')
            setIsVisible(false)
        } catch (error) {
            console.error('Error setting cookie consent:', error)
        }
    }

    const handleDecline = () => {
        try {
            setCookieConsent(false)
            deleteAllSiteCookies()
            console.log('Cookie consent set to false and all site cookies deleted')
            setIsVisible(false)
        } catch (error) {
            console.error('Error declining cookie consent:', error)
        }
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center z-10">
            <p className="text-center md:text-left mb-4 md:mb-0 text-sm md:text-base">
                このサイトでは、機能向上のためにクッキーを使用しています。続行することでクッキーの使用に同意したものとみなします。
            </p>
            <div className="flex flex-col md:flex-row">
                <button
                    onClick={handleDecline}
                    className="mb-2 md:mb-0 md:mr-2 px-4 py-2 bg-red-500 rounded text-sm md:text-base w-full md:w-auto"
                >
                    同意しない
                </button>
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-green-500 rounded text-sm md:text-base w-full md:w-auto"
                >
                    同意する
                </button>
            </div>
        </div>
    )
}
