import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
   addDocument,
   createUserDocFromAuth,
   getUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const INIT_STATE = {
   currentUserAuth: null,
   currentUser: null,
   savedItems: [],
   loading: false,
};

const addOrRemoveSavedItem = (savedItems, productToAdd) => {
   const existingItem = savedItems.find((item) => item.id === productToAdd.id);
   if (existingItem) {
      return savedItems.filter((item) => item.id !== productToAdd.id);
   } else {
      return [...savedItems, { ...productToAdd }];
   }
};

export const setCurrentUser = createAsyncThunk(
   "user/setCurrentUser",
   async (userAuth) => {
      if (userAuth) {
         const userDoc = await getUserDocFromAuth(userAuth);     
         return userDoc;
      } else {
         return null;
      }
   }
);

export const setCurrentUserAuth = createAsyncThunk(
   "user/setCurrentUserAuth",
   async (userAuth) => {
      if (userAuth) {
         await createUserDocFromAuth(userAuth);
         return userAuth;
      } else {
         return null;
      }
   }
);

export const addSavedItemsToUser = createAsyncThunk(
   "user/addSavedItemsToUser",
   async (payload) => {
      const { currentUser, savedItems } = payload;
      const data = { ...currentUser, savedItems};
      addDocument("users", currentUser.uid, data);
      return savedItems;
   }
);

export const updateCurrentUser = createAsyncThunk(
   "user/updateCurrentUser",
   async (payload) => {
      const { currentUser, changes } = payload;
      const data = { ...currentUser, ...changes};
      addDocument("users", currentUser.uid, data);
      return data
   }
);


export const setCurrentUserSavedItems = createAsyncThunk(
   "user/setCurrentUserSavedItems", 
   async(userAuth) => {
      const userDoc = await getUserDocFromAuth(userAuth);
      return userDoc.savedItems;
   }
)

export const userSlice = createSlice({
   name: "users",
   initialState: INIT_STATE,
   reducers: {
      addOrRemoveItemToSavedItems(state, action) {
         state.savedItems = addOrRemoveSavedItem(
            state.savedItems,
            action.payload
         );
      },
      resetUserSlice: (state) => INIT_STATE,
   },
   extraReducers: (builder) => {
      builder.addCase(setCurrentUser.pending, (state) => {
         state.loading = true;
      })
      builder.addCase(setCurrentUser.fulfilled, (state, action) => {
         state.currentUser = action.payload;
         state.savedItems = action.payload.savedItems;
         state.loading = false;
      });
      builder.addCase(setCurrentUserAuth.pending, state => {
         return state;
      })
      builder.addCase(setCurrentUserAuth.fulfilled, (state, action) => {
         state.currentUserAuth = action.payload;
      });
      builder.addCase(setCurrentUserSavedItems.fulfilled, (state, action) => {
         state.savedItems = action.payload;
      });
      builder.addCase(updateCurrentUser.fulfilled, (state, action) => {
         state.currentUser = action.payload
      }) 
   },
});

export const { addOrRemoveItemToSavedItems, resetUserSlice } = userSlice.actions;

export const userReducer = userSlice.reducer;
