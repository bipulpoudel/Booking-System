import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@components/common/Button";
import Box from "@material-ui/core/Box";
import DoctorCard from "@components/common/DoctorCard";
import { useDispatch, useSelector } from "react-redux";
import { doctorList } from "@redux/actions/doctorActions";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doctorList());
  }, []);

  const { isLoading, doctors } = useSelector((state) => state.doctorList);

  return (
    <div style={{ backgroundColor: "#edeff2" }}>
      <Container maxWidth="lg">
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
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            doctors.map((doctor, index) => (
              <DoctorCard key={index} data={doctor} />
            ))
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Index;
