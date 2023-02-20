import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
   CheckoutItemContainer,
   ImageContainer,
   Quantity,
   RemoveButton,
} from "./checkout.item.styles";
import "./checkout.item.styles";

const CheckoutItem = ({ checkoutItem }) => {
   const { addItemToCart, decreaseItemFromCart, removeItemFromCart } =
      useContext(CartContext);

   const { name, quantity, price, imageUrl } = checkoutItem;

   const decrease = () => {
      decreaseItemFromCart(checkoutItem);
   };

   const increase = () => {
      addItemToCart(checkoutItem);
   };

   const remove = () => {
      removeItemFromCart(checkoutItem);
   };

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
         </ImageContainer>

         <span className="name">{name}</span>
         <Quantity className="quantity">
            <div className="arrow" onClick={decrease}>
               &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={increase}>
               &#10095;
            </div>
         </Quantity>
         <span className="price">{price}</span>
         <RemoveButton onClick={remove}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
   );
};

export default CheckoutItem;
