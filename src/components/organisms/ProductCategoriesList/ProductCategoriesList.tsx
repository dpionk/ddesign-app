import ProductCategory from "@components/molecules/ProductCategory";
import { Category } from "@types/category";
import { ProductCategoriesListWrapper } from "./ProductCategoriesList.styled";

const productCategories: Category[] = [
  {
    id: 1,
    name: "Flowers",
    imageUrl: "https://media-public.canva.com/aB_7g/MAExx3aB_7g/1/s.jpg",
  },
  {
    id: 2,
    name: "Decorations",
    imageUrl: "https://media-public.canva.com/SGjqw/MAFanNSGjqw/1/s.jpg",
  },
  {
    id: 3,
    name: "Furniture",
    imageUrl: "https://media-public.canva.com/RcdcU/MAGd-ORcdcU/1/s.jpg",
  },
];

const ProductCategoriesList = () => {
  const categories = productCategories.map((productCategory) => (
    <ProductCategory
      name={productCategory.name}
      imageUrl={productCategory.imageUrl}
    />
  ));

  return (
    <ProductCategoriesListWrapper>{categories}</ProductCategoriesListWrapper>
  );
};
export default ProductCategoriesList;
