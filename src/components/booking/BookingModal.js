import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//react hook form
import { useForm, Controller } from "react-hook-form";
import { updateEvent } from "@api/event";
import { toast } from "react-toastify";

const BookingModal = ({
  open,
  handleClose,
  selectedEvent = {},
  refreshData,
}) => {
  const { register, handleSubmit, errors: formErrors, control } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    let time = { startTime: data.startTime, endTime: data.endTime };

    let sendData = {
      date: data.date,
      month: data.month,
      timeline: JSON.stringify(time),
    };

    await updateEvent(sendData, selectedEvent.id);

    setLoading(false);

    toast.success("Updated");

    refreshData();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Event Detail</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="number"
                name="date"
                fullWidth
                label="Date"
                defaultValue={selectedEvent.date}
                inputRef={register({
                  required: "Day is a required field",
                })}
                variant="outlined"
                error={formErrors?.date && true}
                helperText={formErrors?.date?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined">
                <InputLabel>Month</InputLabel>

                <Controller
                  as={
                    <Select label="Month">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="January">January</MenuItem>
                      <MenuItem value="February">February</MenuItem>
                      <MenuItem value="March">March</MenuItem>
                      <MenuItem value="April">April</MenuItem>
                      <MenuItem value="May">May</MenuItem>
                      <MenuItem value="June">June</MenuItem>
                      <MenuItem value="July">July</MenuItem>
                      <MenuItem value="August">August</MenuItem>
                      <MenuItem value="September">September</MenuItem>
                      <MenuItem value="October">October</MenuItem>
                      <MenuItem value="November">November</MenuItem>
                      <MenuItem value="December">December</MenuItem>
                    </Select>
                  }
                  name="month"
                  control={control}
                  onChange={([selected]) => {
                    return { value: selected };
                  }}
                  defaultValue={selectedEvent.month}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="time"
                name="startTime"
                fullWidth
                defaultValue={selectedEvent?.timeline?.startTime}
                inputRef={register({
                  required: "StartTime is a required field",
                })}
                variant="outlined"
                error={formErrors?.startTime && true}
                helperText={formErrors?.startTime?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="time"
                name="endTime"
                fullWidth
                defaultValue={selectedEvent?.timeline?.endTime}
                inputRef={register({
                  required: "EndTime is a required field",
                })}
                variant="outlined"
                error={formErrors?.endTime && true}
                helperText={formErrors?.endTime?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <h3>User Details</h3>
              <table style={{ width: "100%", border: "1px solid black" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid black" }}>Name</th>
                    <th style={{ border: "1px solid black" }}>Number</th>
                    <th style={{ border: "1px solid black" }}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }}>
                      {selectedEvent?.user_details?.name}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {selectedEvent?.user_details?.number}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {selectedEvent?.user_details?.purpose}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookingModal;
