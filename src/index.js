import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CustProvider } from "./CustomerContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_sIXpDj1v7As6Gy6WQHz09xRq");

ReactDOM.render(
  <React.StrictMode>
    <CustProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CustProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
