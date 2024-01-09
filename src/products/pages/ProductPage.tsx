import H5 from "../../shared/components/H5";
import Products from "./Products";

const ProductPage = () => {
  return (
    <>
      <div className="px-12 py-10 bg-gray-light">
        <H5>Products</H5>
        <div className="mt-5">
          <Products />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
