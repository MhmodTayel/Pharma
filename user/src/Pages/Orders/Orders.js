import React, { useEffect, useState } from "react";
import { BasicCard } from "../../Components";
import { getOrdersByUserId } from "../../services/userService";
import { Navbar } from "./../../Components/index";
import Footer from "../../Layouts/Footer/Footer";
import MedicationIcon from "@mui/icons-material/Medication";
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
     <Navbar />
      <div className="container">
      {orders.length == 0 && (
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className="text-center py-5">
              <MedicationIcon className="savedOrdersicon" />
              <p className="savedOrderstext">
                Your  orders is empty. start searching for peoducts and add
                them to order then it can be here
              </p>
              <br />
            </div>
          </div>
        )}
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
      <Footer />
    </>
  );
}
