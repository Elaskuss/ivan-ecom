
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategoriesMap } from "../../store/categories/category.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CatergoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      const getCategoriesMap = async () => {
         const categoriesArray = await getCategoriesAndDocuments();
         dispatch(setCategoriesMap(categoriesArray));
      }
      getCategoriesMap();
   }, [dispatch]);

   return (
      <Routes>
         <Route index element={<CatergoriesPreview/>}/>
         <Route path=":category" element={<Category/>}/>
      </Routes>
   )
};

export default Shop;
