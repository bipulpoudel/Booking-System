import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 100,
    width: 100,
  },
  wrapper: {
    display: "flex",
  },
  content: {
    marginLeft: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
  },
}));

export default function DoctorCard() {
  const classes = useStyles();

  return (
    <Box my={4}>
      <Card>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <div className={classes.wrapper}>
              <img
                src="https://source.unsplash.com/random"
                className={classes.media}
              />
              <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                  Dra. Encarnación Antón Casas
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                  Allergologist (Pediatric allergist)
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  +977 - 9847039524
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Book Doctor
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
