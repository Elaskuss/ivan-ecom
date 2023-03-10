import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import Spinner from "../../components/spinner/spinner.component.jsx";
import { selectCurrentUser, selectUserLoading } from "../../store/user/user.selector.js";
import { AuthenticationContainer } from "./authentication.styles.jsx";

const SignIn = () => {
   const user = useSelector(selectCurrentUser);
   const loading = useSelector(selectUserLoading);
   

   return (
      <AuthenticationContainer>
         {loading && <Spinner absolute={true}/>}
         {user && <Navigate to={"/user"}/>}
         <SignInForm/>
         <SignUpForm/>
      </AuthenticationContainer>
   );
};

export default SignIn;
