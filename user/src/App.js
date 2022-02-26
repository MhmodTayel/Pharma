import React, { useState, useEffect } from "react";

import { Home, NewOrder,Contact,Register,Login,Success } from "./Pages/index";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopupMessage } from "./Components";
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState("");
  
  socket.on("message", (msg) => {
    setMessage(msg);
  });
  
  useEffect(() => {
    if (message != "")
      setPopup(
        <PopupMessage
          severity={"success"}
          title={"New medicine"}
          body={message}
        />
      );
    setTimeout(() => {
      setPopup("");
    }, 5000);
  }, [message]);
  

  return (
    <BrowserRouter>
    <Switch>
      <Route path={"/home"} exact component={Home} />
      <Route path={"/new-order"} exact component={NewOrder} />
      <Route path={"/contact-us"} exact component={Contact} />
      <Route path={"/"} exact component={Register} />
      <Route path={"/success"} exact component={Success} />
      <Route path={"/newOrder"} exact component={NewOrder} />
      <Route path={"/register"} exact component={Register} />
      <Route path={"/login"} exact component={Login} />
    </Switch>
  </BrowserRouter>
    /* <Contact/> */
  );
}

export default App;
