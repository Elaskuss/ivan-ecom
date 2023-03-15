import styled from "styled-components";
import FormInput from "../form-input/form-input.component";

export const SignUpContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 380px;

   h2 {
      margin: 10px 0;
   }
`;

export const GroupedInput = styled.div`
   display: flex;
   column-gap: 10px;
   margin: 45px 0px;
   div {
      margin: 0px;
      flex-grow: 1;
   }
   input{
      margin: 0px;
   }
`;
