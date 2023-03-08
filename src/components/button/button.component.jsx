import "./button.styles.jsx";
import {
   BaseButton,
   GoogleButton,
   InvertedButton,
   DisabledButton,
   ButtonSpinner,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
   base: "base",
   google: "google-sign-in",
   inverted: "inverted",
   disabled: "disabled",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
   [BUTTON_TYPE_CLASSES.base]: BaseButton,
   [BUTTON_TYPE_CLASSES.disabled]: DisabledButton,
   [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
   [BUTTON_TYPE_CLASSES.google]: GoogleButton,
}[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
   const ButtonContainer = getButton(buttonType);
   return (
      <ButtonContainer disabled={isLoading} {...otherProps}>
         {isLoading ? <ButtonSpinner /> : children}
      </ButtonContainer>
   );
};

export default Button;
