import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

import { getEvents } from "@api/event";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const DayTimeline = ({ day, date, month, data, doctorId, timeline }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const router = useRouter();

  const [events, setEvents] = useState([]);

  const [found, setFound] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      let data = await getEvents();

      setEvents(data);

      setLoading(false);

      for (let i = 0; i < events.length; i++) {
        if (events[i].date == date && events[i].month === month) {
          setFound(true);
          break;
        }
      }
    };

    fetchEvents();
  }, []);

  const bookEvent = (time) => {
    dispatch({
      type: "ADD_EVENTS_DETAILS",
      payload: {
        day,
        date,
        month,
        time,
        doctor: doctorId,
        timeline,
      },
    });

    router.push("/booking");
  };

  return (
    <div className={classes.root}>
      <Typography variant="button" display="block">
        {day}
      </Typography>
      <Typography variant="caption" display="block">
        {date} {month}
      </Typography>

      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((time, index) => (
          <Button
            className={classes.margin}
            variant="outlined"
            size="small"
            color="primary"
            key={index}
            onClick={() => bookEvent(time)}
            disabled={found}
          >
            {time.startTime}-{time.endTime}
          </Button>
        ))
      )}
    </div>
  );
};

export default DayTimeline;
