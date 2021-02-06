import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { bookEvent } from "../../../api/event";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flex: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function TimingForm({ handleBack }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { time, date, month, user_details, doctor } = useSelector(
    (state) => state.bookReducer
  );

  const onSubmit = async () => {
    setLoading(true);

    await bookEvent({
      timeline: JSON.stringify(time),
      date,
      month,
      user_details: JSON.stringify(user_details),
      doctor,
    });

    setLoading(false);

    toast.success("Application Completed");

    router.push("/").then();

    dispatch({ type: "ADD_EVENTS_SUCCESS" });
  };

  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Selected Date
      </Typography>

      <p>
        {date}-{month}-2021
      </p>

      <p>
        {time.startTime} - {time.endTime}
      </p>

      <FormControlLabel
        control={
          <Checkbox color="secondary" name="rules" checked={true} required />
        }
        label="I accept all the rules and regulations"
      />

      <div className={classes.margin}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          onClick={onSubmit}
        >
          {loading ? "Submitting" : "Submit"}
        </Button>
        <Button type="button" color="primary" onClick={handleBack}>
          Back
        </Button>
      </div>
    </form>
  );
}
