import React from "react";
import "./timetable.css";
function formatTime(decimalHour: number): string {
  const hour = Math.floor(decimalHour);
  const minute = Math.round((decimalHour - hour) * 60);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hour)}:${pad(minute)}`;
}

type Props = {
  venues: Record<VenueType, Event[]>;
  onSelectEvent?: (id: number) => void;
};

type Event = {
  id: number;
  title: string;
  start: number;
  end: number;
};

type VenueType = "体育館" | "野外";

export default function TimetableGrid({ venues, onSelectEvent }: Props) {
  const hours = Array.from({ length: 7 }, (_, i) => 9 + i); // 9〜15時
  const hourHeight = 180;
  const totalHeight = hourHeight * hours.length; // 1260

  return (
    <div
      className="timetable-grid">
      {/* 時間軸の時間ラベル列 */}
      {/*<div>    表の都合で時間がどうしてもずれてしまうので没
        {hours.map((hour) => (
          <div
            key={hour}
            className="time-col"
            style={{ height: `${hourHeight}px`, lineHeight: `${hourHeight}px` }}
          >
            {hour}:00
          </div>
        ))}
      </div>*/}

      {/* 体育館のイベント列 */}
      <div
        className="venue-column gym"
        style={{ position: "relative", height: `${totalHeight}px` }}
      >
        <div className="venue-header">体育館ステージ</div>
        {venues["体育館"].map((event) => {
          const top = (event.start - 9) * hourHeight;
          const height = (event.end - event.start) * hourHeight;

          return (
            <div
              key={event.id}
              className="event-box gym"
              style={{ top: `${top}px`, height: `${height}px`, position: "absolute" }}
              onClick={() => onSelectEvent?.(event.id)}
            >
              <div>{event.title}</div>
              <div className="event-time">
                {formatTime(event.start)} - {formatTime(event.end)}
              </div>
            </div>
          );
        })}
      </div>

      {/* 野外のイベント列 */}
      <div
        className="venue-column outdoor"
        style={{ position: "relative", height: `${totalHeight}px` }}
      >
        <div className="venue-header">野外ステージ</div>
        {venues["野外"].map((event) => {
          const top = (event.start - 9) * hourHeight;
          const height = (event.end - event.start) * hourHeight;

          return (
            <div
              key={event.id}
              className="event-box outdoor"
              style={{ top: `${top}px`, height: `${height}px`, position: "absolute" }}
              onClick={() => onSelectEvent?.(event.id)}
            >
              <div>{event.title}</div>
              <div className="event-time">
                {formatTime(event.start)} - {formatTime(event.end)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}