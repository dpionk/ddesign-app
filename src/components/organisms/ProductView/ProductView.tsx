import PageTitle from "@components/atoms/PageTitle";
import {
  ProductViewInfoWrapper,
  ProductViewWrapper,
} from "./ProductView.styled";
import Button from "@components/atoms/Button";

const ProductView = () => {
  const product = {
    id: 1,
    name: "Flower buquet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 100,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  };

  return (
    <ProductViewWrapper>
      <img src={product.imageUrl} alt={product.name} />
      <ProductViewInfoWrapper>
        <PageTitle>{product.name}</PageTitle>
        <Button text="Add to basket" />
      </ProductViewInfoWrapper>
    </ProductViewWrapper>
  );
};
export default ProductView;
