import ProductCard from "../../components/product-card/product-card.component";
import { SavedItemsTitle, SavedItemsContainer } from "./saved-items.styles";
import "./saved-items.styles";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import { selectSavedItems } from "../../store/user/user.selector";

const SavedItems = () => {
   const savedItems = useSelector(selectSavedItems);

   return (
      <>
         <SavedItemsTitle>My saved items</SavedItemsTitle>
         {savedItems.length ? (
            <SavedItemsContainer>
            {savedItems.length &&
               savedItems.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
               })}
         </SavedItemsContainer>
         ) : (
            <Spinner />
         )}
      </>
   );
};

export default SavedItems;
