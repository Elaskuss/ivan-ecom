import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryTitle, CategoryContainer } from "./category.styles";
import "./category.styles.scss";

const Category = () => {
   const { category } = useParams();
   const { categoriesMap } = useContext(CategoriesContext);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(categoriesMap[category]);
   }, [categoriesMap, products, category]);

   return (
      <>
      
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
         
         {products &&
            products.map((product) => {
               return <ProductCard key={product.id} product={product} />;
            })}
      </CategoryContainer>
      </>
   
   );
};

export default Category;
