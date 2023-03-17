import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectCartItems, selectCartReducer, selectIsCartOpen } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";
import "./cart-dropdown.styles";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
   const dispatch = useDispatch()
   const componentRef = useRef(null);

   const isCartOpen = useSelector(selectIsCartOpen);
   const cartItems = useSelector(selectCartItems);

   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
      dispatch(setIsCartOpen(false));
      navigate("/checkout");
   };

   const handleClickOutside = (event) => { 
      if (componentRef.current && !componentRef.current.contains(event.target)) {
            dispatch(setIsCartOpen(!isCartOpen));
      }
    };

   useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

   return (
      <CartDropdownContainer ref={componentRef}>
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
