import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import { saveOrder } from "../../services/userService";
import styles from './SaveButton.module.scss'
import swal from "sweetalert";

export default function SaveOrderButton() {
  const orderStore = useSelector((state) => state.order);

  const [state,setState] = useState(false)
  useEffect(()=> {
    setState(false)
  },[orderStore])
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
      console.log(res)
      swal({
        title: "Order Saved",
        text: `Order #${res.data.id} has been saved`,
        icon: "success",
        button: false,
        timer: 2000,
      });
      setState(true)
    });
  };
  return (
    <Button
    disabled={state}
      className={styles.saveBtn}
      variant="contained"
      endIcon={<SaveIcon />}
      onClick={handelSaveOrder}
    >
      Save Order
    </Button>
  );
}
