import PageTitle from "@components/atoms/PageTitle";
import ProductCategory from "@components/atoms/ProductCategory";
import ProductCategoriesList from "@components/molecules/ProductCategoriesList";

const ProductsPage = () => {
  return (
    <>
      <PageTitle>Products</PageTitle>
      <ProductCategoriesList />
    </>
  );
};

export default ProductsPage;
