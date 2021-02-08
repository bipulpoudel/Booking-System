import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import Doctor from "@layouts/Doctor";
import { getEvents } from "@api/event";
import BookingModal from "@components/booking/BookingModal";

const localizer = momentLocalizer(moment);

const events = () => {
  const [loading, setLoading] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const [events, setEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState({});

  const [open, setOpen] = useState(false);

  const handleClickOpen = async (data) => {
    await setSelectedEvent(data);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const refreshData = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      let data = await getEvents();

      setEvents(data);

      setLoading(false);
    };

    getData();
  }, [refresh]);

  const showEvents = (data) => {
    let returnData = [];

    data.map((d) => {
      //convert the timestamp and date to display correctly

      let user_details = JSON.parse(d.user_details);

      let timeline = JSON.parse(d.timeline);

      returnData.push({
        title: user_details.purpose,
        date: d.date,
        month: d.month,
        timeline: timeline,
        start: new Date(`${d.month} ${d.date}, 2021 ${timeline.startTime}`),
        end: new Date(`${d.month} ${d.date}, 2021 ${timeline.endTime}`),
        id: d._id,
        user_details: user_details,
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
          onDoubleClickEvent={handleClickOpen}
        />
      )}
      <BookingModal
        open={open}
        handleClose={handleClose}
        selectedEvent={selectedEvent}
        refreshData={refreshData}
      />
    </div>
  );
};

events.layout = Doctor;

export default events;
