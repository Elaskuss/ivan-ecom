import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserDocFromAuth, getUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const INIT_STATE = {
   currentUserAuth: null,
   currentUser: null,
   userCart: [],
   savedItems: [],
   loading: false
}

export const setCurrentUser = createAsyncThunk(
   "user/setCurrentUser",
   async (userAuth) => {
      if(userAuth){
         const userDoc = await getUserDocFromAuth(userAuth);
         return userDoc;
      }
      else {
         return null
      }
   }
)

export const userSlice = createSlice({
   name: "users", 
   initialState: INIT_STATE,
   reducers: {
      setCurrentUserAuth(state, action) {
         state.currentUserAuth = action.payload
      },
   },
   extraReducers: builder => {
      builder.addCase(setCurrentUser.pending, (state) => {
         state.loading = true;
      })
      builder.addCase(setCurrentUser.fulfilled, (state, action) => {
         state.currentUser = action.payload
      })
   }
})

export const {setCurrentUserAuth} = userSlice.actions;

export const userReducer =  userSlice.reducer;