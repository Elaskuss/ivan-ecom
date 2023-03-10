import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import LoggedInMenu from "./routes/logged-in/logged-in.component";
import { useEffect } from "react";
import {
   createUserDocFromAuth,
   onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser, setCurrentUserAuth } from "./store/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "./store/cart/cart.selector";
import { selectCurrentUser, selectCurrentUserAuth } from "./store/user/user.selector";
import { addCartItemsToUser } from "./store/cart/cart.reducer";

function App() {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const currentUserAuth = useSelector(selectCurrentUserAuth);
   const currentUser = useSelector(selectCurrentUser);

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         console.log("setCurrentUserAuth 1")
         dispatch(setCurrentUserAuth(user));
      });
      return unsubscribe;
   });

   useEffect(() => {
      console.log("setCurrentUser 1")
      dispatch(setCurrentUser(currentUserAuth));
   }, [currentUserAuth]);

   useEffect(() => {
      if (currentUserAuth) {
         const payload = { cartItems, currentUser }
         dispatch(addCartItemsToUser(payload));
      }
   }, [cartItems]);

   return (
      <Routes>
         <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />}>
               <Route path="hats" element={<Home />} />
            </Route>
            <Route path="sign-in" element={<Authentication />} />
            <Route path="user" element={<LoggedInMenu />} />
            <Route path="checkout" element={<Checkout />} />
         </Route>
      </Routes>
   );
}

export default App;
