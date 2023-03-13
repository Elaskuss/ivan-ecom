import styled from "styled-components";
import {ReactComponent as BookmarkSvg} from "../../assets/bookmark.svg"

export const ProductCardContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;

   img {
      width: 100%;
      height: 95%;
      object-fit: cover;
      margin-bottom: 5px;
   }

   button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;
   }

   &:hover {
      img {
         opacity: 0.90;
      }

      button {
         opacity: 0.85;
         display: flex;
      }
   }
`;

export const Footer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`;
export const Name = styled.span`
   width: 90%;
   margin-bottom: 15px;
`;
export const Price = styled.span`
   width: 10%;
`;

export const Bookmark = styled(BookmarkSvg)`
   opacity: 1;
   z-index: 3;
   height: 40px; 
   width: 40px;
   position: absolute;
   right: 0px;
   stroke: black;
   stroke-linejoin: round;
   fill: white;

   &:hover{
      fill: lightgray;
      cursor: pointer;
      opacity: 0.8;
   }

   &.saved{
      opacity: 1;
      stroke: white;
      fill:black;

      &:hover {
         fill: lightgray;
      }
   }
`