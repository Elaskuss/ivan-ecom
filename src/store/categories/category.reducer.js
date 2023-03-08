import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const INIT_STATE = {
   categories: [],
   loading: false,
   error: null
}

export const fetchCategories = createAsyncThunk("category/fetchCategories", async () => {
   const categoriesArray = await getCategoriesAndDocuments();
   return categoriesArray;
})

export const categoriesSlice = createSlice({
   name: "category",
   initialState: INIT_STATE,
   extraReducers: builder => {
      builder.addCase(fetchCategories.pending, state => {
         state.loading = true;
      });
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
         state.categories = action.payload
         state.loading = false;
      });
      builder.addCase(fetchCategories.rejected, (state, action) => {
         state.error = action.payload
         state.loading = false;
      } );
   }
})

export const categoriesReducer = categoriesSlice.reducer;