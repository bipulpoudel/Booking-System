import React, { useEffect } from "react";

import { useRouter } from "next/router";

function Redirect({ to }) {
  const Router = useRouter();

  useEffect(() => {
    Router.push(to).then();
  }, [to]);

  return <div>Redirecting...</div>;
}

export default Redirect;
