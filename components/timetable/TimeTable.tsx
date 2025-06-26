"use client";
import React, { useEffect, useMemo, useState } from 'react';
import './TimeTable.css';
import Image from "next/image";
import { festivalDetail, FestivalDetail } from '@/utils/festivaldetail';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Button } from '../ui/button';
import { supabase } from '@/utils/supabase/supabase';

type Event = { id: string; stage: 'outdoor' | 'gym'; start: string; end: string; title: string; cell: number; };

const startHour = 9;
const endHour = 16; // 16:00
const totalHours = endHour - startHour;
const rowHeight = 120; // px per hour
const hours = Array.from({ length: totalHours + 1 }, (_, i) => startHour + i);

// parse "HH:MM" to decimal hours
const parseTime = (time: string): number => {
    const [h, m] = time.split(':').map(Number);
    return h + m / 60;
};

// format decimal hours to "HH:MM"
const formatTime = (dec: number): string => {
    const h = Math.floor(dec);
    const m = Math.round((dec - h) * 60);
    const mm = m.toString().padStart(2, '0');
    return `${h}:${mm}`;
};

const getInitialDay = (): number => {
    const today = new Date();
    const date = today.getDate();
    return date <= 28 ? 1 : 2;
};

// sampleEvents: start/end as "HH:MM"
const sampleEvents: Record<number, Event[]> = {
    1: [
        { id: 'e1', cell: 69, stage: 'gym', start: '09:40', end: '10:10', title: 'スイラン・ブラバン・ビックバン！' },
        { id: 'e2', cell: 70, stage: 'gym', start: '10:40', end: '11:10', title: '弦楽部' },
        { id: 'e3', cell: 71, stage: 'gym', start: '11:40', end: '12:00', title: '書道部' },
        { id: 'e5', cell: 72, stage: 'gym', start: '13:00', end: '13:45', title: 'ダンス部' },
        { id: 'e6', cell: 73, stage: 'gym', start: '14:20', end: '14:45', title: '音楽部' },
        { id: 'e7', cell: 61, stage: 'outdoor', start: '10:30', end: '11:20', title: '演劇「僕らの生徒会戦争」' },
        { id: 'e8', cell: 62, stage: 'outdoor', start: '12:00', end: '12:20', title: 'ミントブルー' },
        { id: 'e9', cell: 63, stage: 'outdoor', start: '13:00', end: '13:15', title: 'Crown Quintet the 2nd' },
        { id: 'e10', cell: 65, stage: 'outdoor', start: '14:00', end: '14:30', title: 'バスケットボール部' },
    ],
    2: [
        { id: 'e11', cell: 72, stage: 'gym', start: '09:40', end: '10:25', title: 'ダンス部' },
        { id: 'e12', cell: 70, stage: 'gym', start: '10:40', end: '11:10', title: '弦楽部' },
        { id: 'e13', cell: 74, stage: 'gym', start: '11:40', end: '12:00', title: '朝鮮学校舞踊部' },
        { id: 'e14', cell: 64, stage: 'gym', start: '12:10', end: '12:30', title: '定時制 多文化共生' },
        { id: 'e15', cell: 73, stage: 'gym', start: '13:00', end: '13:25', title: '音楽部' },
        { id: 'e16', cell: 69, stage: 'gym', start: '13:40', end: '14:10', title: 'スイラン・ブラバン・ビックバン！' },
        { id: 'e17', cell: 67, stage: 'outdoor', start: '10:30', end: '11:00', title: 'すぱげてぃ' },
        { id: 'e18', cell: 66, stage: 'outdoor', start: '12:10', end: '13:40', title: '翠嵐スター発掘' },
        { id: 'e19', cell: 68, stage: 'outdoor', start: '14:00', end: '15:30', title: 'ミスミス・裏ミスミス' },
    ],
};

const TimeTable: React.FC = () => {
    // Supabase から読み込む遅延情報を格納する state
    const [delays, setDelays] = useState<Record<number, Record<'outdoor' | 'gym', number>>>({
        1: { outdoor: 0, gym: 0 },
        2: { outdoor: 0, gym: 0 },
    });

    // マウント時に Supabase から delay テーブルを取得
    useEffect(() => {
        const fetchDelays = async () => {
            const { data, error } = await supabase
                .from('delay')
                .select('day,where,time');
            if (error) {
                console.error('delay fetch error:', error);
                return;
            }
            // 取得結果を所望の形に整形
            const newDelays: typeof delays = {
                1: { outdoor: 0, gym: 0 },
                2: { outdoor: 0, gym: 0 },
            };
            data.forEach(row => {
                const d = row.day!;
                const w = row.where! as 'outdoor' | 'gym';
                const t = row.time!;
                newDelays[d][w] = t;
            });
            setDelays(newDelays);
        };

        fetchDelays();
    }, []);

    const detailMap = useMemo(() => {
        const map: { [key: string]: FestivalDetail } = {};
        for (const detail of festivalDetail) {
            map[detail.id.toString()] = detail;
        }
        return map;
    }, []);

    const [day, setDay] = useState<number>(getInitialDay);

    return (
        <div className="container">
            {/**トップ画像 */}
            <div className="toppers">
                <picture>
                    <source
                        media="(min-width:1024px)"
                        srcSet="/header/header-pc.png"
                    />
                    <source
                        media="(min-width:660px)"
                        srcSet="/header/header-pd.png"
                    />
                    <Image
                        className="header-leave"
                        src="/header/header-sp.png"
                        alt=""
                        width={3000}
                        height={2000}
                        priority
                    />
                </picture>
                <header className="h-header">
                    <h1 className="h-title">TIMETABLE</h1>
                </header>
            </div>
            {/* Toggle Day */}
            <div className="toggleContainer">
                <div className="toggle">
                    <div
                        className="toggleThumb"
                        style={{ left: day === 1 ? '2px' : 'calc(50% + 2px)' }}
                    />
                    <button className={`toggleOption ${day === 1 ? 'selected' : ''}`} onClick={() => setDay(1)}>
                        Day 1
                    </button>
                    <button className={`toggleOption ${day === 2 ? 'selected' : ''}`} onClick={() => setDay(2)}>
                        Day 2
                    </button>
                </div>
            </div>

            {/* Header */}
            <div className="headerRow">
                <div className="headerAxis" />
                <div className="headerStage">
                    <div className="stageTitle">野外ステージ</div>
                    <div className="stageDelay">遅れ: {delays[day].outdoor} 分</div>
                </div>
                <div className="headerStage">
                    <div className="stageTitle">体育館ステージ</div>
                    <div className="stageDelay">遅れ: {delays[day].gym} 分</div>
                </div>
                <div className="headerAxis" />
            </div>

            {/* Time Axis & Events */}
            <div className="timeTableVertical">
                <div className="axis axisLeft">
                    {hours.map((hour, idx) => (
                        <div key={hour} className="axisLabel" style={{ top: `${idx * rowHeight}px` }}>
                            {`${hour}:00`}
                        </div>
                    ))}
                </div>

                <div className="eventsContainer" style={{ height: `${totalHours * rowHeight}px` }}>
                    {hours.map((_, idx) => (
                        <div key={idx} className="gridLine" style={{ top: `${idx * rowHeight}px` }} />
                    ))}

                    {sampleEvents[day].map((event) => {
                        const startDec = parseTime(event.start);
                        const endDec = parseTime(event.end);
                        const delayHr = (delays[day]?.[event.stage] ?? 0) / 60;
                        const newStart = startDec + delayHr;
                        const newEnd = endDec + delayHr;
                        const baseTop = (startDec - startHour) * rowHeight;
                        const delayOffset = delayHr * rowHeight;
                        return (
                            <Drawer key={event.id}>
                                <DrawerTrigger asChild>
                                    <div
                                        className={`eventBox ${event.stage}`}
                                        style={{
                                            top: `${baseTop + delayOffset}px`,
                                            height: `${(endDec - startDec) * rowHeight}px`,
                                            width: 'calc(50% - 2px)',
                                            left: event.stage === 'outdoor' ? '0' : 'calc(50% + 2px)',
                                        }}
                                    >
                                        <div className="timeText">
                                            {formatTime(newStart)} - {formatTime(newEnd)}
                                        </div>
                                        {event.title}
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>{event.title}</DrawerTitle>
                                    </DrawerHeader>
                                    <div className='event_details'>{detailMap[event.cell.toString()]?.detail ?? "詳細情報がありません"}</div>
                                    <DrawerFooter>
                                        <DrawerClose asChild>
                                            <Button variant="outline">閉じる</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        );
                    })}
                </div>

                <div className="axis axisRight">
                    {hours.map((hour, idx) => (
                        <div key={hour} className="axisLabel" style={{ top: `${idx * rowHeight}px` }}>
                            {`${hour}:00`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimeTable;