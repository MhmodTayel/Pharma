import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  createOrder,
  getOrders,
  reduceMedQuantity,
} from "../../services/userService";
import styles from "./Success.module.scss";

export default function Success() {
  const [response, setResponse] = useState({});
  const token = localStorage.getItem("token") || null;
  let loggedUser = null;
  if (token) loggedUser = JSON.parse(atob(token.split(".")[1]));

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    getOrders(sessionId).then((res) => {
      setResponse(res.data);
      console.log(res.data);
      const lineItems = res.data.lineItems.data.map((item) => {
        return {
          quantity: item.quantity,
          name: item.description,
          amount_total: item.amount_total,
          price: item.price.unit_amount,
          image: item.image,
        };
      });
      const totalCharge = res.data.paymentIntent.charges.data[0];
      const charge = {
        billing_detail: totalCharge.billing_details,
        created: totalCharge.created,
        receipt_url: totalCharge.receipt_url,
      };

      const order = {
        cost: res.data.paymentIntent.amount,
        ...charge,
        medicines: lineItems,
        client: loggedUser._id,
        inProgress: true,
        numberOfCat: lineItems.length,
        fulfilled: false,
        discount: false,
      };
      createOrder(order).then((res) => {});

      const meds = JSON.parse(res.data.session.metadata.data);
      meds.forEach((medicine) => {
        reduceMedQuantity(medicine).then((res) => {});
      });
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* <img src={require("../../Assets/Images/accept.png")} alt="" /> */}
          <div className={styles.icon}>
            <div className={styles.success_icon}>
              <div className={styles.success_icon__tip}></div>
              <div className={styles.success_icon__long}></div>
            </div>
          </div>
          <h5>Thanks {loggedUser.username}, for your order</h5>
          <p>
            You have just completed the payment, The order will reach out to you
            as soon as possible
          </p>
          <div className={styles.action}>
            <Link to="/orders">
              {" "}
              <a target="_blank" className={styles.btnOrders} href="">
                View my orders
              </a>
            </Link>
            <a
              target="_blank"
              href={response?.paymentIntent?.charges?.data[0].receipt_url}
              className={styles.btnReceipt}
            >
              View receipt
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
