import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { USER_LOGOUT } from "@redux/types";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: USER_LOGOUT });
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Calendly
          </Typography>
          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
