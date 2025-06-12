"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function DevSwitch() {
    const [isDevMode, setIsDevMode] = useState(false);
    const [loading, setLoading] = useState(true);

    // コンポーネントのマウント時にAPIから現在の状態を取得
    useEffect(() => {
        async function fetchDevMode() {
            const res = await fetch("/api/dev-mode");
            if (res.ok) {
                const data = await res.json();
                setIsDevMode(data.isDevMode);
            }
            setLoading(false);
        }
        fetchDevMode();
    }, []);

    // スイッチの状態変更時にAPIへ POST リクエストを送信して更新
    const handleSwitchChange = async (checked: boolean) => {
        setIsDevMode(checked);
        const res = await fetch("/api/dev-mode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isDevMode: checked }),
        });
        if (!res.ok) {
            // エラーハンドリング
            console.error("Dev mode の更新に失敗しました");
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto mb-8 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">モード切替</h2>
            <div className="flex items-center justify-between mb-4">
                {/* 実装（本番）モードのラベル */}
                <span className={`text-lg ${!isDevMode ? "font-bold text-green-700" : "text-gray-500"}`}>
                    実装モード
                </span>
                <Switch
                    checked={isDevMode}
                    onCheckedChange={handleSwitchChange}
                />
                {/* 開発モードのラベル */}
                <span className={`text-lg ${isDevMode ? "font-bold text-blue-700" : "text-gray-500"}`}>
                    開発モード
                </span>
            </div>
            <div className="text-center">
                {isDevMode ? (
                    <p className="text-blue-600">
                        現在は <span className="font-bold">開発モード</span> です。テスト機能が有効になっています。
                    </p>
                ) : (
                    <p className="text-green-600">
                        現在は <span className="font-bold">実装モード</span> です。安定した通常動作をしています。
                    </p>
                )}
            </div>
        </div>
    );
}
