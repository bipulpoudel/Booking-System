import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const Toolbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained">
          Add New
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
