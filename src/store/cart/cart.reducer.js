import { createSlice } from "@reduxjs/toolkit";

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

const INIT_STATE = {
   isCartOpen: false,
   cartItems: [],
   totalPrice: 0,
   totalQuantity: 0,
};

export const cartSlice = createSlice({
   name: "cart",
   initialState: INIT_STATE,
   reducers: {
      setCartItems(state, action) {
         state.cartItems = action.payload;
      },
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
   },
});

export const {
   setCartItems,
   setIsCartOpen,
   addItemToCart,
   removeItemFromCart,
   decreaseItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
