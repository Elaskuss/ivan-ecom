import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";
import "./category.styles";
import { useSelector } from "react-redux";
import {
   selectCategoriesMap,
   selectIsCategoriesLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
   const { category } = useParams();
   const categoriesMap = useSelector(selectCategoriesMap);
   const isLoading = useSelector(selectIsCategoriesLoading);

   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(categoriesMap[category]);
   }, [categoriesMap, products, category]);

   return (
      <>
         <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         {isLoading ? (
            <Spinner></Spinner>
         ) : (
            <CategoryContainer>
               {products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
               })}
            </CategoryContainer>
         )}
      </>
   );
};

export default Category;
