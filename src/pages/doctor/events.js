import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import Doctor from "@layouts/Doctor";

const localizer = momentLocalizer(moment);

const data = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
  },
];

const events = () => {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={data}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

events.layout = Doctor;

export default events;
