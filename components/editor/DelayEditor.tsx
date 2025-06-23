"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/supabase';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export type DelayCell = { id?: number; time: number };

export type DelaysState = Record<
    number,
    Record<'outdoor' | 'gym', DelayCell>
>;

const DelayEditor: React.FC = () => {
    const [delays, setDelays] = useState<DelaysState>({
        1: { outdoor: { time: 0 }, gym: { time: 0 } },
        2: { outdoor: { time: 0 }, gym: { time: 0 } },
    });
    const [saving, setSaving] = useState(false);

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
                1: { outdoor: { time: 0 }, gym: { time: 0 } },
                2: { outdoor: { time: 0 }, gym: { time: 0 } },
            };
            data?.forEach(row => {
                if (row.day != null && row.where && row.time != null) {
                    const dayNum = row.day;
                    const stage = row.where as 'outdoor' | 'gym';
                    newDelays[dayNum][stage] = { id: row.id, time: row.time };
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
                [where]: { id: prev[day][where].id, time: num },
            },
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        const records: Array<{ id?: number; day: number; where: 'outdoor' | 'gym'; time: number }> = [];
        [1, 2].forEach(dayNum => {
            (['outdoor', 'gym'] as const).forEach(stage => {
                const cell = delays[dayNum][stage];
                records.push({
                    id: cell.id,
                    day: dayNum,
                    where: stage,
                    time: cell.time,
                });
            });
        });

        const { error } = await supabase
            .from('delay')
            .upsert(records, { onConflict: 'id' });

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
                                    value={delays[dayNum].outdoor.time.toString()}
                                    onChange={e => handleChange(dayNum, 'outdoor', e.target.value)}
                                />
                            </td>
                            <td className="border px-2 py-1">
                                <Input
                                    type="number"
                                    value={delays[dayNum].gym.time.toString()}
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
