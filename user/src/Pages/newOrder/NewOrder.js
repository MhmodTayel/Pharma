import React from "react";
import {
  Search,
  Card,
  CheckoutButton,
  Navbar,
  SaveOrderButton,
  CheckoutCarousel
} from "../../Components";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import styles from "./newOrder.module.scss";
import { styled } from "@mui/material/styles";
import Footer from "../../Layouts/Footer/Footer";
import style from '../../index.module.scss'


export default function NewOrder() {
  const orderStore = useSelector((state) => state.order);

  return (
    <>
      <Navbar />
      <div>
        <div className="container my-3">
          <Search />
          {orderStore.length != 0 && (
            <div className="actions">
              <CheckoutButton newOrder={orderStore} />
              <SaveOrderButton />
            </div>
          )}
          <div className="row">
            {orderStore.map((medicine) => {
              return (
                <div
                  key={medicine.id}
                  className="col-lg-4 col-md-6 col-sm-12 my-5"
                >
                  <Card med={medicine} />
                </div>
              );
            })}
          </div>
          <div className="row py-5">
            <h3 className={style.heading}><span className='fw-bold py-3 ms-3'>New Arrivals </span></h3>
            <CheckoutCarousel/>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
