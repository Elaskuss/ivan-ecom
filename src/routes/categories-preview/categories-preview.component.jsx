import { useContext } from "react";
import CatergoryPreview from "../../components/catergory-preview/catergory-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const CatergoriesPreview = () => {
   const { categoriesMap } = useContext(CategoriesContext);

   return (
      <>
         {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            
            return (
               <CatergoryPreview key={title} title={title} products={products}/>
            )
         })}
      </>
   );
};

export default CatergoriesPreview;
