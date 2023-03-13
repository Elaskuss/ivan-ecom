import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setIsCartOpen } from "../../store/cart/cart.reducer";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {ProductCardContainer, Footer, Price, Name, Bookmark} from "./product-card.styles.jsx";

import { selectCurrentUser, selectSavedItems } from "../../store/user/user.selector";
import { addOrRemoveItemToSavedItems } from "../../store/user/user.reducer";

const ProductCard = ({product}) => {
   const user = useSelector(selectCurrentUser);
   const savedItems = useSelector(selectSavedItems)
   const dispatch = useDispatch();

   const isItemSaved = savedItems.find(item => item.id === product.id);

   const addToCartButtonHandler = () => {
      dispatch(setIsCartOpen(true));
      dispatch(addItemToCart(product));
   }
   
   const addToSavedItemsHandler = () => {
      dispatch(addOrRemoveItemToSavedItems(product));
   }

   const {name, imageUrl, price} = product;
   return (
      <ProductCardContainer>
         {user && <Bookmark className={isItemSaved ? "saved" : ""} onClick={addToSavedItemsHandler}></Bookmark>}
         <img src={imageUrl} alt={`${name}`} />
         <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
         </Footer>
         <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartButtonHandler}>Add to cart</Button>

      </ProductCardContainer>
   )
}

export default ProductCard