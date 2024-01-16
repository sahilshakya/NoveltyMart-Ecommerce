import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/singleproduct/${product.id}`}>
      <div
        className="w-72 bg-white text-gray-medium shadow-md mr-5"
        key={product.id}
      >
        <a href="#">
          <img
            src={product.images[1].image}
            alt="Product"
            className="h-80 w-72 "
          />

          <div className="px-4 py-3 w-72">
            <p className="text-small font-regularBold ">
              {product.brand[0].name}/{product.category.name}
            </p>
            <p className="text-normal font-regularBold  block capitalize">
              {product.name}
            </p>
            <div className="flex items-center">
              <p className="text-small font-bold  cursor-auto my-3">
                ${product.price}
              </p>

              <div className="ml-5">
                <p className="text-small font-regularBold  cursor-auto my-3 line-through text-gray-medium">
                  ${product.discountPrice}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default Product;
