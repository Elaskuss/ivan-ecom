import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const LoggedInMenu = () => {
   const user = useSelector(selectCurrentUser);
   console.log(user);
   return (
      <>
         {user && (
            <div>
               <h1>Welcome {user.displayName}</h1>
               <Link to={"/"}>
               <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={signOutUser}>Sign out</Button>
               </Link>
            </div>
         )}
      </>
   );
};

export default LoggedInMenu;
