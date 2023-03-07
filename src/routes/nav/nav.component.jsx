import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import {
   NavigationContainer,
   LogoContainer,
   NavLinks,
   NavLink,
} from "./nav.styles";
import { singOutStart } from "../../store/user/user.action";

const Nav = () => {
   const dispatch = useDispatch();

   const signOutHandler = () => {
      dispatch(singOutStart());
   }

   const currentUser = useSelector(selectCurrentUser);
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
                  <NavLink as="span" onClick={signOutHandler}>
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
