import React, { useState, useEffect } from "react";
import styles from './App.module.scss'
import { Home, NewOrder,Contact,Register,Login,Success,Category,SavedOrders,Orders,RecenltyAdded,notFound } from "./Pages/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopupMessage } from "./Components";
import { io } from "socket.io-client";
import ProtectedRoute from './ProtectedRoutes'


const socket = io("ws://localhost:5000");

function AlertMsg(title, severity, body, date) {
  this.title = title
  this.severity = severity
  this.body = body
  this.date = date
}

function App() {
  const [message, setMessage] = useState({});
  const [popup, setPopup] = useState("");
  useEffect(() => {
    socket.on("message", (msg) => {

      console.log(msg)
      const obj = new AlertMsg('New medicine', 'success', `${msg.name} has arrived to store`, msg.date)
      setMessage(obj);
    });

    socket.on("lowQuantity", (msg) => {
      const qnt = new AlertMsg("Low quantity", "warning", `${msg.name} Low in Stock`, msg.date)
      console.log(qnt)
      setMessage(qnt);
    });

    // return () => {
    //   cleanup
    // };
  }, []);

  useEffect(() => {
    if (Object.keys(message).length !== 0)
      setPopup(
        <PopupMessage
          severity={message.severity}
          title={message.title}
          body={message.body}
        />
      );
    setTimeout(() => {
      setPopup("");
      setMessage({})
    }, 5000);
  }, [message.body]);

  return (
    <>
      <div className={styles.alert}>{popup}</div>
      <BrowserRouter>
        <Switch>
          <Route path={"/register"} exact component={Register} />
          <Route path={"/login"} exact component={Login} />
          <ProtectedRoute path={"/contact-us"} exact component={Contact} />
          <ProtectedRoute path={"/new-order"} exact component={NewOrder} />
          <ProtectedRoute path={"/orders"} exact component={Orders} />
          <ProtectedRoute path={"/saved-orders"} exact component={SavedOrders} />
          <ProtectedRoute path={"/recently-added"} exact component={RecenltyAdded} />
          <ProtectedRoute path={"/success"} exact component={Success} />
          <ProtectedRoute path={"/home"} exact component={Home} />
          <ProtectedRoute path={"/category/:cat"} exact component={Category} />
          <ProtectedRoute path={"/" } component={Home} />
          <ProtectedRoute path="*" exact component={notFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
