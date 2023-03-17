import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectCartItems } from "../../store/cart/cart.selector";
import { fetchCategories } from "../../store/categories/category.reducer";
import CatergoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   useEffect(() => {
      dispatch(fetchCategories());
   }, [dispatch]);

   useEffect(() => {
      if(cartItems.length === 0){
         dispatch(setIsCartOpen(false));
      }
   }, [cartItems])

   return (
      <Routes>
         <Route index element={<CatergoriesPreview />} />
         <Route path=":category" element={<Category />} />
      </Routes>
   );
};

export default Shop;
