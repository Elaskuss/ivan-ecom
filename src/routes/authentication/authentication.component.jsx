import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import { AuthenticationContainer } from "./authentication.styles.jsx";

const SignIn = () => {

   return (
      <AuthenticationContainer>
         <SignInForm/>
         <SignUpForm/>
      </AuthenticationContainer>
   );
};

export default SignIn;