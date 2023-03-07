
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import CatergoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      const getCategoriesMap = () => {
         dispatch(fetchCategoriesStart());
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
