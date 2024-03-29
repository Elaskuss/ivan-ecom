import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button, {
   BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import EditUserForm from "../../components/edit-user-form/edit-user-form.component";
import SavedItemsPreview from "../../components/saved-items-preview/saved-items-preview.component";
import {
   selectCurrentUser,
   selectSavedItems,
} from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { LoggedInContainer } from "./logged-in.styles";

const LoggedInMenu = () => {
   const signOutUserHandler = async () => {
      await signOutUser();
   };

   const user = useSelector(selectCurrentUser);

   const savedItems = useSelector(selectSavedItems);
   return (
      <LoggedInContainer>
         <h1>Welcome {user.displayName}</h1>
         <SavedItemsPreview products={savedItems}></SavedItemsPreview>
         <EditUserForm />
         <Button
            buttonType={BUTTON_TYPE_CLASSES.base}
            onClick={signOutUserHandler}
         >
            Sign out
         </Button>
      </LoggedInContainer>
   );
};

export default LoggedInMenu;
