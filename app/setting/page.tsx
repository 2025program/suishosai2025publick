// pages/Settings.tsx
"use client"
import React, { useEffect, useState } from 'react'
import { getCookieConsent, setCookieConsent, deleteAllSiteCookies } from '@/utils/cookieManager'

const Settings: React.FC = () => {
    const [consent, setConsent] = useState<boolean | null>(null)

    useEffect(() => {
        const currentConsent = getCookieConsent()
        setConsent(currentConsent)
    }, [])

    const handleToggleConsent = (value: boolean) => {
        setCookieConsent(value)
        setConsent(value)

        if (!value) {
            // 同意を撤回する場合、既存のクッキーを削除
            deleteAllSiteCookies()
            // 他のクッキーも必要に応じて削除
        }
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">クッキー設定 (現在このページは使用されていません。ブラウザバックしてください。)</h1>
            <h1 className="text-xl mb-4">クッキーのご利用について</h1>
            <p>当サイトでは、以下の目的でクッキーを使用しております：</p>
            <p>1.クッキー同意状態の保持</p>
            <p>ユーザーのクッキー使用に対する同意状況を記録します。</p>
            <p>2.サイドバーメニューの表示状態の保持</p>
            <p>サイドバー内のメニューが展開されているかどうかの状態を保持します。</p>
            <br />
            <h2 className="text-xl mb-4">クッキーの設定詳細</h2>
            <p>有効期限: 24時間</p>
            <p>ドメイン: suishousai2025.vercel.app</p>
            <p>パス: /</p>
            <p>セキュア: 有効</p>
            <p>SameSite: Lax</p>
            <br />
            <h2 className="text-xl mb-4">同意しない場合の対応</h2>
            <p>ユーザーがクッキーの使用に同意しない場合、サイドバーおよびサイドバーメニューの表示状態を保持するために使用していたクッキーをすべて削除いたします。</p>
            <br />
            <h2 className="text-xl mb-4">クッキーの管理と選択</h2>
            <p>ユーザーは、ブラウザの設定によりクッキーの受け入れを拒否したり、既存のクッキーを削除することが可能です。ただし、クッキーを無効にすると、当サイトの一部機能が正しく動作しない場合がございます。</p>
            <br />
            <h2 className="text-xl mb-4">プライバシー保護について</h2>
            <p>当サイトでは、クッキーを通じて収集される情報を適切に管理し、第三者に提供することはありません。詳細については、当サイトの<a href="/setting/privacy" className="taplink">プライバシーポリシー</a>をご参照ください。</p>
            <br />
            {consent === null ? (
                <p>クッキーの使用についての同意がまだ決定されていません。</p>
            ) : (
                <div className="flex items-center">
                    <span className="mr-4">クッキーの使用を許可する:</span>
                    <button
                        onClick={() => handleToggleConsent(true)}
                        className={`px-4 py-2 mr-2 rounded ${consent ? 'bg-green-500' : 'bg-gray-300'}`}
                        disabled={consent === true}
                    >
                        同意する
                    </button>
                    <button
                        onClick={() => handleToggleConsent(false)}
                        className={`px-4 py-2 rounded ${!consent ? 'bg-red-500' : 'bg-gray-300'}`}
                        disabled={consent === false}
                    >
                        同意しない
                    </button>
                </div>
            )}
        </div>
    )
}

export default Settings
