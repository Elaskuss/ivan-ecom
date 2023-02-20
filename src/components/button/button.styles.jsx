import styled from "styled-components";

export const ButtonContainer = styled.button`
   min-width: 165px;
   width: auto;
   height: 50px;
   letter-spacing: 0.5px;
   line-height: 50px;
   font-size: 90%;
   background-color: black;
   color: white;
   text-transform: uppercase;
   font-weight: 900;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
 
   &:hover {
     background-color: white;
     color: black;
     border: 1px solid black;
   }
 
   &.google-sign-in {
     background-color: #4285f4;
     color: white;
 
     &:hover {
       background-color: #357ae8;
       border: none;
     }
   }
 
   &.inverted {
     background-color: white;
     color: black;
     border: 1px solid black;
 
     &:hover {
       background-color: black;
       color: white;
       border: none;
     }
   
`;
