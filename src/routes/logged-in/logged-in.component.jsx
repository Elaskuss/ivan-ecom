import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import SavedItemsPreview from "../../components/saved-items-preview/saved-items-preview.component";
import { selectCurrentUser, selectSavedItems } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const LoggedInMenu = () => {
   const user = useSelector(selectCurrentUser);
   const savedItems = useSelector(selectSavedItems);
   return (
      <>
         {user ? (
            <div>
               <h1>Welcome {user.displayName}</h1>
               <SavedItemsPreview products={savedItems}></SavedItemsPreview>
               <Link to={"/"}>
               <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={signOutUser}>Sign out</Button>
               </Link>
            </div>
         ) : (<Navigate to={"/"}></Navigate>)}
      </>
   );
};

export default LoggedInMenu;
