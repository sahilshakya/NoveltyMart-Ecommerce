import H5 from "../../shared/components/ui/H5";
import useCartStore from "../../store/cartStore";
import CartProducts from "../components/CartProducts";
import Summary from "../components/Summary";

const CartPage = () => {
  const { cart } = useCartStore();

  return (
    <div>
      <div>
        <H5>Your Cart</H5>
        <div className="lg:flex justify-between mt-5 gap-6">
          <CartProducts />

          {cart.length >= 1 ? <Summary /> : null}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
