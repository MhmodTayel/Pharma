import React, { useEffect, useState } from "react";
import { getSavedOrders } from "../../services/userService";
import { BasicCard } from "../../Components";
import { Navbar } from "./../../Components/index";
import Footer from "../../Layouts/Footer/Footer";
import "./savedOrders.scss";
import MedicationIcon from "@mui/icons-material/Medication";
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
      <Navbar />
      <div className="container">
        {orders.length == 0 && (
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div className="text-center py-5">
              <MedicationIcon className="savedOrdersicon" />
              <p className="savedOrderstext">
                Your Saved orders is empty. start searching for peoducts and add
                them to order then it can be saved here
              </p>
              <br />
            </div>
          </div>
        )}
        <div className="savedOrdersGrid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="col-lg-3 col-md-4 col-sm-12 my-3">
                <BasicCard
                  order={order}
                  setOrders={setOrders}
                  orders={orders}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
