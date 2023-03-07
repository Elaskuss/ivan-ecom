// import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
   CategoryPreviewContainer,
   Preview,
   Title,
} from "./catergory-preview.styles";
import "./catergory-preview.styles";
import Spinner from "../spinner/spinner.component";
import { useSelector } from "react-redux";
import { selectIsCategoriesLoading } from "../../store/categories/category.selector";

const CatergoryPreview = ({ title, products }) => {
   const isLoading = useSelector(selectIsCategoriesLoading);

   return (
      <>
         {isLoading ? (
            <Spinner></Spinner>
         ) : (
            <CategoryPreviewContainer>
               <h2>
                  <Title to={title}>{title.toUpperCase()}</Title>
               </h2>
               <Preview>
                  {products.map((product) => {
                     if (products.indexOf(product) < 4) {
                        return (
                           <ProductCard key={product.id} product={product} />
                        );
                     }

                     return <></>;
                  })}
               </Preview>
            </CategoryPreviewContainer>
         )}
      </>
   );
};

export default CatergoryPreview;
