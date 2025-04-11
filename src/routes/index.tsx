import { Routes, Route } from "react-router-dom";
import HomePage from "@components/pages/HomePage";
import ProductsPage from "@components/pages/ProductsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
