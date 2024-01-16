import { Link } from "react-router-dom";
import H5 from "../shared/components/H5";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";

const NavBar = () => {
  const token = localStorage.getItem("authToken");
  return (
    <div className=" flex justify-between p-5 px-12">
      <Link to="/">
        <H5 styles="text-primary">NoveltyMart</H5>
      </Link>

      <ul className="flex justify-normal items-center text-normal font-bold text-gray-dark">
        {token ? (
          <div className="relative">
            <button className="text-gray-dark text-normal px-4 inline-flex items-center">
              <BsPersonFill className="mr-2" />

              <span>Welcome, user</span>
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md ">
              <a href="/login" className=" px-4 py-2 text-gray-dark ">
                Logout
              </a>
            </div>
          </div>
        ) : (
          <Link to="/login" className="flex items-center mx-4">
            <BsPersonFill className="mr-2" />
            <p>Sign Up/Sign In</p>
          </Link>
        )}

        <p>|</p>
        <Link to="/cart" className="flex items-center mx-4">
          <BsFillCartFill className="mr-2" />

          <p>Cart</p>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
