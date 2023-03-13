import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
`;

export const NavLinks = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const LogoContainer = styled(Link)`
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   font-size: 40px;
   font-weight: 600;
   text-align: center;
   align-self: center;
   letter-spacing: -2px;
   transition-property: font-weight, letter-spacing, font-size;
   transition-duration: 0.2s;

   &:hover {
      transition-property: font-weight, letter-spacing, font-size;
      transition-duration: 0.2s;
      font-size: 45px;
      font-weight: 700;
      letter-spacing: 0px;
   }
`;

export const NavLink = styled(Link)`
   display: flex;
   margin-left: 7px;
   height: 45px;
   width: 45px;
   cursor: pointer;
   justify-content: center;
   align-items: center;
   transition-property: margin-bottom;
   transition-duration: 0.2s;

   &:hover {
      transition-property: margin-bottom;
      transition-duration: 0.2s;
      margin-bottom: 3px;
   }
`;
