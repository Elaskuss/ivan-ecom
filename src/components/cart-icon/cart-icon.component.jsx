import { useContext } from "react";
// import {ReactComponent as ShoppingCart} from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
   const {isCartOpen, openCart, totalQuantity} = useContext(CartContext);

   const toggleIsCartOpen = () => {
      return openCart(!isCartOpen);
      
   }

   return (
      <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingIcon/>
         <ItemCount>{totalQuantity}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon