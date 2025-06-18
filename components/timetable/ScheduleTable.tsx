"use client";

import React, { useState } from "react";
import TimetableGrid from "./TimetableGrid";
import "./timetable.css"; 

export default function ScheduleTable() {
  const [activeDay, setActiveDay] = useState(0);

  const timetable = [
    {
      day: "Day1",
      venues: {
        体育館: [
          { title: "ブラバン・ビッグバン", start: 10, end: 10.5 },
          { title: "弦楽部", start: 10.67, end: 11.17 },
          { title: "書道部", start: 11.67, end: 12 },
          { title: "ダンス部", start: 13, end: 14.75 },
          { title: "音楽部", start: 14.33, end: 14.75 },
        ],
        野外: [
          { title: "僕らの生徒会戦争", start: 10.5, end: 11.33 },
          { title: "ミントブルー", start: 12, end: 12.33 },
          { title: "Crown", start: 13, end: 13.25 },
          { title: "バスケ部", start: 14.17, end: 14.5 },
        ],
      },
    },
    {
      day: "Day2",
      venues: {
        体育館: [
          { title: "ダンス部", start: 9.67, end: 10.42 },
          { title: "弦楽部", start: 10.67, end: 11.17 },
          { title: "朝鮮学校", start: 11.67, end: 12 },
          { title: "多文化先生", start: 12.17, end: 12.5 },
          { title: "音楽部", start: 13, end: 13.42 },
          { title: "ブラバン・ビッグバン", start: 13.67, end: 14.17 },
        ],
        野外: [
          { title: "すぱげてぃ", start: 10.5, end: 11 },
          { title: "翠嵐スター発掘", start: 12.17, end: 13.67 },
          { title: "ミスミス裏ミスミス", start: 14, end: 15.5 },
        ],
      },
    },
  ];

  return (
    <div className="schedule-table-wrapper">
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

      <TimetableGrid venues={timetable[activeDay].venues} />
    </div>
  );
}
