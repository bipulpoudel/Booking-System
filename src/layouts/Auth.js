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
    switch (user.role) {
      case "admin":
        return <Redirect to="/admin" />;

      case "doctor":
        return <Redirect to="/doctor" />;

      default:
        return <p>Not allowed user</p>;
    }
  }

  return <>{props.children}</>;
};

export default withRouter(Auth);
