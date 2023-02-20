import {
   BackgroundImage,
   DirectoryContainer,
   DirectoryItemBody,
} from "./directory.item.styles";
import "./directory.item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ data }) => {
   const { title, imageUrl, route } = data;
   const navigate = useNavigate();

   const directoryClickHandler = () => {
      navigate(route);
   };

   return (
      <DirectoryContainer onClick={directoryClickHandler}>
         <BackgroundImage
            style={{
               backgroundImage: `url(${imageUrl})`,
            }}
            className="background-image"
            alt={`${title}`}
         />
         <DirectoryItemBody>
            <h2>{title}</h2>
         </DirectoryItemBody>
      </DirectoryContainer>
   );
};

export default DirectoryItem;
