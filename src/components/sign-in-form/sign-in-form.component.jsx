import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {ButtonContainer, SignInContainer} from "./sing-in-form.styles";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";


const SignInForm = () => {
   const dispatch = useDispatch();
   const defaultFormFields = {
      email: "",
      password: "",
   };

   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      dispatch(emailSignInStart(email, password));
      resetFormFields();
   }

   const signInViaGoogle = async () => {
      dispatch(googleSignInStart());
   }

   return (
      <SignInContainer>
         <h2>Already have an account?</h2>
         <span>Sign in with your email or Google</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               value={email}
               label={"Email"}
               type="email"
               required
               name="email"
               onChange={handleChange}
            />
            <FormInput
               value={password}
               label={"Password"}
               type="password"
               required
               name="password"
               onChange={handleChange}
            />
            <ButtonContainer>
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType={"google"} onClick={signInViaGoogle}>Google Sign In</Button>
            </ButtonContainer>
         </form>
      </SignInContainer>
   );
};

export default SignInForm;
