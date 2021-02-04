import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function DetailForm({ handleNext }) {
  const classes = useStyles();

  const { register, handleSubmit, errors: formErrors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch({ type: "ADD_USER_DETAILS", payload: data });

    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Details Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Full name"
              fullWidth
              variant="outlined"
              inputRef={register({
                required: "Name is a required field",
              })}
              error={formErrors?.name && true}
              helperText={formErrors?.name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="number"
              label="Telephone Number"
              fullWidth
              variant="outlined"
              inputRef={register({
                required: "Number is a required field",
              })}
              error={formErrors?.number && true}
              helperText={formErrors?.number?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="purpose"
              label="Purpose of visit"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              inputRef={register({
                required: "Purpose of visit is a required field",
              })}
              error={formErrors?.purpose && true}
              helperText={formErrors?.purpose?.message}
            />
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Next
            </Button>
          </div>
        </Grid>
      </React.Fragment>
    </form>
  );
}
