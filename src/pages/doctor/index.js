import React from "react";
import { Container, Grid } from "@material-ui/core";

import Doctor from "@layouts/Doctor";
import TotalDoctors from "@components/dashboard/TotalDoctors";

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

index.layout = Doctor;

export default index;
