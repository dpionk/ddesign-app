import Button from "@components/atoms/Button";
import {
  ProductCategoryButtonWrapper,
  ProductCategoryImage,
  ProductCategoryWrapper,
} from "./ProductCategory.styled";

type TProductCategoryProps = {
  imageUrl: string;
  name: string;
};

const ProductCategory = ({ imageUrl, name }: TProductCategoryProps) => {
  return (
    <ProductCategoryWrapper>
      <ProductCategoryImage src={imageUrl} alt={name} />
      <ProductCategoryButtonWrapper>
        <Button text={name} />
      </ProductCategoryButtonWrapper>
    </ProductCategoryWrapper>
  );
};
export default ProductCategory;
