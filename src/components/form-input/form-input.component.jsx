import { Input, FormInputLabel, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, error, errorLabel, ...otherProps }) => {
   return (
      <Group {...otherProps}>
         {label && (
            <FormInputLabel {...otherProps} shrink={otherProps.value.length}>
               {label}
            </FormInputLabel>
         )}

         <Input {...otherProps} />
         {error && <p>{errorLabel}</p>}
      </Group>
   );
};

export default FormInput;
