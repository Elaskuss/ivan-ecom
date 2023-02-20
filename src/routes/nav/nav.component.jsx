import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";



import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./nav.styles";

const Nav = () => {
   const { currentUser} = useContext(UserContext);
   const {isCartOpen} = useContext(CartContext);

   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to="/">
               <CrwnLogo />
            </LogoContainer>
            <NavLinks>
               <NavLink to="/shop">
                  SHOP
               </NavLink>
               {currentUser ? (
                  <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
               ) : (
                  <NavLink to="/sign-in">
                     SIGN IN
                  </NavLink>
               )}
               <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </Fragment>
   );
};

export default Nav;
