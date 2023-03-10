import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserDocFromAuth, getUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const INIT_STATE = {
   currentUserAuth: null,
   currentUser: null,
   savedItems: [],
   loading: false
}

export const setCurrentUser = createAsyncThunk(
   "user/setCurrentUser",
   async (userAuth) => {
      if(userAuth){         
         const userDoc = await getUserDocFromAuth(userAuth);
         console.log(userDoc);
         return userDoc;
      }
      else {
         return null
      }
   }
)

export const setCurrentUserAuth = createAsyncThunk(
   "user/setCurrentUserAuth",
   async(userAuth) => {
      if (userAuth) {
         await createUserDocFromAuth(userAuth);
         return userAuth;
      }
      else {
         return null;
      }
   }
)

export const userSlice = createSlice({
   name: "users", 
   initialState: INIT_STATE,
   reducers: {
   },
   extraReducers: builder => {
      builder.addCase(setCurrentUser.pending, (state) => {
         state.loading = true;
      })
      builder.addCase(setCurrentUser.fulfilled, (state, action) => {
         console.log(action);
         state.currentUser = action.payload;
         state.loading = false;
      })
      builder.addCase(setCurrentUserAuth.fulfilled, (state, action) => {
         console.log(action);
         state.currentUserAuth = action.payload
      })
   }
})


export const userReducer =  userSlice.reducer;