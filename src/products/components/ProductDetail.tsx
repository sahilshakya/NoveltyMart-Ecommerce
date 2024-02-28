import { useNavigate } from "react-router-dom";
import { AdaptedProduct } from "../interfaces/product";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uiRoutes } from "../../shared/constant/uiRoutes";
import { ProductDetailProps } from "../interfaces/productDetail";

export const ProductDetail = ({
  product,
  quantity,
  setQuantity,
  mainImages,
  setMainImages,
}: ProductDetailProps) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = (productToAdd: AdaptedProduct) => {
    addToCart(productToAdd, quantity.value);
    toast.success("Item added successfully");
  };

  const handleBuy = (productToBuy: AdaptedProduct) => {
    addToCart(productToBuy, quantity.value);
    navigate(uiRoutes.cart);
  };
  return (
    <div className="md:flex md:p-10 gap-5">
      <img
        className=" w-[600px] h-[630px] object-center"
        alt="prod img"
        src={mainImages?.image}
      />

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
        <div>
          <p className="text-gray-medium text-extraSmall">
            {product.brand?.name} Originals
          </p>
          <h2 className="text-h6 font-bold ">{product.name}</h2>
          <p className="text-primary text-normal mb-4 font-bold ">
            {product.formattedPrice}
          </p>
        </div>

        <div className="font-bold">Quantity</div>
        <div>
          <input
            type="number"
            className="border border-gray-light rounded-md  focus:outline-none focus:border-gray-medium w-16 h-10 my-4 p-2"
            max={product.availableQuantity}
            min={1}
            value={quantity.value}
            onChange={(e) => {
              const v = +e.target.value;
              setQuantity({
                value: v,
                error:
                  v < 1 || v > product.availableQuantity
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
  );
};
