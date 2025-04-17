import PageTitle from "@components/atoms/PageTitle";
import DropdownButton from "@components/molecules/DropdownButton";
import ProductList from "@components/organisms/ProductList";
import { PageTitleWithButtonStyled } from "./ProductCategoryPage.styled";

const ProductCategoryPage = () => {
  return (
    <>
      <PageTitleWithButtonStyled>
        <PageTitle>Flowers</PageTitle>
        <DropdownButton text="sort" />
      </PageTitleWithButtonStyled>
      <ProductList />
    </>
  );
};
export default ProductCategoryPage;
