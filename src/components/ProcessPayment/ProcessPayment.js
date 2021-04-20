import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IeD4mHIHsFKjCw1QXeFSuJhTtFG1rTST42DLjZWt9tiaaMO0BJLOckb8UmSNBQZIX1R3eyCMwiTc8NvyjVM083T00G1X7Gfa4"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default ProcessPayment;
