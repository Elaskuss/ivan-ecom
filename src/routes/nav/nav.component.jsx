import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/icon-cart/icon-cart.component";
import { selectCurrentUserAuth } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
   NavigationContainer,
   LogoContainer,
   NavLinks,
   NavLink,
} from "./nav.styles";
import ProfileIcon from "../../components/icon-profile/icon-profile.component";

const Nav = () => {

   const currentUser = useSelector(selectCurrentUserAuth);
   const isCartOpen = useSelector(selectIsCartOpen);
   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to="/">
               Ivans Ecom
            </LogoContainer>
            <NavLinks>
               <NavLink to="/shop">SHOP</NavLink>
               {currentUser ? (
                  <NavLink to="/user">
                     <ProfileIcon loggedIn={true}></ProfileIcon>
                  </NavLink>
               ) : (
                  <NavLink to="/sign-in">
                     <ProfileIcon loggedIn={false}></ProfileIcon>
                  </NavLink>
               )}
               <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
         </NavigationContainer>
         <Outlet />
      </Fragment>
   );
};

export default Nav;
