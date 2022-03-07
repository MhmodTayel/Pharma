import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import { saveOrder } from "../../services/userService";
import styles from './SaveButton.module.scss'

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
      className={styles.saveBtn}
      variant="contained"
      endIcon={<SaveIcon />}
      onClick={handelSaveOrder}
    >
      Save Order
    </Button>
  );
}
