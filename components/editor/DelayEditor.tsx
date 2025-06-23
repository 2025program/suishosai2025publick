"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/supabase';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

/**
 * DelaysState は day（1 or 2）ごとに、
 * outdoor / gym の遅延（分）を保持するマップ型
 */
export type DelaysState = Record<
    number,
    Record<'outdoor' | 'gym', number>
>;

/**
 * upsert 用型
 */
export type InsertDelay = {
    day: number;
    where: 'outdoor' | 'gym';
    time: number;
};

/**
 * <DelayEditor /> を配置するだけで動作する、
 * Supabase の delay テーブルと連携した遅延編集コンポーネント
 */
const DelayEditor: React.FC = () => {
    const [delays, setDelays] = useState<DelaysState>({
        1: { outdoor: 0, gym: 0 },
        2: { outdoor: 0, gym: 0 },
    });
    const [saving, setSaving] = useState(false);

    // マウント時に Supabase から delay データを読み込む
    useEffect(() => {
        const fetchDelays = async () => {
            const { data, error } = await supabase
                .from('delay')
                .select('id, day, where, time');
            if (error) {
                console.error('delay fetch error:', error.message);
                return;
            }

            const newDelays: DelaysState = {
                1: { outdoor: 0, gym: 0 },
                2: { outdoor: 0, gym: 0 },
            };
            data?.forEach(row => {
                if (row.day != null && row.where && row.time != null) {
                    // Supabase Row は nullable なのでチェック
                    const dayNum = row.day;
                    const stage = row.where as 'outdoor' | 'gym';
                    newDelays[dayNum][stage] = row.time;
                }
            });

            setDelays(newDelays);
        };
        fetchDelays();
    }, []);

    // 入力変更時
    const handleChange = (
        day: number,
        where: 'outdoor' | 'gym',
        value: string
    ) => {
        const num = parseInt(value, 10) || 0;
        setDelays(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [where]: num,
            },
        }));
    };

    // 保存時に upsert 実行
    const handleSave = async () => {
        setSaving(true);
        const records: InsertDelay[] = [];
        [1, 2].forEach(dayNum => {
            (['outdoor', 'gym'] as const).forEach(stage => {
                records.push({
                    day: dayNum,
                    where: stage,
                    time: delays[dayNum][stage],
                });
            });
        });

        const { error } = await supabase
            .from('delay')
            .upsert(records, { onConflict: 'day,where' });

        setSaving(false);
        if (error) {
            alert(`保存に失敗しました: ${error.message}`);
        } else {
            alert('保存しました');
        }
    };

    return (
        <div className="delay-editor p-4 bg-white rounded-lg shadow mb-4">
            <h2 className="text-xl font-bold mb-4">遅延時間編集</h2>
            <table className="w-full mb-4 table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border px-2 py-1">日</th>
                        <th className="border px-2 py-1">野外 (分)</th>
                        <th className="border px-2 py-1">体育館 (分)</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2].map(dayNum => (
                        <tr key={dayNum}>
                            <td className="border px-2 py-1">{dayNum}</td>
                            <td className="border px-2 py-1">
                                <Input
                                    type="number"
                                    value={delays[dayNum].outdoor.toString()}
                                    onChange={e => handleChange(dayNum, 'outdoor', e.target.value)}
                                />
                            </td>
                            <td className="border px-2 py-1">
                                <Input
                                    type="number"
                                    value={delays[dayNum].gym.toString()}
                                    onChange={e => handleChange(dayNum, 'gym', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={handleSave} disabled={saving}>
                {saving ? '保存中...' : '保存'}
            </Button>
        </div>
    );
};

export default DelayEditor;
