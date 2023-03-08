import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategories } from "../../store/categories/category.reducer";
import CatergoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchCategories());
   }, [dispatch]);

   return (
      <Routes>
         <Route index element={<CatergoriesPreview />} />
         <Route path=":category" element={<Category />} />
      </Routes>
   );
};

export default Shop;
