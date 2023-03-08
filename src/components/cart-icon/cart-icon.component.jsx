import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
// import {ReactComponent as ShoppingCart} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.reducer";


const CartIcon = () => {
   const isCartOpen = useSelector(selectIsCartOpen);
   const totalQuantity = useSelector(selectCartCount);
   const dispatch = useDispatch();
   
   const toggleIsCartOpen = () => {
      dispatch(setIsCartOpen(!isCartOpen))
   };

   return (
      <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingIcon/>
         <ItemCount>{totalQuantity}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon