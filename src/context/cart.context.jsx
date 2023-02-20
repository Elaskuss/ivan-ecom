import { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext({
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   decreaseItemFromCart: () => {},

   setIsCartOpen: () => {},
   setCartItems: () => {},

   isCartOpen: false,
   cartItems: [],

   totalPrice: 0,
   totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [totalQuantity, setTotalQuantity] = useState(0);
   const [totalPrice, setTotalPrice] = useState(0);

   const addItemToCart = (product) => {
      setCartItems(addCardItems(cartItems, product));
   };

   const removeItemFromCart = (product) => {
      setCartItems(removeCardItem(cartItems, product));
   };

   const decreaseItemFromCart = (product) => {
      setCartItems(decreaseCardItems(cartItems, product));
   };

   const addCardItems = (cartItems, productToAdd) => {
      const existingItem = cartItems.find(
         (item) => item.id === productToAdd.id
      );
      if (existingItem) {
         return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
               ? { ...cartItem, quantity: cartItem.quantity + 1 }
               : cartItem
         );
      }

      return [...cartItems, { ...productToAdd, quantity: 1 }];
   };

   const removeCardItem = (cartItems, productToRemove) => {
      return cartItems.filter((item) => item.id !== productToRemove.id);
   };

   const decreaseCardItems = (cartItems, productToAdd) => {
      const existingItem = cartItems.find(
         (item) => item.id === productToAdd.id
      );
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

   const openCart = (newValue) => {
      setIsCartOpen(newValue);
   }

   const totalItemsInCart = useCallback(() => {
      const newCartCount = cartItems.reduce(
         (total, cartItem) => total + cartItem.quantity,
         0
      );
      setTotalQuantity(newCartCount);
      
   }, [cartItems]);

   const totalPriceOfItems = useCallback(() => {
      const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
      setTotalPrice(newTotalPrice);
      

   }, [cartItems]);

   useEffect(() => {
      totalItemsInCart();
   }, [cartItems, totalItemsInCart]);

   useEffect(() => {
      totalPriceOfItems();
   }, [cartItems, totalPriceOfItems]);

   const value = {
      isCartOpen,
      openCart,
      cartItems,
      addItemToCart,
      totalQuantity,
      totalPrice,
      totalPriceOfItems,
      totalItemsInCart,
      removeItemFromCart,
      decreaseItemFromCart,
   };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
