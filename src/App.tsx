import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/pages/Login";
import PageNotFound from "./components/PageNotFound";

import Layout from "./components/Layout";
import ProductPage from "./products/pages/ProductPage";

import "./App.css";
import CartPage from "./cart/pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ProductPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
