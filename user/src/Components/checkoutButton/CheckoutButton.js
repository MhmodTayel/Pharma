import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { checkout } from "../../services/userService";
import { useStripe } from "@stripe/react-stripe-js";
export default function CheckoutButton() {
  const stripe = useStripe();
  const orderStore = useSelector((state) => state.order);
  const order = orderStore.map((medicine) => {
    return {
      name: medicine.name,
      quantity: medicine.reqQuantity,
      amount: medicine.storePrice * 100,
      currency: "EGP",
    };
  });
  // console.log(order)
  const handelCheckout = async () => {
    const res = await checkout({ line_items: order });
    const { id: sessionId } = res.data;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" endIcon={<SendIcon />} onClick={handelCheckout}>
      Checkout
    </Button>
  );
}
