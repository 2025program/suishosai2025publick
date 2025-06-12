'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase/supabase'
import { Plus, Edit, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Announcement } from './DashboardClient'

export default function AnnouncementManager() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [showNewForm, setShowNewForm] = useState(false)
    const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null)
    const [isSaving, setIsSaving] = useState(false)
    const [deletingAnnouncement, setDeletingAnnouncement] = useState<Announcement | null>(null)
    // モバイル（768px未満）判定用の state
    const [isMobile, setIsMobile] = useState(false)
    // モバイル時の各項目の展開状態（idの配列）
    const [expandedItems, setExpandedItems] = useState<number[]>([])

    // 画面リサイズでモバイル判定
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // announce テーブルからデータ取得
    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('announce')
                .select('id, headline, title, content, details, link, created_at')
                .order("created_at", { ascending: false })
            if (error) {
                console.error('Failed to fetch announcements:', error)
            } else {
                setAnnouncements(
                    (data ?? []).map(item => ({
                        id: item.id,
                        headline: item.headline ?? '',
                        title: item.title ?? '',
                        content: item.content ?? '',
                        details: item.details ?? '',
                        link: item.link ?? '',
                        created_at: item.created_at ?? ''
                    }))
                )
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    // 削除処理
    async function handleDelete(id: number) {
        const { error } = await supabase.from('announce').delete().eq('id', id)
        if (error) {
            console.error('削除に失敗:', error)
        } else {
            setAnnouncements(prev => prev.filter(item => item.id !== id))
        }
        setDeletingAnnouncement(null)
    }

    // 編集処理
    async function handleEditSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!editingAnnouncement) return

        setIsSaving(true)
        const formData = new FormData(e.currentTarget)
        const updatedData = {
            headline: String(formData.get('headline') ?? ''),
            title: String(formData.get('title') ?? ''),
            content: String(formData.get('content') ?? ''),
            details: String(formData.get('details') ?? ''),
            link: String(formData.get('link') ?? '')
        }

        const { error } = await supabase
            .from('announce')
            .update(updatedData)
            .eq('id', editingAnnouncement.id)

        if (error) {
            console.error('編集に失敗:', error)
        } else {
            setAnnouncements(prev =>
                prev.map(item =>
                    item.id === editingAnnouncement.id ? { ...item, ...updatedData } : item
                )
            )
            setEditingAnnouncement(null)
        }
        setIsSaving(false)
    }

    // 新規作成処理
    async function handleNewSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newData = {
            headline: String(formData.get('headline') ?? ''),
            title: String(formData.get('title') ?? ''),
            content: String(formData.get('content') ?? ''),
            details: String(formData.get('details') ?? ''),
            link: String(formData.get('link') ?? '')
        }
        const { data, error } = await supabase.from('announce').insert([newData]).select()
        if (error) {
            console.error('作成に失敗:', error)
        } else if (data && data.length > 0) {
            setAnnouncements(prev => [
                ...prev,
                {
                    id: data[0].id,
                    headline: data[0].headline ?? '',
                    title: data[0].title ?? '',
                    content: data[0].content ?? '',
                    details: data[0].details ?? '',
                    link: data[0].link ?? '',
                    created_at: data[0].created_at ?? ''
                }
            ])
            setShowNewForm(false)
        }
    }

    // モバイル時の開閉切替
    function toggleExpand(id: number) {
        setExpandedItems(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        )
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">お知らせ</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <Button variant="secondary" onClick={() => setShowNewForm(true)}>
                            <Plus size={16} className="mr-2" />
                            新規作成
                        </Button>
                    </div>

                    {/* 新規作成フォーム */}
                    {showNewForm && (
                        <div className="bg-white shadow rounded p-6 mb-6">
                            <h2 className="text-2xl font-semibold mb-4">新規アナウンス作成</h2>
                            <form onSubmit={handleNewSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>インデックス</Label>
                                        <Input type="text" name="headline" required />
                                    </div>
                                    <div>
                                        <Label>タイトル</Label>
                                        <Input type="text" name="title" required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Label>内容</Label>
                                        <textarea name="content" required className="w-full p-2 border rounded" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Label>リンクのタイトル(指定しなくてよい)</Label>
                                        <textarea name="details" className="w-full p-2 border rounded" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <Label>リンク (指定しなくてよい)</Label>
                                        <Input type="text" name="link" />
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <Button type="submit" variant="default">
                                        作成
                                    </Button>
                                    <Button variant="outline" onClick={() => setShowNewForm(false)}>
                                        キャンセル
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* 編集モーダル */}
                    {editingAnnouncement && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded shadow-lg w-full max-w-2xl p-6">
                                <h2 className="text-2xl font-semibold mb-4">アナウンス編集</h2>
                                <form onSubmit={handleEditSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label>インデックス</Label>
                                            <Input
                                                type="text"
                                                name="headline"
                                                defaultValue={editingAnnouncement.headline}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label>タイトル</Label>
                                            <Input
                                                type="text"
                                                name="title"
                                                defaultValue={editingAnnouncement.title}
                                                required
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <Label>内容</Label>
                                            <textarea
                                                name="content"
                                                defaultValue={editingAnnouncement.content}
                                                required
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <Label>リンクのタイトル(指定しなくてよい)</Label>
                                            <textarea
                                                name="details"
                                                defaultValue={editingAnnouncement.details}
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <Label>リンク(指定しなくてよい)</Label>
                                            <Input
                                                type="text"
                                                name="link"
                                                defaultValue={editingAnnouncement.link}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-end gap-4">
                                        <Button type="submit" variant="default" disabled={isSaving}>
                                            {isSaving ? '保存中…' : '保存'}
                                        </Button>
                                        <Button variant="outline" onClick={() => setEditingAnnouncement(null)}>
                                            キャンセル
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* 削除確認モーダル */}
                    {deletingAnnouncement && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
                                <h2 className="text-2xl font-semibold mb-4">削除の確認</h2>
                                <p className="mb-6">
                                    本当に「{deletingAnnouncement.headline}」を削除してもよろしいですか？
                                </p>
                                <div className="flex justify-end gap-4">
                                    <Button
                                        variant="destructive"
                                        onClick={() => handleDelete(deletingAnnouncement.id)}
                                    >
                                        はい
                                    </Button>
                                    <Button variant="outline" onClick={() => setDeletingAnnouncement(null)}>
                                        いいえ
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 一覧表示 */}
                    {announcements.length === 0 ? (
                        <p className="text-gray-600">現在、表示するデータはありません。</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {announcements.map(item => (
                                <div key={item.id} className="bg-white rounded shadow p-4 relative">
                                    {isMobile ? (
                                        // モバイル表示：1行目にヘッドライン（タグ風：テキスト分のみ）と2行目に大きめのタイトル、タップで開閉
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <div>
                                                        <span className="inline-block bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded">
                                                            {item.headline}
                                                        </span>
                                                    </div>
                                                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                                                </div>
                                                <div>
                                                    <Button
                                                        variant="default"
                                                        size="icon"
                                                        onClick={() => toggleExpand(item.id)}
                                                    >
                                                        {expandedItems.includes(item.id) ? '-' : '+'}
                                                    </Button>
                                                </div>
                                            </div>
                                            {expandedItems.includes(item.id) && (
                                                <div className="mt-2 text-sm">
                                                    <p>{item.content}</p>
                                                    {item.link && (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 underline"
                                                        >
                                                            {item.details && (
                                                                <p className="">{item.details}</p>
                                                            )}
                                                        </a>
                                                    )}
                                                    <p className="text-xs text-gray-400">
                                                        作成日: {new Date(item.created_at).toLocaleString()}
                                                    </p>
                                                    <div className="flex gap-2 mt-2">
                                                        <Button
                                                            variant="default"
                                                            size="icon"
                                                            onClick={() => setEditingAnnouncement(item)}
                                                            title="編集"
                                                        >
                                                            <Edit size={16} />
                                                        </Button>
                                                        <Button
                                                            variant="destructive"
                                                            size="icon"
                                                            onClick={() => setDeletingAnnouncement(item)}
                                                            title="削除"
                                                        >
                                                            <Trash size={16} />
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        // デスクトップ表示：1行目にヘッドライン（タグ風：テキスト分のみ）と2行目に大きめのタイトル、下部に詳細情報
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <span className="inline-block bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded">
                                                    {item.headline}
                                                </span>
                                                <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>
                                            </div>
                                            <p>{item.content}</p>
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 underline"
                                                >
                                                    {item.details && (
                                                        <p className="text-sm">{item.details}</p>
                                                    )}
                                                </a>
                                            )}
                                            <p className="text-xs text-gray-400">
                                                作成日: {new Date(item.created_at).toLocaleString()}
                                            </p>
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                <Button
                                                    variant="default"
                                                    size="icon"
                                                    onClick={() => setEditingAnnouncement(item)}
                                                    title="編集"
                                                >
                                                    <Edit size={16} />
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="icon"
                                                    onClick={() => setDeletingAnnouncement(item)}
                                                    title="削除"
                                                >
                                                    <Trash size={16} />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
