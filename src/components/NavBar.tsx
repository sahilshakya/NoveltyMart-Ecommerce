import { Link } from "react-router-dom";
import H5 from "../shared/components/H5";
import { BsFillCartFill, BsPersonFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className=" flex justify-between p-5 px-12">
      <Link to="/">
        <H5 styles="text-primary">NoveltyMart</H5>
      </Link>

      <ul className="flex justify-normal items-center text-small font-bold text-gray-medium">
        <Link to="/login" className="flex items-center mx-4">
          <BsPersonFill className="mr-2" />
          <p>Sign Up/Sign In</p>
        </Link>
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
