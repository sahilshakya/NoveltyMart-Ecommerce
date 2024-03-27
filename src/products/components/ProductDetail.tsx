import { useNavigate } from "react-router-dom";
import { AdaptedProduct } from "../interfaces/product";
import useCartStore from "../../store/cartStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uiRoutes } from "../../shared/constant/uiRoutes";
import { ProductDetailProps } from "../interfaces/productDetail";
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoChevronUp,
} from "react-icons/go";
import { useState } from "react";
import { IconButton, useMediaQuery } from "@mui/material";

export const ProductDetail = ({
  product,
  quantity,
  setQuantity,
  mainImages,
  setMainImages,
}: ProductDetailProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const islargeScreen = useMediaQuery("(min-width:1024px)");
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

  const handleNext = () => {
    if (startIndex + 4 < product.images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="lg:flex md:py-10 gap-5 ">
      <div className="">
        <img
          className=" w-full lg:w-[580px] lg:h-[610px] object-center"
          alt="prod img"
          src={mainImages?.image}
        />
      </div>

      <div className="flex lg:flex-col gap-1 justify-between py-3 lg:p-0 items-center">
        {islargeScreen ? (
          <IconButton onClick={handlePrev} size="large">
            <GoChevronUp fontSize="large" />
          </IconButton>
        ) : (
          <IconButton onClick={handlePrev} size="large">
            <GoChevronLeft fontSize="large" />
          </IconButton>
        )}
        {product.images
          ?.slice(startIndex, startIndex + 4)
          .map((item, index) => (
            <div className="" key={index}>
              <img
                className="w-[80px] h-[70px] md:w-[130px] md:h-[120px] object-center  "
                alt="prod img"
                src={item.image}
                onClick={() => setMainImages(item)}
              />
            </div>
          ))}

        {islargeScreen ? (
          <IconButton onClick={handleNext} size="large">
            <GoChevronDown fontSize="large" />
          </IconButton>
        ) : (
          <IconButton onClick={handleNext} size="large">
            <GoChevronRight fontSize="large" />
          </IconButton>
        )}
      </div>

      <div className=" flex-1 lg:px-6 ">
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
