import "./button.styles.jsx";
import { ButtonContainer, ButtonSpinner } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
   google: "google-sign-in",
   inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
   return (
      <ButtonContainer
         className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
         disabled={isLoading}
         {...otherProps}
      >
      {isLoading ? <ButtonSpinner/> : children}
      </ButtonContainer>
   );
};

export default Button;
