import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import ProductCategoriesPage from "@pages/ProductCategoriesPage";
import ProductCategoryPage from "@pages/ProductCategoryPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/" element={<ProductCategoriesPage />} />
      <Route path="/categories/:id" element={<ProductCategoryPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
