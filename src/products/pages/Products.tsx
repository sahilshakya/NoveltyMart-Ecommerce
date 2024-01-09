import Image from "../../assets/shoe.jpeg";
const Products = () => {
  return (
    <div>
      <div className="w-72 bg-white shadow-md ">
        <a href="#">
          <img src={Image} alt="Product" className="h-80 w-72 " />
          <div className="px-4 py-3 w-72">
            <p className="text-normal font-bold  block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-small font-semibold  cursor-auto my-3">$149</p>

              <div className="ml-auto"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;
