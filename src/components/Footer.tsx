import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between px-12 py-10 bg-gray-medium text-white h-full">
      <div className="flex flex-col">
        <p className="text-small font">Customer</p>
        <Link to="/">Contact</Link>
        <Link to="/">Return & Exchange</Link>
        <Link to="/">Delivery</Link>
      </div>
      <div className="flex flex-col">
        <p>Visit Our Store </p>

        <Link to="/">Customer</Link>
        <Link to="/">Customer</Link>
        <Link to="/">Customer</Link>
      </div>
      <div className="flex flex-col">
        <p>Footer</p>
        <Link to="/">Item 1</Link>
        <Link to="/">Item 2</Link>
        <Link to="/">Item 3</Link>
      </div>

      <div className="flex flex-col">
        <p>Footer</p>
        <Link to="/">Item 1</Link>
        <Link to="/">Item 2</Link>
        <Link to="/">Item 3</Link>
      </div>
      <div className="flex flex-col">
        <p>Footer</p>
        <Link to="/">Item 1</Link>
        <Link to="/">Item 2</Link>
        <Link to="/">Item 3</Link>
      </div>
      <div className="flex flex-col">
        <p>Follow Us on</p>
        <div className="flex justify-between">
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
  );
};

export default Footer;
