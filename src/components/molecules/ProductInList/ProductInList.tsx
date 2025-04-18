import { useNavigate } from "react-router-dom";
import {
  ProductInListInfo,
  ProductInListWrapper,
} from "./ProductInList.styled";

type TProductInListProps = {
  product: TProduct;
};

const ProductInList = ({ product }: TProductInListProps) => {
  const navigate = useNavigate();
  const { name, imageUrl } = product;
  return (
    <ProductInListWrapper onClick={() => navigate(`/products/${product.id}`)}>
      <img src={imageUrl} alt={name} />
      <ProductInListInfo>
        <div>{name}</div>
      </ProductInListInfo>
    </ProductInListWrapper>
  );
};
export default ProductInList;
