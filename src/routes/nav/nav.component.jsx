import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCurrentUser, selectCurrentUserAuth } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
   NavigationContainer,
   LogoContainer,
   NavLinks,
   NavLink,
} from "./nav.styles";

const Nav = () => {

   const currentUser = useSelector(selectCurrentUserAuth);
   const isCartOpen = useSelector(selectIsCartOpen);

   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to="/">
               <CrwnLogo />
            </LogoContainer>
            <NavLinks>
               <NavLink to="/shop">SHOP</NavLink>
               {currentUser ? (
                  <NavLink as="span" onClick={signOutUser}>
                     SIGN OUT
                  </NavLink>
               ) : (
                  <NavLink to="/sign-in">SIGN IN</NavLink>
               )}
               <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </Fragment>
   );
};

export default Nav;
