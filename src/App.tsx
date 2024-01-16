import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/pages/Login";
import PageNotFound from "./components/PageNotFound";

import DashboardLayout from "./components/DashboardLayout";
import ProductsPage from "./products/pages/ProductsPage";

import "./App.css";
import CartPage from "./cart/pages/CartPage";
import MainLayout from "./components/MainLayout";
import Product from "./products/pages/Product";
// import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<DashboardLayout />}>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/singleproduct/:id" element={<Product />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
