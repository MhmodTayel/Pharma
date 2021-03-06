import React, { useEffect, useState } from "react";
import { getSavedOrders } from "../../services/userService";
import { BasicCard } from "../../Components";
export default function SavedOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getSavedOrders().then(
      (res) => {
        console.log(res.data);
        setOrders(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <>
      <div className="container">
        {orders.map((order) => {
          return (

            <div key={order.id} className="col-lg-3 col-md-4 col-sm-12 my-3">
              <BasicCard order={order} />
            </div>
          );
        })}
      </div>
    </>
  );
}
