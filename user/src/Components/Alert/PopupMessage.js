import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function PopupMessage({ title, body, severity }) {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {body} has arrived to store — <strong>check it out!</strong>
    </Alert>
  );
}
