import { useEffect } from "react";
import { useState } from "react";
import {
   createAuthUser,
   createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = () => {
   const [passwordNotMatching, setPasswordNotMatching] = useState(false);
   const [passwordLabel, setPasswordLabel] = useState("Password");
   const [confirmPasswordLabel, setConfirmPasswordLabel] = useState("Confirm Password");
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, displayName, password, confirmPassword } = formFields;

   const handleChange = async (event) => {
      const { name, value } = event.target;
      await setFormFields({ ...formFields, [name]: value });
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   useEffect(() => {
      setPasswordNotMatching(false);
      setPasswordLabel("Password")
      setConfirmPasswordLabel("Confirm Password");
   }, [password, confirmPassword]);

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
         setPasswordNotMatching(true);
         setPasswordLabel("Password - Does not match")
         setConfirmPasswordLabel("Confirm Password - Does not match");
         return;
      }

      const { user } = await createAuthUser(email, password);

      try {
         await createUserDocFromAuth(user, { displayName: displayName });
         resetFormFields();
      } catch (error) {
         console.log("Something went wrong", error);
      }
   };

   return (
      <SignUpContainer>
         <h2>Dont have and account?</h2>
         <span>Sign up with your Email and Password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               value={displayName}
               label={"Display Name"}
               type="text"
               required
               name="displayName"
               onChange={handleChange}
            />
            <FormInput
               value={email}
               label={"Email"}
               type="email"
               required
               name="email"
               onChange={handleChange}
            />
            <FormInput
               className={passwordNotMatching ? "bad" : ""}
               value={password}
               label={passwordLabel}
               type="password"
               required
               name="password"
               onChange={handleChange}
            />
            <FormInput
               className={passwordNotMatching ? "bad" : ""}
               value={confirmPassword}
               label={confirmPasswordLabel}
               type="password"
               required
               name="confirmPassword"
               onChange={handleChange}
            />
            <Button type="submit">Create Account</Button>
         </form>
      </SignUpContainer>
   );
};

export default SignUpForm;
