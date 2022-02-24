import React, { useState, useEffect } from "react";

import { Home, NewOrder,Contact,Register,Login,Success } from "./Pages/index";
import styles from './App.module.scss'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopupMessage } from "./Components";
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");

function AlertMsg(title,severity,body,date) {
  this.title = title
  this.severity = severity
  this.body = body
  this.date=date
}


function App() {
 const [message, setMessage] = useState({});
  const [popup, setPopup] = useState("");
useEffect(() => {
  socket.on("message", (msg) => {
    
    console.log(msg)
    const obj = new AlertMsg('New medicine','success',`${msg.name} has arrived to store`,msg.date)
    setMessage(obj);
  });

    socket.on("lowQuantity", (msg) => {
    const qnt = new AlertMsg("Low quantity", "warning", `${msg.name} Low in Stock`,msg.date)
    console.log(qnt)
    setMessage(qnt);
  });
  
  // return () => {
  //   cleanup
  // };
}, []);


 
  
 
  

  useEffect(() => {
    if (Object.keys(message).length !==0)
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
      <Route path={"/home"} exact component={Home} />
      <Route path={"/"} exact component={Home} />
      <Route path={"/success"} exact component={Success} />
      <Route path={"/newOrder"} exact component={NewOrder} />
      <Route path={"/register"} exact component={Register} />
      <Route path={"/login"} exact component={Login} />
    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;
