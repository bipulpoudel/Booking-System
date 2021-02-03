import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const DayTimeline = ({ day, date, month }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="button" display="block">
        {day}
      </Typography>
      <Typography variant="caption" display="block">
        {date} {month}
      </Typography>
      <Button
        className={classes.margin}
        variant="outlined"
        size="small"
        color="primary"
        disabled
      >
        Primary
      </Button>
      <Button
        className={classes.margin}
        variant="outlined"
        size="small"
        color="primary"
        disabled
      >
        Primary
      </Button>
      <Button
        className={classes.margin}
        variant="outlined"
        size="small"
        color="primary"
        disabled
      >
        Primary
      </Button>
      <Button
        className={classes.margin}
        variant="outlined"
        size="small"
        color="primary"
      >
        8: 80 PM
      </Button>
    </div>
  );
};

export default DayTimeline;
