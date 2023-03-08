import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Paymentform from "../../components/payment-form/payment-form.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";

const Checkout = () => {
   const cartItems = useSelector(selectCartItems);
   const totalPrice = useSelector(selectCartTotal);

   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
         </CheckoutHeader>

         {cartItems.length ? (
            cartItems.map((item) => {
               return <CheckoutItem key={item.id} checkoutItem={item} />;
            })
         ) : (
            <h1>You have nothing to checkout</h1>
         )}

         <Total>Total: {totalPrice},00 kr</Total>
         <Paymentform></Paymentform>
      </CheckoutContainer>
   );
};

export default Checkout;
