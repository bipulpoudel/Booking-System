import React, { useState } from "react";
import DayTimeline from "./DayTimeline";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

import { GetDates } from "@utils/Dates";

export default function TimelineCard() {
  const [showIndex, setShowIndex] = useState(0);

  let startDate = new Date();
  let dates = GetDates(startDate, 7);

  let dates1 = dates.splice(0, 4);

  let dates2 = dates.splice(0, 3);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="primary"
          aria-label="Previous"
          disabled={showIndex === 0}
          onClick={() => setShowIndex(showIndex - 1)}
        >
          <SkipPreviousIcon />
        </IconButton>
      </div>
      {showIndex === 0 && (
        <>
          {dates1.map((date, index) => (
            <DayTimeline
              day={date.day}
              date={date.date}
              month={date.month}
              key={index}
            />
          ))}
        </>
      )}
      {showIndex === 1 && (
        <>
          {dates2.map((date, index) => (
            <DayTimeline
              day={date.day}
              date={date.date}
              month={date.month}
              key={index}
            />
          ))}
        </>
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="primary"
          aria-label="Next"
          disabled={showIndex === 1}
          onClick={() => setShowIndex(showIndex + 1)}
        >
          <SkipNextIcon />
        </IconButton>
      </div>
    </>
  );
}
