import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { saveOrder } from "../../services/userService";

export default function SaveOrderButton() {
  const orderStore = useSelector((state) => state.order);
  const token = localStorage.getItem("token") || null;
  let loggedUser = null;
  if (token) loggedUser = JSON.parse(atob(token.split(".")[1]));

  const order = {
    medicines: orderStore,
    numberOfCat: orderStore.length,
    client: loggedUser._id,
  };
  const handelSaveOrder = () => {
    saveOrder(order).then((res) => {
      console.log(res);
    });
  };
  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      onClick={handelSaveOrder}
    >
      Save Order
    </Button>
  );
}
