import {useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import {ButtonContainer, SignInContainer} from "./sing-in-form.styles";


const SignInForm = () => {
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

   const handleSubmit = async (event) => {
      event.preventDefault();
      await signInUserWithEmailAndPassword(email, password);
   }

   const signInViaGoogle = async () => {
      await signInWithGooglePopup();
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
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInViaGoogle}>Google Sign In</Button>
            </ButtonContainer>
         </form>
      </SignInContainer>
   );
};

export default SignInForm;
