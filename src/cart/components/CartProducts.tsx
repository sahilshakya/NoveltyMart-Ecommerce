import { MdOutlineDelete } from "react-icons/md";
import useCartStore from "../../store/cartStore";
import { useState } from "react";
import { formatPrice } from "../../shared/utils/common";
import { Link } from "react-router-dom";
import { uiRoutes } from "../../shared/constant/uiRoutes";
const CartProducts = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const [errorMessage, setErrorMessage] = useState<{ [key: number]: string }>(
    {}
  );

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId: number, quantity: string) => {
    const newQuantity = parseInt(quantity, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      setErrorMessage({
        [productId]: "Quantity should not be less than 1",
      });
      return;
    }
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem && newQuantity > cartItem.availableQuantity) {
      setErrorMessage({
        [productId]: "Quantity exceeds than stock available",
      });
      return;
    }
    setErrorMessage({
      [productId]: "",
    });
    updateQuantity(productId, newQuantity);
  };

  console.log("........cart...........", cart);

  if (cart.length === 0) {
    return (
      <div className=" bg-white w-full mr-5 p-5">
        <p className=" text-h5 text-secondary">Cart is Empty</p>
        <Link to={uiRoutes.products}>
          <button className="bg-primary text-white p-2 mt-4 rounded-md">
            Go to home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" lg:w-[1106px] :w-[1106px] flex flex-col gap-4">
      {cart.map((item) => (
        <div className="bg-white p-10 w-full md:flex" key={item.id}>
          <div>
            <img
              src={item.images[0].image}
              className="h-[137px] w-[179px] object-cover"
            />
          </div>
          <div className="md:mx-5 w-3/6 ">
            <h1 className="text-small font-semiBold">{item.name}</h1>
            <p className="mt-2 text-gray-medium text-extraSmall">
              Product description, Size, Color
            </p>
            <p className="mt-1 text-gray-medium text-extraSmall">
              {item.description}
            </p>
            <div className="text-h6 mt-4">
              <button
                className="mt-2 text-gray-medium"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <MdOutlineDelete />
              </button>
            </div>
          </div>
          <div className="md:flex justify-center w-1/6 ">
            <div className="mr-3">
              <div className="font-bold">Quantity</div>
              <div className="  ">
                <input
                  type="number"
                  className="border border-gray-light rounded-md  focus:outline-none  focus:border-gray-medium w-[90px] h-10 my-4 p-2"
                  value={item.quantity}
                  max={item.availableQuantity}
                  min={1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                />
                <p className="text-warning font-bold">
                  {item.availableQuantity} available
                </p>
                {errorMessage[item.id] && (
                  <p className="text-error">{errorMessage[item.id]}</p>
                )}
              </div>
            </div>
            <div className="">
              <p className="font-bold ">Price</p>
              <p className="my-4 font-semiBold text-gray-medium">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;

// Pure functions
// Generics

// Add types in product listing
