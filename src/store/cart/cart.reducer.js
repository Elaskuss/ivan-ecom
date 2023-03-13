import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDocument } from "../../utils/firebase/firebase.utils";

const removeCardItem = (cartItems, productToRemove) => {
   return cartItems.filter((item) => item.id !== productToRemove.id);
};

const addCardItems = (cartItems, productToAdd) => {
   console.log(productToAdd);
   const existingItem = cartItems.find((item) => item.id === productToAdd.id);
   if (existingItem) {
      return cartItems.map((cartItem) =>
         cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }
   return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseCardItems = (cartItems, productToAdd) => {
   const existingItem = cartItems.find((item) => item.id === productToAdd.id);
   if (existingItem.quantity > 1) {
      return cartItems.map((cartItem) =>
         cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
      );
   } else if (existingItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== productToAdd.id);
   }

   return;
};

export const addCartItemsToUser = createAsyncThunk(
   "cart/addCardItemsToUser",
   async (payload) => {
      const {cartItems, currentUser} = payload;
      const data = {...currentUser, cartItems};
      return await addDocument("users", currentUser.uid, data);
   }
);

const INIT_STATE = {
   isCartOpen: false,
   cartItems: [],
   totalPrice: 0,
   totalQuantity: 0,
   loading: false,
   error: null,
};

export const cartSlice = createSlice({
   name: "cart",
   initialState: INIT_STATE,
   reducers: {
      setIsCartOpen(state, action) {
         state.isCartOpen = action.payload;
      },
      addItemToCart(state, action) {
         state.cartItems = addCardItems(state.cartItems, action.payload);
      },
      removeItemFromCart(state, action) {
         state.cartItems = removeCardItem(state.cartItems, action.payload);
      },
      decreaseItemFromCart(state, action) {
         state.cartItems = decreaseCardItems(state.cartItems, action.payload);
      },
   }
});

export const {
   setIsCartOpen,
   addItemToCart,
   removeItemFromCart,
   decreaseItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
