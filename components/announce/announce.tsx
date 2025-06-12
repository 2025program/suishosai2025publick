"use client"

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/supabase';
import { Database } from '@/types/database';
import { Yusei_Magic } from "next/font/google";
import "./announce.css"

const yusei = Yusei_Magic({ weight: "400", subsets: ["latin"] });

function formatDate(dateStr: string | null): string {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

type Announcement = Database["public"]["Tables"]["announce"]["Row"];

export default function Announce() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAnnouncements() {
            setLoading(true);
            const { data, error } = await supabase
                .from("announce")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching announcements:", error);
            } else {
                setAnnouncements(data ?? []);
            }
            setLoading(false);
        }
        fetchAnnouncements();
    }, []);
    return (
        <div className="announce">
            <div className="blackboard-box">
                {loading && <p>お知らせを取得中…</p>}
                {!loading && announcements.length === 0 && <p>お知らせはありませんでした</p>}
                {!loading &&
                    announcements.map((announcement) => (
                        <div key={announcement.id} className="box-010">
                            <span className={yusei.className}>{announcement.headline!}</span>
                            <h1>{announcement.title!}</h1>
                            <p>{announcement.content!}</p>
                            <p className='tets'>{formatDate(announcement.created_at!)}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
