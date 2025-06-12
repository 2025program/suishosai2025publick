// app/admin/dashboard/page.tsx
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import DashboardClient from '@/components/editor/DashboardClient'

// サーバー側で認証チェックを実施
export default async function DashboardPage() {
    const supabase = await createClient()

    // 認証済みユーザー情報を取得
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/admin/login')
    }

    // 認証に成功したら、DashboardClient（クライアントコンポーネント）に切り替える
    return <DashboardClient />
}
