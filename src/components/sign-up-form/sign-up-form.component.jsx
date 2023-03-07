import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignUpStart } from "../../store/user/user.action";

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
   const dispatch = useDispatch();
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, displayName, password, confirmPassword } = formFields;

   const handleChange = async (event) => {
      const { name, value } = event.target;
      await setFormFields({ ...formFields, [name]: value });
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
         return;
      }

      dispatch(emailSignUpStart(email, password, {displayName: displayName}));
      resetFormFields();
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
               value={password}
               label={"Password"}
               type="password"
               required
               name="password"
               onChange={handleChange}
            />
            <FormInput
               value={confirmPassword}
               label={"Confirm Password"}
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
