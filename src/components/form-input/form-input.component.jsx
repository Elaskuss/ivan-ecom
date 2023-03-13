import { Input, FormInputLabel, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, userNotFound, errorLabel, ...otherProps }) => {
   return (
      <Group>
         {label && (
            <FormInputLabel {...otherProps} shrink={otherProps.value.length}>
               {label}
            </FormInputLabel>
         )}

         <Input {...otherProps} />
         {userNotFound && <p>{errorLabel}</p>}
      </Group>
   );
};

export default FormInput;
