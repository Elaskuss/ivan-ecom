import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import {ProductCardContainer, Footer, Price, Name} from "./product-card.styles.jsx";

const ProductCard = ({product}) => {
   const cartItems = useSelector(selectCartItems);
   const dispatch = useDispatch();

   const addToCartButtonHandler = () => {
      dispatch(setIsCartOpen(true));
      dispatch(addItemToCart(cartItems, product));
   }

   const {name, imageUrl, price} = product;
   return (
      <ProductCardContainer>
         <img src={imageUrl} alt={`${name}`} />
         <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
         </Footer>
         <Button buttonType="inverted" onClick={addToCartButtonHandler}>Add to cart</Button>

      </ProductCardContainer>
   )
}

export default ProductCard