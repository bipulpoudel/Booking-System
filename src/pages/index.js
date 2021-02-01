import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@components/common/Button";
import Box from "@material-ui/core/Box";
import DoctorCard from "@components/common/DoctorCard";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#edeff2" }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Booking System
        </Typography>
        <Button
          variant="contained"
          color="primary"
          text="Go to Dashboard"
          href="/auth/login"
        />
        <Box my={4}>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </Box>
      </Container>
    </div>
  );
}
