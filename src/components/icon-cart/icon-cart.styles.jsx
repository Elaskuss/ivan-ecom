import styled from "styled-components";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
   width: 45px;
   height: 45px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   box-sizing: content-box;

   transition-property: margin-bottom;
   transition-duration: 0.2s;

   &:hover{
      transition-property: margin-bottom;
      transition-duration: 0.2s;
      margin-bottom: 3px;
   }
`;

export const ShoppingIcon = styled(ShoppingCart)`
   margin-bottom: 3px;
   width: 25px;
   height: 28px;

   transition-property: font-size, font-weight;
   transition-duration: 0.1s;

   &:hover {
      transition-property: font-size, font-weight;
      transition-duration: 0.1s;
      font-weight: 900;
      font-size: 18px;
   }
`;

export const ItemCount = styled.span`
   position: absolute;
   font-size: 10px;
   font-weight: bold;
   top: 45%;
   left: 45%;
`;
