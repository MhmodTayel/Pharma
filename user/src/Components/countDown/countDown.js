import React from "react";
import { useState, useEffect } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import styles from "./countDown.module.scss";
import Button from "@mui/material/Button";
import { style } from "@mui/system";

export default function CountDown() {
  const [expiryTime, setExpiryTime] = useState("30 mar 2022 15:30:25");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });
  return (
    <div>
      <div className="container-fluid bg-light my-5 w-100 pt-3">
        <div className="container my-3 d-flex align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
          <div className="my-5">
            <h5 className="my-3" style={{ color: "#00c9a7", marginTop: "5px" }}>
              Intro Sale Offer!
            </h5>
            <h2 className="mb-3">Buy all of your medicines at 50% offer.</h2>
            <p className="mb-3">
              Get extra cashback discounts and free international shipping.
            </p>
            <div className="row">
              <div className="d-flex">
                {expiryTime !== false ? (
                  <>
                    <div className={styles.borderCount}>
                      <h6 className="text-center">
                        {countdownTime.countdownDays}
                      </h6>
                      <span>days</span>
                    </div>
                    <div className={styles.borderCount}>
                      <h6 className="text-center">
                        {countdownTime.countdownHours}
                      </h6>
                      <span>hours</span>
                    </div>
                    <div className={styles.borderCount}>
                      <h6 className="text-center">
                        {countdownTime.countdownMinutes}
                      </h6>
                      <span>minuts</span>
                    </div>
                    <div className={styles.borderCount}>
                      <h6 className="text-center">
                        {countdownTime.countdownSeconds}
                      </h6>
                      <span>second</span>
                    </div>
                  </>
                ) : (
                  <p>offer has been Expired</p>
                )}
              </div>
            </div>
            <div>
              <Button
                className="my-5 "
                variant="contained"
                style={{ fontSize: "15px" }}
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="d-lg-block d-md-none d-xs-none d-sm-none d-none">
            <img src={require("../../Assets/Images/img_1.png")} alt="" />
          </div>
        </div>
      </div>
      <section id="policy-section" className="pb-0 ">
        <div className="container">
          <div className="row mt--40 row justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="d-flex">
                <div className={styles.iconItem}>
                  <LocalShippingOutlinedIcon
                    className={styles.iconCount}
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div className="item-content">
                  <h5 className="item-title">Free Shipping</h5>
                  <p className="w-75 mb-0 w-75">
                    Shopping Over $59 or first purchase you will get 100% free
                    shipping
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="d-flex">
                <div className={styles.iconItem}>
                  <AccountBalanceWalletOutlinedIcon
                    className={styles.iconCount}
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div className="item-content">
                  <h5 className="item-title">30 Days Return policy</h5>
                  <p className="w-75 mb-0">
                    Faces any problem with our product? don’t worry we will
                    refund.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="d-flex">
                <div className={styles.iconItem}>
                  <HeadsetMicOutlinedIcon
                    className={styles.iconCount}
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div className="item-content">
                  <h5 className="item-title">24/7 Coustomer Support</h5>
                  <p className="w-75 mb-0">
                    Our dedicated support engneer are waiting for assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
