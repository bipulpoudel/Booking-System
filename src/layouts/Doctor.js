import React from "react";
import { withRouter } from "next/router";
import Navbar from "@components/layouts/doctor/Navbar";
import Sidebar from "@components/layouts/doctor/Sidebar";
import { makeStyles } from "@material-ui/core";
//redux
import { useSelector } from "react-redux";
import Redirect from "@utils/Redirect";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f4f6f8",
  },
  wrapper: {
    paddingBottom: 64,
    paddingTop: 100,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
}));

const Doctor = (props) => {
  const classes = useStyles();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Redirect to="/auth/login" />;
  }

  if (user.role !== "doctor") {
    return <Redirect to="/403" />;
  }

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <Sidebar />
        <div className={classes.wrapper}>{props.children}</div>
      </div>
    </>
  );
};

export default withRouter(Doctor);
