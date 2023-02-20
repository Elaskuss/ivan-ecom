// import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, Preview, Title } from "./catergory-preview.styles";
import "./catergory-preview.styles";

const CatergoryPreview = ({ title, products }) => {

   return (
      <CategoryPreviewContainer>
         <h2>
            <Title to={title}>
               {title.toUpperCase()}
            </Title>
         </h2>
         <Preview>
            {products.map((product) => {
               if (products.indexOf(product) < 4) {
                  return <ProductCard key={product.id} product={product} />;
               }

               return <></>;
            })}
         </Preview>
      </CategoryPreviewContainer>
   );
};

export default CatergoryPreview;
