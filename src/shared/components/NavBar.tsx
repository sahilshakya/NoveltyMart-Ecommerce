import { Link, useNavigate } from "react-router-dom";
import H5 from "./ui/H5";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";
import { uiRoutes } from "../constant/uiRoutes";
import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import useCartStore from "../../store/cartStore";
import useAuthStore from "../../store/authStore";
import { removeLocal } from "../utils/storage";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const { user, setAuthData } = useAuthStore();
  const { cart, removeAllItems } = useCartStore();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeAllItems();
    setAuthData(null);
    removeLocal("authToken");
    removeLocal("cart-Storage");
    navigate(uiRoutes.login);
    setDropdownOpen(false);
  };

  return (
    <div className=" lg:flex justify-between p-5 md:px-[120px] sticky">
      <Link to={uiRoutes.products}>
        <H5 styles="text-primary">NoveltyMart</H5>
      </Link>

      <div className="flex justify-normal items-center text-small font-bold text-gray-medium">
        {user ? (
          <div className="relative">
            <button
              className=" mr-4 inline-flex items-center"
              onClick={toggleDropdown}
            >
              <BsPersonFill className="my-2 mr-2" />

              <span className="font-semiBold text-extraSmall">
                Welcome, {user.firstName} {user.lastName}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-6 w-full bg-white rounded-sm shadow-sm p-3">
                <button
                  className="flex items-center px-4 text-primary"
                  onClick={handleLogout}
                >
                  <TbLogout2 />
                  <div className="ml-2 text-regularSmall">Logout</div>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to={uiRoutes.login} className="flex items-center mr-4 ">
            <BsPersonFill className="mr-2" />
            <p className="font-semiBold text-extraSmall">Sign Up/Sign In</p>
          </Link>
        )}

        <p>|</p>
        <Link to={uiRoutes.cart} className="flex items-center mx-4">
          <BsFillCartFill className="mr-2" />

          <p className="font-semiBold text-extraSmall">Cart</p>
          <p className="bg-primary text-white rounded-lg ml-2 px-2">
            {cart && cart.length}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
