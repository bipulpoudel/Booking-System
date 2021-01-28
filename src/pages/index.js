import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@components/common/Button";
import Box from "@material-ui/core/Box";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Booking System
        </Typography>
        <Button
          variant="contained"
          color="primary"
          text="Go to Dashboard"
          href="/auth/login"
        />
      </Box>
    </Container>
  );
}
