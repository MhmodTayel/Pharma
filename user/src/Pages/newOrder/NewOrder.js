import React from "react";
import { Search, Card, CheckoutButton } from "../../Components";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import styles from "./newOrder.module.scss";
import { styled } from "@mui/material/styles";

export default function NewOrder() {
  const orderStore = useSelector((state) => state.order);

  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-center align-items-end">
          <div className="w-50">
            <Search className={styles.searchBar}/>
          </div>
          
          <div className="mx-5">
            <CheckoutButton />

          </div>
        </div>
        
        <div className="row">
          {orderStore.map((medicine) => {
            return (
              <div key={medicine.id} className="col-lg-4 col-md-6 col-sm-12 my-5">
                <Card med={medicine} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
