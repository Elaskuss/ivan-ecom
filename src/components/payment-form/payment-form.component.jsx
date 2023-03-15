import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUserAuth } from "../../store/user/user.selector";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
   PaymentButton,
   FormContainer,
   PaymentformContainer,
} from "./payment-form.styles.jsx";

const Paymentform = () => {
   const stripe = useStripe();
   const elements = useElements();

   const amount = useSelector(selectCartTotal) * 100;
   const currentUser = useSelector(selectCurrentUserAuth);
   const [isProcessingPayment, setIsProcessingPayment] = useState(false);

   const paymentHandler = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) return;

      setIsProcessingPayment(true);

      const response = await fetch(
         "/.netlify/functions/create-paymeny-intent",
         {
            method: "post",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: amount }),
         }
      ).then((res) => res.json());

      const {
         paymentIntent: { client_secret },
      } = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
         payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
               name: currentUser ? currentUser.displayName : "Guest",
            },
         },
      });

      setIsProcessingPayment(false);

      if (paymentResult.error) {
         alert(paymentResult.error.message);
      }
      if (paymentResult.paymentIntent.status === "succeeded") {
         alert("Payment ok");
      }
   };

   return (
      <PaymentformContainer>
         <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment:</h2>
            <CardElement></CardElement>
            <PaymentButton
               buttonType={
                  isProcessingPayment
                     ? BUTTON_TYPE_CLASSES.disabled
                     : BUTTON_TYPE_CLASSES.inverted
               }
               isLoading={isProcessingPayment}
            >
               Pay now
            </PaymentButton>
         </FormContainer>
      </PaymentformContainer>
   );
};

export default Paymentform;
