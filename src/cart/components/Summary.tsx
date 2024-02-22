import useCartStore from "../../store/cartStore";
import { uiRoutes } from "../../shared/constant/uiRoutes";
import { formatPrice } from "../../shared/utils/common";
import { useNavigate } from "react-router-dom";
import { getLocal } from "../../shared/utils/storage";

const Summary = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();
  const token = getLocal("authToken");

  const totalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="bg-white md:w-[367px] p-4 shadow-sm h-[275px]">
      <h1 className="text-small font-semiBold">Summary</h1>
      <div className="mt-10">
        <div className="mb-2 lg:flex lg:justify-between">
          <p>Subtotal</p>
          <p>{formatPrice(totalPrice())}</p>
        </div>
        <div className="mb-2 lg:flex lg:justify-between">
          <p>Total</p>
          <p>{formatPrice(totalPrice())}</p>
        </div>
      </div>

      <button
        className="bg-primary text-white p-2 mt-6 w-full "
        onClick={(e) => {
          e.preventDefault();
          if (token) {
            navigate(uiRoutes.checkout);
          } else if (!token) {
            navigate(`${uiRoutes.login}?returnUrl=${uiRoutes.checkout}`);
          }
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Summary;
