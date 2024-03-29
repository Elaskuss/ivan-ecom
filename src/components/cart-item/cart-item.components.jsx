
import { CartItemContainer, ItemControlsContainer, ItemDetails, RemoveButton } from "./cart-item.styles";
import "./cart-item.styles";
import { useDispatch } from "react-redux";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../store/cart/cart.reducer";

const CartItem = ({ cartItem }) => {
   const dispatch = useDispatch();
   const { name, quantity, imageUrl, price } = cartItem;

   const decrease = (event) => {
      event.stopPropagation();
      dispatch(decreaseItemFromCart(cartItem));
   };

   const increase = () => {
      dispatch(addItemToCart(cartItem));
   };

   const remove = (event) => {
      event.stopPropagation();
      dispatch(removeItemFromCart(cartItem));
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
