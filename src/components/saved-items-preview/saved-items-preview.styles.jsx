import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/button.component";


export const SavedItemsPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
`;

export const Title = styled(Link)`
   font-size: 28px;
   margin-bottom: 25px;
   cursor: pointer;
`;
export const Preview = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 20px;
`;
export const SavedItemsPreviewButton = styled(Button)`
   margin-top: 20px;
`;
