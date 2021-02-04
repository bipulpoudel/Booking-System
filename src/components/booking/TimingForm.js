import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

export default function TimingForm({ handleBack }) {
  const { register, handleSubmit, errors: formErrors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Selected Date
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            type="date"
            name="date"
            variant="outlined"
            fullWidth
            inputRef={register({
              required: "Date is a required field",
            })}
            error={formErrors?.date && true}
            helperText={formErrors?.date?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Timeline"
            name="timeline"
            variant="outlined"
            fullWidth
            inputRef={register({
              required: "Timeline is a required field",
            })}
            error={formErrors?.timeline && true}
            helperText={formErrors?.timeline?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="rules"
                checked={true}
                required
              />
            }
            label="I accept all the rules and regulations"
          />
        </Grid>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button type="button" color="primary" onClick={handleBack}>
          Back
        </Button>
      </Grid>
    </form>
  );
}
