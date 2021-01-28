import React from "react";
import { withRouter } from "next/router";
import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";

import { makeStyles } from "@material-ui/core";

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

const Admin = (props) => {
  const classes = useStyles();
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

export default withRouter(Admin);
