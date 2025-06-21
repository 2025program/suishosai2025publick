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
  const hours = Array.from({ length: 7 }, (_, i) => 9 + i); // 9時〜15時

  return (
    <div className="timetable-grid">
      {/* ヘッダー */}
      <div className="timetable-header time-col">時間</div>
      {["体育館", "野外"].map((venue) => (
        <div key={venue} className="timetable-header">
          {venue}
        </div>
      ))}

      {/* 各時間帯の横線 + イベント配置枠 */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          <div className="time-col">{hour}:00</div>
          {["体育館", "野外"].map((venue) => (
            <div key={venue} className="grid-cell">
              {venues[venue as VenueType].map((event) => {
                // 時間がこの時間帯に属しているイベントだけ表示
                if (event.start >= hour && event.start < hour + 1) {
                  const offset = (event.start - hour) * 100;
                  const height = (event.end - event.start) * 100;
                  const venueClass = venue === "体育館" ? "gym" : "outdoor";

                  return (
                    <div
                      key={event.id}
                      className={`event-box ${venueClass}`}
                      style={{
                        top: `${offset}%`,
                        height: `${height}%`,
                        position: "absolute",
                      }}
                      onClick={() => onSelectEvent?.(event.id)}
                    >
                      {event.title}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
