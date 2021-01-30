import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

//react hook form
import { useForm } from "react-hook-form";
//redux import
import Admin from "@layouts/Admin";
import { useDispatch, useSelector } from "react-redux";
import { addDoctor } from "@redux/actions/doctorActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const add = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addDoctor);

  const { register, handleSubmit, errors: formErrors } = useForm();

  const onSubmit = (data) => {
    dispatch(addDoctor(data));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Doctor
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                fullWidth
                label="Full Name"
                autoFocus
                inputRef={register({
                  required: "Name is a required field",
                })}
                error={formErrors?.name && true}
                helperText={formErrors?.name?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register({
                  required: "Email is a required field",
                })}
                error={formErrors?.email && true}
                helperText={formErrors?.email?.message}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={25} /> : "Add Doctor"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

add.layout = Admin;

export default add;
