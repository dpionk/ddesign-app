import ProductCategory from "@components/molecules/ProductCategory";
import { TCategory } from "@types/category";
import { ProductCategoriesListWrapper } from "./ProductCategoriesList.styled";

const productCategories: TCategory[] = [
  {
    id: "flowers",
    name: "Flowers",
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: "decorations",
    name: "Decorations",
    imageUrl: "https://media-public.canva.com/SGjqw/MAFanNSGjqw/1/s.jpg",
  },
  {
    id: "furniture",
    name: "Furniture",
    imageUrl: "https://media-public.canva.com/RcdcU/MAGd-ORcdcU/1/s.jpg",
  },
];

const ProductCategoriesList = () => {
  const categories = productCategories.map((productCategory) => (
    <ProductCategory category={productCategory} />
  ));

  return (
    <ProductCategoriesListWrapper>{categories}</ProductCategoriesListWrapper>
  );
};
export default ProductCategoriesList;
