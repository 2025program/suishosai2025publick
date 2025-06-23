'use client'
import { useEffect, useState, useRef } from 'react'
import AnnouncementManager from './AnnouncementManager'
import DevSwitch from "@/components/developer/developer";
import { supabase } from '@/utils/supabase/supabase'
import DelayEditor from './DelayEditor';

// 既存のお知らせ型
export type Announcement = {
    id: number
    headline: string
    title: string
    content: string
    details: string
    link: string
    created_at: string
}

// プロフィール型（開発者判定で利用）
export type Developer = {
    id: string
    role: string | null
}

export default function DashboardClient() {
    // 現在のユーザーのプロファイルを取得
    const [developer, setDeveloper] = useState<Developer | null>(null)

    useEffect(() => {
        async function fetchDeveloper() {
            // supabase の認証から現在のユーザー情報を取得（利用している認証方法に合わせて調整）
            const { data: { user } } = await supabase.auth.getUser()

            if (!user?.id) return

            const { data, error } = await supabase
                .from('profiles')
                .select('id, role')
                .eq('id', user.id)
                .single()

            if (error) {
                console.error('Failed to fetch profile:', error)
            } else if (data) {
                setDeveloper(data as Developer)
            }
        }
        fetchDeveloper()
    }, [])

    return (
        <div className="p-6">
            {/* developer 権限のあるユーザーのみ、DevSwitch（開発者向けスイッチ）を表示 */}
            {developer?.role === 'developer' && (
                <div className="mb-6">
                    <DevSwitch />
                </div>
            )}
            <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>
            <DelayEditor />
            <AnnouncementManager />
        </div>
    )
}
