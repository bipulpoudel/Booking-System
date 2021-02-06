import React from "react";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

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

      {data?.map((time, index) => (
        <Button
          className={classes.margin}
          variant="outlined"
          size="small"
          color="primary"
          key={index}
          onClick={() => bookEvent(time)}
        >
          {time.startTime}-{time.endTime}
        </Button>
      ))}
    </div>
  );
};

export default DayTimeline;
