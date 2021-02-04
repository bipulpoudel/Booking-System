import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { API_URL } from "@config/index";
import TimelineCard from "./TimelineCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 100,
    width: 100,
  },
  wrapper: {
    display: "flex",
    flex: 1,
  },
  content: {
    marginLeft: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
  },
}));

const DoctorCard = ({ data: { name, profile, timeline, _id } }) => {
  const classes = useStyles();

  return (
    <Box my={4}>
      <Card>
        <CardContent className={classes.cardContent}>
          <div className={classes.wrapper}>
            <img
              src={API_URL + "/" + profile?.file}
              className={classes.media}
            />
            <div className={classes.content}>
              <Typography variant="h6" gutterBottom>
                {name}
              </Typography>
              <Typography
                variant="button"
                display="block"
                color="primary"
                gutterBottom
              >
                {profile?.type}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {profile?.contact}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {profile?.about}
              </Typography>
            </div>
          </div>
          <div className={classes.wrapper}>
            <TimelineCard timeline={timeline} doctorId={_id} />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DoctorCard;
