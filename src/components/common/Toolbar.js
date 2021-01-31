import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const Toolbar = () => {
  const classes = useStyles();

  const router = useRouter();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            router
              .push({
                pathname: `${router.pathname}/add`,
              })
              .then()
          }
        >
          Add New
        </Button>
      </Box>
    </div>
  );
};

export default Toolbar;
