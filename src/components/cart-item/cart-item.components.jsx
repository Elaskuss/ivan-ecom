
import { CartItemContainer, ItemControlsContainer, ItemDetails, RemoveButton } from "./cart-item.styles";
import "./cart-item.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";

const CartItem = ({ cartItem }) => {
   const cartItems = useSelector(selectCartItems);
   const dispatch = useDispatch();
   const { name, quantity, imageUrl, price } = cartItem;

   const decrease = () => {
      dispatch(decreaseItemFromCart(cartItems, cartItem));
   };

   const increase = () => {
      dispatch(addItemToCart(cartItems, cartItem));
   };

   const remove = () => {
      dispatch(removeItemFromCart(cartItems, cartItem));
   };

   return (
      <CartItemContainer>
         <img src={imageUrl} alt={`${name}`} />
         <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">
               {quantity} x {price}kr
            </span>
         </ItemDetails>
         <ItemControlsContainer>
            <div className="arrow" onClick={decrease}>
               &#10094;
            </div>
            <span className="quantity" >{quantity}</span>
            <div className="arrow" onClick={increase}>
               &#10095;
            </div>
         </ItemControlsContainer>
         <RemoveButton >
            <span onClick={remove}>&#10005;</span>
         </RemoveButton>
      </CartItemContainer>
   );
};

export default CartItem;
