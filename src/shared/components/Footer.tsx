import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gray-medium text-white w-full p-5 md:p-0">
      <div className="md:flex flex-row justify-between md:px-[120px] md:py-10 ">
        <div className="my-3 flex flex-col md:my-0">
          <p className="text-small font">Customer</p>
          <Link to="/">Contact</Link>
          <Link to="/">Return & Exchange</Link>
          <Link to="/">Delivery</Link>
        </div>
        <div className="my-3 flex flex-col md:my-0">
          <p>Visit Our Store </p>

          <Link to="/">Customer</Link>
          <Link to="/">Customer</Link>
          <Link to="/">Customer</Link>
        </div>
        <div className="my-3 flex flex-col md:my-0">
          <p>Footer</p>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
          <Link to="/">Item 3</Link>
        </div>

        <div className="my-3 flex flex-col md:my-0">
          <p>Footer</p>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
          <Link to="/">Item 3</Link>
        </div>
        <div className="my-3 flex flex-col md:my-0">
          <p>Footer</p>
          <Link to="/">Item 1</Link>
          <Link to="/">Item 2</Link>
          <Link to="/">Item 3</Link>
        </div>
        <div className="my-3 flex flex-col md:my-0">
          <p>Follow Us on</p>
          <div className=" flex justify-start md:justify-between gap-2">
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaFacebook />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white pb-4 flex md:justify-center">
        © 2024 All rights reserved. NoveltyMart Ltd.
      </div>
    </div>
  );
};

export default Footer;
