import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentformContainer = styled.div`
   height: 300px;
   margin-top: 60px;
`

export const FormContainer = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 200px;
   min-width: 500px;
`

export const PaymentButton = styled(Button)`
   width: 300px;
   align-self: center;
`