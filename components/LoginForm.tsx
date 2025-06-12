// components/LoginForm.tsx
'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { login, logout } from '@/app/admin/login/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type LoginFormProps = {
    user: any | null
}

export function LoginForm({ user }: LoginFormProps) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const handleLogout = async () => {
        startTransition(async () => {
            await logout()
            // ログアウト後、サーバーコンポーネントの認証チェックが再実行されるようにリフレッシュ（または遷移）
            router.push('/admin/login')
        })
    }

    return (
        <div className={cn('flex flex-col gap-6')}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    {user ? (
                        <div className="flex flex-col items-center justify-center p-6 md:p-8">
                            <h1 className="text-2xl font-bold">管理者ページ</h1>
                            <p className="text-muted-foreground">{user.email} としてログイン中</p>
                            <Link href="/admin/dashboard" className="w-full">
                                <Button
                                    className="w-full mt-4"
                                >
                                    管理画面
                                </Button>
                            </Link>
                            <Button
                                onClick={handleLogout}
                                className="w-full mt-4"
                                disabled={isPending}
                            >
                                {isPending ? 'ログアウト中…' : 'ログアウト'}
                            </Button>
                        </div>
                    ) : (
                        <form
                            className="p-6 md:p-8"
                            action={async (formData: FormData) => {
                                startTransition(() => login(formData))
                            }}
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">管理者ページ</h1>
                                    <p className="text-muted-foreground">
                                        管理者アカウントを入力してください
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">メール</Label>
                                    <Input id="email" name="email" type="email" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">パスワード</Label>
                                    <Input id="password" name="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full" disabled={isPending}>
                                    {isPending ? 'ログイン中…' : 'ログイン'}
                                </Button>
                            </div>
                        </form>
                    )}
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="/logins.jpeg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginForm
