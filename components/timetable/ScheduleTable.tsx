"use client";

import React, { useState } from "react";
import TimetableGrid from "./TimetableGrid";
import "./timetable.css";
import { festivalDetail, FestivalDetail } from "@/utils/festivaldetail"; 
const detailMap = Object.fromEntries(festivalDetail.map(d => [d.id, d.detail]));

export default function ScheduleTable() {
  const [activeDay, setActiveDay] = useState(0);
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const closeModal = () => setSelectedEventId(null);

  const timetable = [
    {
      day: "Day1",
      venues: {
        体育館: [
          { id: 69, title: "スイラン・ブラバン・ビッグバン", start: 9.67, end: 10.17 },
          { id: 70, title: "弦楽部", start: 10.67, end: 11.17 },
          { id: 71, title: "書道部", start: 11.67, end: 12 },
          { id: 72, title: "ダンス部", start: 13, end: 14.75 },
          { id: 73, title: "音楽部", start: 14.33, end: 14.75 },
        ],
        野外: [
          { id: 61, title: "僕らの生徒会戦争", start: 10.5, end: 11.33 },
          { id: 62, title: "ミントブルー", start: 12, end: 12.33 },
          { id: 63, title: "Crown Quintet the 2nd", start: 13, end: 13.25 },
          { id: 65, title: "バスケ部", start: 14.17, end: 14.5 },
        ],
      },
    },
    {
      day: "Day2",
      venues: {
        体育館: [
          { id: 72, title: "ダンス部", start: 9.67, end: 10.42 },
          { id: 70, title: "弦楽部", start: 10.67, end: 11.17 },
          { id: 74, title: "朝鮮学校舞踊部", start: 11.67, end: 12 },
          { id: 64, title: "多文化共生", start: 12.17, end: 12.5 },
          { id: 73, title: "音楽部", start: 13, end: 13.42 },
          { id: 69, title: "ブラバン・ビッグバン", start: 13.67, end: 14.17 },
        ],
        野外: [
          { id: 67, title: "すぱげてぃ", start: 10.5, end: 11 },
          { id: 66, title: "翠嵐スター発掘", start: 12.17, end: 13.67 },
          { id: 68, title: "ミスミス裏ミスミス", start: 14, end: 15.5 },
        ],
      },
    },
  ];

  return (
    <div className="schedule-table-wrapper">
      {/* タブボタン */}
      <div className="tabs">
        {timetable.map((t, i) => (
          <button
            key={i}
            className={`tab-button ${activeDay === i ? "active" : ""}`}
            onClick={() => setActiveDay(i)}
          >
            {t.day}
          </button>
        ))}
      </div>

      {/* 時間割グリッド */}
      <TimetableGrid
        venues={timetable[activeDay].venues}
        onSelectEvent={(id) => setSelectedEventId(id)}
      />

      {/* モーダル表示 */}
      {selectedEventId !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>詳細</h2>
            <p>
              {
                festivalDetail.find(d => d.id === selectedEventId)?.detail
                || "詳細情報が見つかりません。"
              }
            </p>
            <button onClick={closeModal}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}
