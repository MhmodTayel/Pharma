import React from "react";
import {
  Search,
  Card,
  CheckoutButton,
  Navbar,
  SaveOrderButton,
  CheckoutCarousel,
} from "../../Components";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import styles from "./newOrder.module.scss";
import { styled } from "@mui/material/styles";
import Footer from "../../Layouts/Footer/Footer";
import style from "../../index.module.scss";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MedicationIcon from "@mui/icons-material/Medication";

export default function NewOrder() {
  const orderStore = useSelector((state) => state.order);

  return (
    <>
      <Navbar />
      <div className={styles.searchBar}>
        <Search />
      </div>
      <div>
        <div className="container my-3">
          <div className="row pt-5">
            {orderStore.length == 0 ? (
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <div className="text-center py-5">
                  <MedicationIcon className={styles.icon} />
                  <p className={styles.text}>
                    Your cart is empty start searching for peoducts and add them
                    to cart to complete your order
                  </p>
                </div>
              </div>
            ) : (
              orderStore.map((medicine) => {
                return (
                  <div
                    key={medicine.id}
                    className="col-lg-4 col-md-6 col-sm-12 my-5"
                  >
                    <Card med={medicine} />
                  </div>
                );
              })
            )}
          </div>
          {orderStore.length != 0 && (
            <div className="actions d-flex justify-content-end">
              <SaveOrderButton />
              <CheckoutButton newOrder={orderStore} />
            </div>
          )}
          <div className="row py-5">
            <h3 className={style.heading}>
              <span className="fw-bold py-3 ms-3">New Arrivals </span>
            </h3>
            <CheckoutCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
