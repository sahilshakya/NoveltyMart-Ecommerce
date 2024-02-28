import { Routes, Route } from "react-router-dom";
import ProductsPage from "../../products/pages/ProductsPage";
import SingleProduct from "../../products/pages/SingleProduct";
import CartPage from "../../cart/pages/CartPage";
import { PageNotFound } from "../components/PageNotFound";
import { uiRoutes } from "../constant/uiRoutes";
import Login from "../../login/pages/Login";
import NavBar from "../components/NavBar";
import DashboardLayout from "../components/DashboardLayout";
import CheckoutPage from "../../checkout/pages/CheckoutPage";
import { Protected, Public } from "../components/Protected";
import OrderSuccess from "../../checkout/pages/OrderSuccess";

const MainRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<Public />}>
          <Route path={uiRoutes.login} element={<Login />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path={uiRoutes.products} element={<ProductsPage />} />
          <Route path={uiRoutes.productDetail} element={<SingleProduct />} />
          <Route path={uiRoutes.cart} element={<CartPage />} />
          <Route element={<Protected />}>
            <Route path={uiRoutes.checkout} element={<CheckoutPage />} />
            <Route path={uiRoutes.success} element={<OrderSuccess />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
