import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
   categories: [],
}

export const categoriesSlice = createSlice({
   name: "category",
   initialState: INIT_STATE,
   reducers: {
      setCategoriesMap(state , action){
         state.categories = action.payload
      }
   }
})

export const {setCategoriesMap} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;