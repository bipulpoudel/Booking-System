import React from "react";
import { Container, Grid } from "@material-ui/core";

import Admin from "../../layouts/Admin";
import TotalDoctors from "../../components/dashboard/TotalDoctors";

const index = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalDoctors />
        </Grid>
      </Grid>
    </Container>
  );
};

index.layout = Admin;

export default index;
