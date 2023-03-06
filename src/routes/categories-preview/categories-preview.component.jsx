
import { useSelector } from "react-redux";
import CatergoryPreview from "../../components/catergory-preview/catergory-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CatergoriesPreview = () => {
   const categoriesMap = useSelector(selectCategoriesMap);
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
