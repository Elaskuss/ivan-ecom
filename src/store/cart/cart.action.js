import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.type";

export const setCartItems = (cartItems) => {
   return createAction(CART_ACTION_TYPES.SET_CART, cartItems);
};

export const setIsCartOpen = (cartOpenBool) => {
   return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, cartOpenBool);
};

const removeCardItem = (cartItems, productToRemove) => {
   return cartItems.filter((item) => item.id !== productToRemove.id);
};

const addCardItems = (cartItems, productToAdd) => {
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

export const addItemToCart = (cartItems, product) => {
   const newCartItems = addCardItems(cartItems, product);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, product) => {
   const newCartItems = removeCardItem(cartItems, product);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseItemFromCart = (cartItems, product) => {
   const newCartItems = decreaseCardItems(cartItems, product);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};