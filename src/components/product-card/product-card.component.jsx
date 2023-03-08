import { useDispatch } from "react-redux";
import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.reducer";
import Button from "../button/button.component";
import {ProductCardContainer, Footer, Price, Name} from "./product-card.styles.jsx";

const ProductCard = ({product}) => {
   const dispatch = useDispatch();

   const addToCartButtonHandler = () => {
      dispatch(setIsCartOpen(true));
      dispatch(addItemToCart(product));
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