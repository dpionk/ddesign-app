import { ProductListStyled } from "./ProductList.styled";

const mockProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
];

const ProductList = () => {
  const products = mockProducts.map((product) => (
    <img src={product.imageUrl} alt={product.name} />
  ));

  return <ProductListStyled>{products}</ProductListStyled>;
};
export default ProductList;
