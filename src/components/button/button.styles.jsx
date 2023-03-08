import styled from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
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
`;
export const GoogleButton = styled(BaseButton)`
   background-color: #4285f4;
   color: white;

   &:hover {
      background-color: #357ae8;
      border: none;
   }
`;

export const InvertedButton = styled(BaseButton)`
   background-color: white;
   color: black;
   border: 1px solid black;

   &:hover {
      background-color: black;
      color: white;
      border: none;
   }
`;

export const DisabledButton = styled(BaseButton)`
   background-color: grey;
   color: white;
   border: 1px solid black;
   pointer-events: none;
`;

export const ButtonSpinner = styled(SpinnerContainer)`
   justify-self: center;
   align-self: center;
   width: 30px;
   height: 30px;
`;
