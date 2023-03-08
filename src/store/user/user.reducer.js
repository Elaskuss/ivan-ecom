import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
   currentUser: null,
}

export const userSlice = createSlice({
   name: "users", 
   initialState: INIT_STATE,
   reducers: {
      setCurrentUser(state, action) {
         state.currentUser = action.payload
      }
   }
})

export const {setCurrentUser} = userSlice.actions;

export const userReducer =  userSlice.reducer;