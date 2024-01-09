import { useState } from "react";
import H5 from "../../shared/components/H5";
import CartProducts from "./CartProducts";
import Summary from "./Summary";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="bg-gray-light p-5 px-12 h-screen  pt-20">
        <H5>Your Cart</H5>
        <div className="flex ">
          <CartProducts />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
