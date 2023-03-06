import {
   CheckoutItemContainer,
   ImageContainer,
   Quantity,
   RemoveButton,
} from "./checkout.item.styles";
import "./checkout.item.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";

const CheckoutItem = ({ checkoutItem }) => {
   const { name, quantity, price, imageUrl } = checkoutItem;
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const decrease = () => {
      dispatch(decreaseItemFromCart(cartItems, checkoutItem));
   };

   const increase = () => {
      dispatch(addItemToCart(cartItems, checkoutItem));
   };

   const remove = () => {
      dispatch(removeItemFromCart(cartItems, checkoutItem));
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
         <span className="price">{price},00 kr</span>
         <RemoveButton onClick={remove}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
   );
};

export default CheckoutItem;
