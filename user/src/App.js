
import React, { useState, useEffect } from "react";
import { Home, NewOrder,Contact,Register,Login } from "./Pages/index";
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
      <Route path={"/"} exact component={Home} />
      <Route path={"/register"} exact component={Register} />
      <Route path={"/login"} exact component={Login} />

    </Switch>
  </BrowserRouter>

  );
}

export default App;
