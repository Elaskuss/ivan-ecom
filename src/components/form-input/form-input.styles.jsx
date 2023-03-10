import styled, { css } from "styled-components";

const subColor = "grey";
const badColor = "red";

const shrinkLabelStyles = css`
   top: -14px;
   font-size: 12px;
   color: ${subColor};
`;

export const FormInputLabel = styled.label`
   color: ${subColor};
   font-size: 16px;
   font-weight: normal;
   position: absolute;
   pointer-events: none;
   left: 5px;
   top: 10px;
   transition: 300ms ease all;

   &.bad {
      color: ${badColor};
   }
   

   ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
   background: none;
   background-color: white;
   color: ${subColor};
   font-size: 18px;
   padding: 10px 10px 10px 5px;
   display: block;
   width: 100%;
   border: none;
   border-radius: 0;
   border: 1px solid ${subColor};
   margin: 25px 0;

   &:focus {
      outline: none;
   }

   &.bad {
      box-sizing: border-box;
      border: 2px solid ${badColor};
   }
`;

export const Group = styled.div`
   position: relative;
   margin: 45px 0;

   p{
      position: absolute; 
      font-size:12px;
      bottom: -30px;
      color: ${badColor};
   }
`;
