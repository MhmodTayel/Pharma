import React, { useEffect, useState } from "react";
import { createOrder, getOrders } from "../../services/userService";

export default function Success() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    getOrders(sessionId).then((res) => {
      setResponse(res.data);
      const lineItems = res.data.lineItems.data.map((item) => {
        return {
          quantity: item.quantity,
          name: item.description,
          amount_total: item.amount_total,
          price: item.price.unit_amount,
        };
      });
      const totalCharge = res.data.paymentIntent.charges.data[0];
      const charge = {
        billing_detail: totalCharge.billing_details,
        created: totalCharge.created,
        receipt_url: totalCharge.receipt_url,
      };
      const token = localStorage.getItem("token") || null;
      let loggedUserId = null
      if (token)
        loggedUserId = JSON.parse(atob(token.split(".")[1]))._id ;
      const order = {
        cost: res.data.paymentIntent.amount,
        ...charge,
        medicines: lineItems,
        client: loggedUserId,
        inProgress: true,
        numberOfCat: lineItems.length,
        fulfilled: false,
        discount: false,
      };
      createOrder(order).then((res)=> {
        console.log(res)
      })
    });
  }, []);

  return <div>Success</div>;
}
