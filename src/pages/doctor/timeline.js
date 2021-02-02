import React, { useEffect, useMemo, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
//redux import
import Doctor from "@layouts/Doctor";
import Day from "@components/timeline/Day";
import {
  createTimeline,
  timelineDetail,
  updateTimeline,
} from "@redux/actions/timelineActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

let defaultValues = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
};

const timeline = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(timelineDetail());
  }, []);

  const { isLoading: loading, data, isUpdate } = useSelector(
    (state) => state.timelineDetail
  );

  const { isLoading: updateLoading } = useSelector(
    (state) => state.updateTimeline
  );

  const { isLoading } = useSelector((state) => state.createTimeline);

  const [sunday, setSunday] = useState([]);
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);

  useEffect(() => {
    if (data) {
      setSunday(data.sunday);
      setMonday(data.monday);
      setTuesday(data.tuesday);
      setWednesday(data.wednesday);
      setThursday(data.thursday);
      setFriday(data.friday);
      setSaturday(data.saturday);
    }
  }, [data]);

  const onSubmit = () => {
    const sendData = {
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
    };

    if (isUpdate) {
      dispatch(updateTimeline(sendData, data._id));
    } else {
      dispatch(createTimeline(sendData));
    }
  };

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Set your timeline which suits you
        </Typography>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading || updateLoading}
              onClick={onSubmit}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>

            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Day day="sunday" data={sunday} setValue={setSunday} />
              </Grid>
              <Grid item xs={4}>
                <Day day="monday" data={monday} setValue={setMonday} />
              </Grid>
              <Grid item xs={4}>
                <Day day="tuesday" data={tuesday} setValue={setTuesday} />
              </Grid>
              <Grid item xs={4}>
                <Day day="wednesday" data={wednesday} setValue={setWednesday} />
              </Grid>
              <Grid item xs={4}>
                <Day day="thursday" data={thursday} setValue={setThursday} />
              </Grid>
              <Grid item xs={4}>
                <Day day="friday" data={friday} setValue={setFriday} />
              </Grid>
              <Grid item xs={4}>
                <Day day="saturday" data={saturday} setValue={setSaturday} />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </Container>
  );
};

timeline.layout = Doctor;

export default timeline;
