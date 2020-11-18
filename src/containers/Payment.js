// import React from "react";
// import { Redirect, useLocation } from "react-router-dom";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// import CheckoutForm from "../composant/CheckoutForm";

// const stripePromise = loadStripe(
//     "pk_test_51Hot29GVlBHZBwixEgVG76st0xFIRLnQ1n5VZ21MY3lKmF3Dpm9YKNPBCdF0wzAp1Stxay1TBJYukbGYg10qWZOb00dZ2vLQ5d"

// const Payment = ({ token }) => {
//   const location = useLocation();
//   const { price } = location.state;

//   return token ? (
//     <div className="pay">
//       <p>Résumé de la commande</p>
//       <div>Prix du produit : {price}</div>
//       <Elements stripe={stripePromise} />
//       <CheckoutForm price={price} />
//     </div>
//   ) : (
//     <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
//   );
// };

// export default Payment;
