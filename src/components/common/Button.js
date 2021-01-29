import React from "react";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";

const CustomButton = ({
  loading = false,
  text,
  variant = "contained",
  color = "primary",
  href = "/",
}) => {
  const router = useRouter();
  return (
    <Button
      variant={variant}
      color={color}
      disabled={loading}
      onClick={() => router.push(href).then()}
    >
      {loading ? <CircularProgress size={25} /> : text}
    </Button>
  );
};

export default CustomButton;
