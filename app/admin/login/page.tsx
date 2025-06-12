// app/admin/login/page.tsx
import { createClient } from '@/utils/supabase/server'
import LoginForm from '@/components/LoginForm'

// サイト作成にかかわったメンバーのリスト
const siteMembers = [
    "Pent",
];

export default async function LoginPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
            {/* メインコンテンツ */}
            <main>
                {/* user が存在すればログイン状態、なければログインフォーム */}
                <LoginForm user={user} />
            </main>

            {/* フッター */}
            <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
                <div>© {new Date().getFullYear()} 横浜翠嵐高等学校. All rights reserved.</div>
                <div style={{ marginTop: '8px' }}>
                    <span>Site Created By: </span>
                    {siteMembers.join(", ")}
                </div>
            </footer>
        </div>
    )
}
