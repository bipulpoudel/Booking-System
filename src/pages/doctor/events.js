import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import Doctor from "@layouts/Doctor";
import { getEvents } from "../../../api/event";

import { NumberasMonth } from "@utils/Dates";

const localizer = momentLocalizer(moment);

function toTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}

const events = () => {
  const [loading, setLoading] = useState(false);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      let data = await getEvents();

      setEvents(data);

      setLoading(false);
    };

    getData();
  }, []);

  const showEvents = (data) => {
    let returnData = [];

    data.map((d) => {
      //convert the timestamp and date to display correctly

      let user_details = JSON.parse(d.user_details);

      let timeline = JSON.parse(d.timeline);

      returnData.push({
        title: user_details.purpose,
        start: new Date(`${d.month} ${d.date}, 2021 ${timeline.startTime}`),
        end: new Date(`${d.month} ${d.date}, 2021 ${timeline.endTime}`),
      });
    });

    return returnData;
  };

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={showEvents(events)}
          style={{ height: "100vh" }}
          onDoubleClickEvent={() => alert("Test")}
        />
      )}
    </div>
  );
};

events.layout = Doctor;

export default events;
