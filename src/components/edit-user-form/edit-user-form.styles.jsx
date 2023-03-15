import styled from "styled-components";
import FormInput from "../form-input/form-input.component";

export const GroupedInput = styled.div`
   display: flex;
   margin-bottom: 15px;
   column-gap: 10px;

   div {
      flex-grow: 1;
      margin-bottom: 0px;
   }
   input {
      margin-bottom: 0px;
   }
`;

export const FormContainer = styled.div`
   position: relative;
   width: 50vw;

   margin-bottom: 100px;
`;

export const Title = styled.h2`
   font-size: 28px;
   margin-top: 100px;
`;

export const FormInputEdited = styled(FormInput)`
   margin: 0px;
   margin-bottom: 15px;
`;

export const FormInputContainer = styled.div`
   margin: 40px 0px;

`;

export const ButtonContainer = styled.div`
   display: flex;
   gap: 10px;   
`