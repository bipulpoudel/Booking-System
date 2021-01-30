import React from "react";
import { withRouter } from "next/router";
import { useSelector } from "react-redux";

const Auth = (props) => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.user
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return <p>Logged In already</p>;
  }

  return <>{props.children}</>;
};

export default withRouter(Auth);
