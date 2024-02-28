import { useProductData } from "../hooks/useProductData";
import { ProductDescription } from "../components/ProductDescription";
import { ProductDetail } from "../components/ProductDetail";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id = "" } = useParams();

  const {
    product,
    isLoading,
    error,
    quantity,
    setQuantity,
    mainImages,
    setMainImages,
  } = useProductData(id);

  if (isLoading) {
    return (
      <div className="w-full text-h3 text-secondary text-center">
        ....Loading
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-h3 text-secondary text-center">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className=" bg-gray-light">
      <ProductDetail
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
        mainImages={mainImages}
        setMainImages={setMainImages}
      />
      <ProductDescription product={product} />
    </div>
  );
};

export default SingleProduct;
