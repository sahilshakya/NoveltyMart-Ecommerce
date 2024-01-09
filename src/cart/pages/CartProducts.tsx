import H6 from "../../shared/components/H6";
import Button from "../../shared/components/Button";
import Image from "../../assets/Image.png";
import { MdOutlineDelete } from "react-icons/md";
import { Input } from "../../shared/components/Input";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const CartProducts = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className=" shadow-sm h-full w-5/6 mr-5">
      <div className="bg-white p-10  flex flex-wrap mb-10 ">
        <div className="w-64">
          <img src={Image} className="" />
        </div>
        <div className="mx-5 w-3/5 ">
          <H6>Product 1</H6>
          <p className="mt-2 text-gray-medium font-small">
            product description, size, color
          </p>
          <p className="mt-1 text-gray-medium font-small">lorem ipsum </p>
          <div>
            <Button className="mt-2 ">
              <MdOutlineDelete />
            </Button>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="mr-3">
            <label className="font-bold">Quantity</label>
            <div className="flex justify-between items-center ">
              <div className=" flex items-center  ">
                <Input
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  type="text"
                  className=" border-2  border-gray-medium h-10"
                />
              </div>
              <div className="flex flex-col  border-gray-dark  ">
                <button
                  type="button"
                  className="w-7 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg "
                >
                  <FaAngleUp />
                </button>
                <button
                  type="button"
                  className="w-7 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg   "
                >
                  <FaAngleDown />
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-bold">Price</p>
            <p>$280</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-10  flex flex-wrap mb-10 ">
        <div className="w-64">
          <img src={Image} className="" />
        </div>
        <div className="mx-5 w-3/5 ">
          <H6>Product 1</H6>
          <p className="mt-1">product description, size, color</p>
          <p>lorem ipsum </p>
          <div>
            <Button>
              <MdOutlineDelete />
            </Button>
          </div>
        </div>
        <div className="flex justify-center ">
          <div>
            <label className="font-bold">Quantity</label>
            <div className="flex justify-between items-center gap-x-1">
              <div className=" flex items-center ">
                <input type="text" className="border-gray-light" />
              </div>
              <div className="flex flex-col  border-gray-dark ">
                <button
                  type="button"
                  className="w-7 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg "
                >
                  +
                </button>
                <button
                  type="button"
                  className="w-7 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg   "
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-bold">Price</p>
            <p>$280</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
