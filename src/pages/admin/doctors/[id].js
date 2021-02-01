import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
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
import { userDetail } from "@redux/actions/userAction";
import { createProfile, updateProfile } from "@redux/actions/profileActions";

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

const details = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const { isLoading, user, isUpdate } = useSelector(
    (state) => state.userDetail
  );

  const { isLoading: loading } = useSelector((state) => state.createProfile);

  const { isLoading: updateLoading } = useSelector(
    (state) => state.updateProfile
  );

  const { register, handleSubmit, errors: formErrors, formState } = useForm();

  const { isDirty } = formState;

  useEffect(() => {
    if (id) {
      dispatch(userDetail(id));
    }
  }, [id]);

  const onSubmit = (data) => {
    if (isUpdate) {
      dispatch(updateProfile(data, user?.profile?._id));
    } else {
      dispatch(createProfile(data, id));
    }
  };

  return (
    <Container component="main" maxWidth="md">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {user?.name}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <h4>Basic Details</h4>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  disabled
                  value={user?.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  autoComplete="email"
                  disabled
                  value={user?.email}
                />
              </Grid>
            </Grid>
            <h4>Profile Details</h4>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p>Select Image</p>
                <TextField
                  autoComplete="name"
                  type="file"
                  name="name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="type"
                  name="type"
                  variant="outlined"
                  fullWidth
                  placeholder="Archilogolist"
                  label="Type of Doctor"
                  defaultValue={user?.profile?.type}
                  inputRef={register({
                    required: "Type is a required field",
                  })}
                  error={formErrors?.type && true}
                  helperText={formErrors?.type?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Contact No."
                  name="contact"
                  autoComplete="contact"
                  defaultValue={user?.profile?.contact}
                  inputRef={register({
                    required: "Contact No. is a required field",
                  })}
                  error={formErrors?.contact && true}
                  helperText={formErrors?.contact?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  label="About"
                  name="about"
                  autoComplete="about"
                  defaultValue={user?.profile?.about}
                  inputRef={register}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading || !isDirty || updateLoading}
            >
              {loading || updateLoading ? (
                <CircularProgress size={25} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      )}
    </Container>
  );
};

details.layout = Admin;

export default details;
