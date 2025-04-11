import Button from "@components/atoms/Button";
import {
  ProductCategoryButtonWrapper,
  ProductCategoryImageStyled,
  ProductCategoryWrapper,
} from "./ProductCategory.styled";

type TProductCategoryProps = {
  imageUrl: string;
  name: string;
};

const ProductCategory = ({ imageUrl, name }: TProductCategoryProps) => {
  return (
    <ProductCategoryWrapper>
      <ProductCategoryImageStyled src={imageUrl} alt={name} />
      <ProductCategoryButtonWrapper>
        <Button text={name} />
      </ProductCategoryButtonWrapper>
    </ProductCategoryWrapper>
  );
};
export default ProductCategory;
