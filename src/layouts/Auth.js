import React from "react";
import { withRouter } from "next/router";
import { useSelector } from "react-redux";
import Redirect from "@utils/Redirect";

const Auth = (props) => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.user
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  return <>{props.children}</>;
};

export default withRouter(Auth);
