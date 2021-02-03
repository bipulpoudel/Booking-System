import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddTimeline from "./AddTimeline";
import Timeline from "./Timeline";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
    margin: theme.spacing(2),
  },
}));

export default function Day({ day, data = [], setValue }) {
  const classes = useStyles();

  const onAdd = (timeData) => {
    let newData = data;

    newData.push(timeData);

    setValue([...newData]);
  };

  const onDelete = (index) => {
    let newData = data;

    newData.splice(index, 1);

    setValue([...newData]);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {day}
        </Typography>
        {data.map((timeline, index) => (
          <Timeline
            key={index}
            index={index}
            timeline={timeline}
            onDelete={onDelete}
          />
        ))}

        <AddTimeline onAdd={onAdd} />
      </CardContent>
    </Card>
  );
}
