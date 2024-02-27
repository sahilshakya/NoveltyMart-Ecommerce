import { useNavigate, useParams } from "react-router-dom";
import { AdaptedProduct } from "../interfaces/product";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uiRoutes } from "../../shared/constant/uiRoutes";
import { useProductData } from "../hooks/useProductData";

const SingleProduct = () => {
  const { addToCart } = useCartStore();
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const {
    product,
    isLoading,
    error,
    quantity,
    setQuantity,
    mainImages,
    setMainImages,
  } = useProductData(id);

  const handleAddToCart = (productToAdd: AdaptedProduct) => {
    addToCart(productToAdd, quantity.value);
    toast.success("Item added successfully");
  };

  const handleBuy = (productToBuy: AdaptedProduct) => {
    addToCart(productToBuy, quantity.value);
    navigate(uiRoutes.cart);
  };

  if (isLoading) {
    return (
      <div className="w-full text-h3 text-secondary text-center">
        ....Loading
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-h3 text-secondary text-center">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const { availableQuantity } = product;

  return (
    <div className=" bg-gray-light">
      <div className="md:flex md:p-10 gap-5">
        <div className="">
          <img
            className=" w-[600px] h-[630px]  object-center"
            alt="prod img"
            src={mainImages?.image}
          />
        </div>

        <div className="flex md:flex-col justify-between gap-1 ">
          {product.images?.map((item, index) => (
            <div className="" key={index}>
              <img
                className=" w-[130px] h-[120px] object-center  "
                alt="prod img"
                src={item.image}
                onClick={() => setMainImages(item)}
              />
            </div>
          ))}
        </div>

        <div className=" flex-1 px-6 ">
          <div className="">
            <p className="text-gray-medium text-extraSmall">
              {product.brand?.name} Originals
            </p>
            <h2 className="text-h6 font-bold ">{product.name}</h2>
            <p className="text-primary text-normal mb-4 font-bold ">
              {product.formattedPrice}
            </p>
          </div>

          <div className="font-bold">Quantity</div>
          <div className=" ">
            <input
              type="number"
              className="border border-gray-light rounded-md  focus:outline-none  focus:border-gray-medium w-16 h-10 my-4 p-2"
              max={availableQuantity}
              min={1}
              value={quantity.value}
              onChange={(e) => {
                const v = +e.target.value;
                setQuantity({
                  value: v,
                  error:
                    v < 1 || v > availableQuantity
                      ? "Quantity should be in the available range"
                      : "",
                });
              }}
            />
            {!!quantity.error && (
              <p id="errorMessage" className="text-error mb-3">
                {quantity.error}
              </p>
            )}
          </div>

          <div className="md:flex gap-2 ">
            <button
              className=" w-full rounded-sm bg-secondary py-1.5 text-white"
              onClick={() => handleBuy(product)}
            >
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(product)}
              className=" w-full rounded-sm bg-primary py-1.5 text-white"
              disabled={!!quantity.error}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="mx-10 my-5 bg-white p-3 md:flex justify-between">
        <div>
          <h2 className="text-h6 font-bold ">Product Description</h2>
          <ul className="md:flex justify-between">{product.description}</ul>
        </div>
        <div>
          <h2 className="text-h6 font-bold ">Product Specification</h2>
          <ul className="md:flex justify-between">
            <li>standard fit</li>
            <li>standard fit</li>
            <li>standard fit</li>
            <li>standard fit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
