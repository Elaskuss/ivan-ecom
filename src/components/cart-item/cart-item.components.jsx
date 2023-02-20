import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartItemContainer, ItemControlsContainer, ItemDetails, RemoveButton } from "./cart-item.styles";
import "./cart-item.styles";

const CartItem = ({ cartItem }) => {
   const { name, quantity, imageUrl, price } = cartItem;
   const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);

   const decrease = () => {
      decreaseItemFromCart(cartItem);
   };

   const increase = () => {
      addItemToCart(cartItem);
   };

   const remove = () => {
      removeItemFromCart(cartItem);
   };

   return (
      <CartItemContainer>
         <img src={imageUrl} alt={`${name}`} />
         <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">
               {quantity} x {price}$
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
