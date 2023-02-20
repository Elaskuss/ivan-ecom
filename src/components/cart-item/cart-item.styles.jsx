import styled from "styled-components";

export const CartItemContainer = styled.div`
   width: 100%;
   display: flex;
   height: 80px;
   margin-bottom: 15px;
   img {
      width: 30%;
   }
`;

export const ItemDetails = styled.div`
   width: 70%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 10px 20px;

   .name {
      font-size: 16px;
   }
   .price {
      font-size: 14px;
   }


`;
export const ItemControlsContainer = styled.div`
   display: flex;
   align-items: center;

   .arrow {
      margin-top: 0;
      cursor: pointer;
   }

   .quantity {
      padding: 5px;
   }
`;

export const RemoveButton = styled.div`
   
   margin-top: auto;
   margin-bottom: auto;
   padding-left: 15px;

   span {
      cursor: pointer;
   }
`;
