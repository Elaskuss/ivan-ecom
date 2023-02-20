import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.styles";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
   const { cartItems } = useContext(CartContext);
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
      navigate("/checkout");
   };

   return (
      <CartDropdownContainer>
         <CartItems>
            {cartItems.length ? (
               cartItems.map((cartItem) => {
                  return <CartItem key={cartItem.id} cartItem={cartItem} />;
               })
            ) : (
               <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
         </CartItems>

         {cartItems.length ? (
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
         ) : (
            <></>
         )}
      </CartDropdownContainer>
   );
};

export default CartDropdown;
