import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { checkout } from "../../services/userService";
import { useStripe } from "@stripe/react-stripe-js";
export default function CheckoutButton() {
  const stripe = useStripe();
  const orderStore = useSelector((state) => state.order);
  const meds= orderStore.map((med)=>{
    return {id:med.id,
            quantity:med.reqQuantity}
  })
  const order = orderStore.map((medicine) => {
    return {
      name: medicine.name,
      quantity: medicine.reqQuantity,
      amount: medicine.storePrice * 100,
      currency: "EGP",
    
    };
  });

  const handelCheckout = async () => {
    const res = await checkout({ line_items: order,metadata:{data:JSON.stringify(meds)} });
    const { id: sessionId } = res.data;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" endIcon={<SendIcon />} disabled= {!orderStore.length} onClick={handelCheckout}>
      Checkout
    </Button>
  );
}
