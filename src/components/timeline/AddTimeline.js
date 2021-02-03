import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const AddTimeline = ({ onAdd }) => {
  const classes = useStyles();

  const [startTime, setStartTime] = useState("");

  const [endTime, setEndTime] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({
      startTime,
      endTime,
    });

    setStartTime("");

    setEndTime("");
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <TextField
        className={classes.margin}
        label="Start Time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        required
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <TextField
        className={classes.margin}
        label="End Time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        required
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />

      <Button
        className={classes.margin}
        size="small"
        variant="contained"
        color="primary"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default AddTimeline;
