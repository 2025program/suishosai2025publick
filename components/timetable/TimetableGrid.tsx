import React from "react";
import "./timetable.css"; 
import { FestivalDetail } from "@/utils/festivaldetail"; 
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
      <div className="timetable-header time-col">時間</div>
      {["体育館", "野外"].map((venue) => (
        <div key={venue} className="timetable-header">
          {venue}
        </div>
      ))}

      {hours.map((hour) => (
        <React.Fragment key={hour}>
          <div className="time-col">{hour}:00</div>
          {["体育館", "野外"].map((venue) => (
            <div key={venue} className="grid-cell">
              {venues[venue as VenueType].map((event, idx) => {
                if (event.start >= hour && event.start < hour + 1) {
                  const offset = (event.start - hour) * 100;
                  const height = (event.end - event.start) * 100;
                  return (
                    <div
                      key={event.id}
                      className="event-box"
                      style={{ top: `${offset}%`, height: `${height}%` }}
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
