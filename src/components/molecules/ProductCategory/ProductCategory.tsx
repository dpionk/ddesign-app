import { useNavigate } from "react-router-dom";
import Button from "@components/atoms/Button";
import {
  ProductCategoryButtonWrapper,
  ProductCategoryImageStyled,
  ProductCategoryWrapper,
} from "./ProductCategory.styled";
import { TCategory } from "@types/category";

type TProductCategoryProps = {
  category: TCategory;
};

const ProductCategory = ({ category }: TProductCategoryProps) => {
  const { id, name, imageUrl } = category;
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/categories/${id}`);
  };

  return (
    <ProductCategoryWrapper onClick={handleCategoryClick}>
      <ProductCategoryImageStyled src={imageUrl} alt={name} />
      <ProductCategoryButtonWrapper>
        <Button text={name} />
      </ProductCategoryButtonWrapper>
    </ProductCategoryWrapper>
  );
};
export default ProductCategory;
