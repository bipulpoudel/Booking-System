import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PerfectScrollbar from "react-perfect-scrollbar";

//material ui core
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import Admin from "@layouts/Admin";
import Toolbar from "@components/common/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsList } from "@redux/actions/doctorActions";

//icons imports
import EditIcon from "@material-ui/icons/Edit";
import { API_URL } from "@config/index";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const doctors = () => {
  const classes = useStyles();

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsList());
  }, []);

  const { isLoading, doctors } = useSelector((state) => state.doctorList);

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <Toolbar />
        <Card>
          <PerfectScrollbar>
            <Box minWidth={1050}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {doctors.map((doctor, index) => (
                      <TableRow hover key={index}>
                        <TableCell>
                          <Box alignItems="center" display="flex">
                            <Avatar
                              className={classes.avatar}
                              src={API_URL + "/" + doctor?.profile?.file}
                            ></Avatar>
                            <Typography color="textPrimary" variant="body2">
                              {doctor.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{doctor.profile?.type}</TableCell>
                        <TableCell>{doctor.email}</TableCell>
                        <TableCell>{doctor.profile?.contact}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label="delete"
                            onClick={() =>
                              router
                                .push({
                                  pathname: `${router.pathname}/[id]`,
                                  query: { id: doctor._id },
                                })
                                .then()
                            }
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </PerfectScrollbar>
        </Card>
      </Box>
    </Container>
  );
};

doctors.layout = Admin;

export default doctors;
