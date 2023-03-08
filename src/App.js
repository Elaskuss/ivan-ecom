import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
   createUserDocFromAuth,
   onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocFromAuth(user);
         }

         dispatch(setCurrentUser(user));
      });

      return unsubscribe;
      /* eslint-disable */
      //Dispatch is not a dependency
   }, []);
      /* eslint-enable */
   return (
      <Routes>
         <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />}>
               <Route path="hats" element={<Home />} />
            </Route>
            <Route path="sign-in" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
         </Route>
      </Routes>
   );
}

export default App;
