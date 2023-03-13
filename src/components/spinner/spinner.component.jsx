import {
   SpinnerContainer,
   SpinnerOverlayAbsolute,
   SpinnerOverlayRelative,
} from "./spinner.styles";

const Spinner = ({ absolute }) => {
   return (
      <>
         {absolute ? (
            <SpinnerOverlayAbsolute>
               <SpinnerContainer></SpinnerContainer>
            </SpinnerOverlayAbsolute>
         ) : (
            <SpinnerOverlayRelative>
               <SpinnerContainer></SpinnerContainer>
            </SpinnerOverlayRelative>
         )}
      </>
   );
};

export default Spinner;
