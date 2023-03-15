import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
   createAuthUser,
   createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { GroupedInput, SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = () => {
   const [passwordNotMatching, setPasswordNotMatching] = useState(false);
   const [passwordLabel, setPasswordLabel] = useState("Password");
   const [confirmPasswordLabel, setConfirmPasswordLabel] =
      useState("Confirm Password");
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, firstName, lastName, password, confirmPassword } = formFields;

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   useEffect(() => {
      setPasswordNotMatching(false);
      setPasswordLabel("Password");
      setConfirmPasswordLabel("Confirm Password");
   }, [password, confirmPassword]);

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
         setPasswordNotMatching(true);
         setPasswordLabel("Password - Does not match");
         setConfirmPasswordLabel("Confirm Password - Does not match");
         return;
      }

      const { user } = await createAuthUser(email, password);
      try {
         await createUserDocFromAuth(user, {
            displayName: firstName + " " + lastName,
            shippingAdress: {
               firstName: firstName,
               lastName: lastName,
            }
         });
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
            <GroupedInput>
               <FormInput
                  value={firstName}
                  label={"First name"}
                  type="text"
                  required
                  name="firstName"
                  onChange={handleChange}
               />
               <FormInput
                  value={lastName}
                  label={"Last name"}
                  type="text"
                  required
                  name="lastName"
                  onChange={handleChange}
               />
            </GroupedInput>
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
