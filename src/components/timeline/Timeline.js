import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
    border: "1px solid grey",
    borderRadius: 5,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    color: "red",
  },
}));

const Timeline = ({
  timeline: { startTime, endTime, isPaid },
  onDelete,
  index,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
        defaultValue={startTime}
        disabled
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
        defaultValue={endTime}
        disabled
      />

      <p>{isPaid ? "Paid" : "Free"}</p>

      <IconButton
        color="primary"
        className={classes.button}
        onClick={() => onDelete(index)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Timeline;
