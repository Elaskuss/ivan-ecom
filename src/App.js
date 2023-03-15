import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import LoggedInMenu from "./routes/logged-in/logged-in.component";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import {
   addSavedItemsToUser,
   setCurrentUser,
   setCurrentUserAuth,
} from "./store/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import {
   selectCurrentUser,
   selectCurrentUserAuth,
   selectSavedItems,
} from "./store/user/user.selector";
import SavedItems from "./routes/saved-items/saved-items.component";

function App() {
   const dispatch = useDispatch();
   const currentUser = useSelector(selectCurrentUser);
   const savedItems = useSelector(selectSavedItems);

   const currentUserAuth = useSelector(selectCurrentUserAuth);

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         dispatch(setCurrentUserAuth(user))
         // .unwrap()
         // .then(user => {
         //    dispatch(setCurrentUser(user));
         // });
      });

      return unsubscribe;
   }, );

   useEffect(() => {
      dispatch(setCurrentUser(currentUserAuth))
   }, [currentUserAuth]);

   useEffect(() => {
      dispatch(addSavedItemsToUser({currentUser, savedItems}))
   }, [savedItems]);

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
            <Route path="saved-items" element={<SavedItems/>}></Route>
         </Route>
      </Routes>
   );
}

export default App;
