import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../../store/user/user.reducer";
import {
   selectCurrentUser,
   selectCurrentUserAuth,
   selectCurrentUserShippingAdress,
} from "../../store/user/user.selector";
import { reAuthUser, updateCurrentUserPassword } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
   GroupedInput,
   Title,
   FormContainer,
   FormInputEdited,
   FormInputContainer,
   ButtonContainer,
} from "./edit-user-form.styles";

const EditUserForm = () => {
   const dispatch = useDispatch();
   
   const [showPasswordChange, setShowPasswordChange] = useState(false);
   const [currentPasswordlabel, setCurrentPasswordErrorLabel] = useState("Current Password");
   const [newPasswordlabel, setNewPasswordErrorLabel] = useState("New Password");
   const [confirmPasswordlabel, setConfirmPasswordErrorLabel] = useState("Confirm Password");
   const [wrongPassword, setWrongPassword] = useState(false);
   const [notMatchingPassword, setNotMatchingPassword] = useState(false);

   const CurrentUserShipping = useSelector(selectCurrentUserShippingAdress);
   const currentUser = useSelector(selectCurrentUser);
   const currentUserAuth = useSelector(selectCurrentUserAuth);

   const defaultFormFields = {
      firstName: CurrentUserShipping.firstName
         ? CurrentUserShipping.firstName
         : currentUserAuth.displayName.split(" ")[0], 
      lastName: CurrentUserShipping.lastName
         ? CurrentUserShipping.lastName
         : currentUserAuth.displayName.split(" ")[1], 
      adress: CurrentUserShipping.adress ? CurrentUserShipping.adress : "",
      city: CurrentUserShipping.city ? CurrentUserShipping.city : "",
      zipcode: CurrentUserShipping.zipcode ? CurrentUserShipping.zipcode : "",
      country: CurrentUserShipping.country ? CurrentUserShipping.country : "",
      password: "",
      confirmPassword: "",
      newPassword: "",
   };

   const [formFields, setFormFields] = useState(defaultFormFields);

   const {
      firstName,
      lastName,
      adress,
      city,
      zipcode,
      country,
      password,
      confirmPassword,
      newPassword,
   } = formFields;

   useEffect(() => {
      if(currentUserAuth != null){
         currentUserAuth.providerData[0].providerId === "password" ? setShowPasswordChange(true) : setShowPasswordChange(false);
      }
   }, [currentUserAuth]);

   useEffect(() => {
      
      setCurrentPasswordErrorLabel("Password");
      setNewPasswordErrorLabel("New Password");
      setConfirmPasswordErrorLabel("Confirm Password");
      setWrongPassword(false);
      setNotMatchingPassword(false);
   }, [password, confirmPassword, newPassword]);


  


   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
   };

   const handleSubmitShipping = (event) => {
      event.preventDefault();
      const changes = {
         displayName: firstName + " " + lastName,
         shippingAdress: {
            firstName,
            lastName,
            adress,
            city,
            zipcode,
            country,
         },
      };
      dispatch(updateCurrentUser({ currentUser, changes }));
      alert("Shipping adress saved");
      return;
   };

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const handleSubmitPassword = async (event) => {
      event.preventDefault();
      
      const reAuthOK = await reAuthUser(
         currentUserAuth,
         currentUser.email,
         password
      );

      if(reAuthOK !== true){
         setCurrentPasswordErrorLabel("Current Password -" + reAuthOK);
         setWrongPassword(true);
      }
      else if(newPassword !== confirmPassword) {
         setNotMatchingPassword(true);
         setNewPasswordErrorLabel("New Password - Does not match");
         setConfirmPasswordErrorLabel("Confirm Password - Does not match");
      }
      else {
         const passwordUpdated = await updateCurrentUserPassword(currentUserAuth, newPassword);
         console.log(passwordUpdated);
         if(passwordUpdated !== true){
            console.log(passwordUpdated)
         }
         else{
            alert("Password changed");
            resetFormFields();
         }
      }

      return;
   };

   return (
      <FormContainer>
         <Title>User settings:</Title>
         <form onSubmit={handleSubmitShipping}>
            <h3>Shipping Address:</h3>
            <FormInputContainer>
               <GroupedInput>
                  <FormInputEdited
                     value={firstName}
                     label={"First name"}
                     type="text"
                     required
                     name="firstName"
                     onChange={handleChange}
                  />
                  <FormInputEdited
                     value={lastName}
                     label={"Last name"}
                     type="text"
                     required
                     name="lastName"
                     onChange={handleChange}
                  />
               </GroupedInput>
               <FormInputEdited
                  value={adress}
                  label={"Adress"}
                  type="text"
                  required
                  name="adress"
                  onChange={handleChange}
               />
               <GroupedInput>
                  <FormInputEdited
                     value={city}
                     label={"City"}
                     type="text"
                     required
                     name="city"
                     onChange={handleChange}
                  />
                  <FormInputEdited
                     value={zipcode}
                     label={"Zip code"}
                     type="text"
                     required
                     name="zipcode"
                     onChange={handleChange}
                  />
               </GroupedInput>
               <FormInputEdited
                  value={country}
                  label={"Country"}
                  type="text"
                  required
                  name="country"
                  onChange={handleChange}
               />
               <ButtonContainer>
                  <Button type="submit">Save Changes</Button>
                  <Button
                     type="button"
                     buttonType={BUTTON_TYPE_CLASSES.inverted}
                  >
                     Cancel
                  </Button>
               </ButtonContainer>
            </FormInputContainer>
         </form>
         {showPasswordChange ? (
            <form onSubmit={handleSubmitPassword}>
               <h3>Change password:</h3>
               <FormInputContainer>
                  <FormInputEdited
                     value={password}
                     label={currentPasswordlabel}
                     type="password"
                     required
                     name="password"
                     onChange={handleChange}
                     className={wrongPassword ? "bad" : ""}
                  />
                  <FormInputEdited
                     value={newPassword}
                     label={newPasswordlabel}
                     className={notMatchingPassword ? "bad" : ""}
                     type="password"
                     required
                     name="newPassword"
                     onChange={handleChange}
                  />
                  <FormInputEdited
                     value={confirmPassword}
                     label={confirmPasswordlabel}
                     className={notMatchingPassword ? "bad" : ""}
                     type="password"
                     required
                     name="confirmPassword"
                     onChange={handleChange}
                  />
               </FormInputContainer>
               <ButtonContainer>
                  <Button type="submit">Change Password</Button>
                  <Button
                     type="button"
                     buttonType={BUTTON_TYPE_CLASSES.inverted}
                  >
                     Cancel
                  </Button>
               </ButtonContainer>
            </form>
         ) : (
            <></>
         )}
      </FormContainer>
   );
};

export default EditUserForm;
