import React from "react";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";

const CustomButton = ({
  loading = false,
  text,
  variant = "contained",
  color = "primary",
  ...rest
}) => {
  const router = useRouter();
  return (
    <Button variant={variant} color={color} disabled={loading} {...rest}>
      {loading ? <CircularProgress size={20} /> : text}
    </Button>
  );
};

export default CustomButton;
