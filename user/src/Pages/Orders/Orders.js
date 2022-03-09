import React, { useEffect, useState } from "react";
import { BasicCard } from "../../Components";
import { getOrdersByUserId } from "../../services/userService";

export default function Orders() {
  const token = localStorage.getItem("token") || null;
  let loggedUser = null;
  if (token) loggedUser = JSON.parse(atob(token.split(".")[1]));

  const [orders, SetOrders] = useState([]);

  useEffect(() => {
    getOrdersByUserId(loggedUser._id).then((res) => {
      console.log(res.data);
      SetOrders(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
      <div className="row">
        {orders.map((order) => {
          return (
            <div key={order.id} className="col-lg-4 col-md-4 col-sm-12 my-3">
              <BasicCard order={order} />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
