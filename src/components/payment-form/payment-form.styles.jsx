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

export const CheckoutButton = styled(Button)`
   min-width: 250px;
   align-self: center;
`