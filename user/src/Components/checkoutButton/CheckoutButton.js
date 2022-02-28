import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { checkout } from "../../services/userService";
import { useStripe } from "@stripe/react-stripe-js";
export default function CheckoutButton({newOrder,savedOrderId}) {
  const stripe = useStripe();
  const orderStore =newOrder;
  console.log(newOrder)
  const meds= orderStore.map((med)=>{
    return {id:med.id,
            quantity:med.reqQuantity,
            image:med.image}
  })

  const order = orderStore.map((medicine) => {
    return {
      name: medicine.name,
      quantity: medicine.reqQuantity,
      amount: medicine.storePrice * 100,
      currency: "EGP",
      images: [
        medicine.image ||
          "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_eg/Products/455x455-en%20eg_new.jpg",
      ],
    };
  });

  const handelCheckout = async () => {
    console.log(order,meds)
    const res = await checkout({ line_items: order,metadata:{data:JSON.stringify(meds),savedOrderId} });

    const { id: sessionId } = res.data;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <Button color="success" disabled= {!orderStore.length} onClick={handelCheckout}>
      Checkout
    </Button>
  );
}
