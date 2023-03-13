import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
   SavedItemsPreviewButton,
   SavedItemsPreviewContainer,
   Preview,
   Title,
} from "./saved-items-preview.styles";

const SavedItemsPreview = ({ products }) => {
   const length = Object.keys(products).length
   return (
      <SavedItemsPreviewContainer>
         <h2>
            <Title to={"/saved-items"}>My saved items</Title>
         </h2>
         <Preview>
            {products.map((product) => {
               if (products.indexOf(product) < 4) {
                  return <ProductCard key={product.id} product={product} />;
               }

               return <></>;
            })}
         </Preview>
         {length > 4 && (
            <Link to={"/saved-items"}>
               <SavedItemsPreviewButton>See all</SavedItemsPreviewButton>
            </Link>
         )}
      </SavedItemsPreviewContainer>
   );
};

export default SavedItemsPreview;
