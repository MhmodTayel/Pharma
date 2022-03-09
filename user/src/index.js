
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.module.scss'
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
export const stripePromise = loadStripe(
  'pk_test_51KPmkqJtDdJBpDss3vr6sWmzEUPTsl5pk8RlhkagEuMBU2ECRCkj0ShHBT6CkYUzkmaPqz5VziXqSBcyFW1IoHWZ00eoqf0jxq'
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

// reportWebVitals();
