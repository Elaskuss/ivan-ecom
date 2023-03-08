
import { useSelector } from "react-redux";
import CatergoryPreview from "../../components/catergory-preview/catergory-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";

const CatergoriesPreview = () => {
   const categoriesMap = useSelector(selectCategoriesMap);
   const loading = useSelector(selectCategoriesIsLoading); 
   return (
      <>
         {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            
            return (
               <>
               {loading ? <Spinner/> : <CatergoryPreview key={title} title={title} products={products}/>}
               </>
            )
         })}
      </>
   );
};

export default CatergoriesPreview;
