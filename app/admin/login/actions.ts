'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    // サーバー側の Supabase クライアントを生成（utils/supabase/server.ts を利用）
    const supabase = await createClient()

    // 入力値を取得（ここでは簡略化のため型キャストしていますが、実際はバリデーションを行ってください）
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // サインインを実行
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        // エラー発生時は /error にリダイレクト（必要に応じてエラーメッセージ表示など）
        redirect('/error')
    }

    // ログイン成功後、ダッシュボードを再検証してリダイレクト
    revalidatePath('/admin/dashboard')
    redirect('/admin/dashboard')
}

export async function logout() {
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
        redirect('/error')
    }
}