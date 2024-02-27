import { AdaptedProduct } from "../interfaces/product";

interface ProductImagesProps {
  product: AdaptedProduct;
  setMainImages: (item: { image: string }) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  product,
  setMainImages,
}) => {
  return (
    <div>
      {" "}
      {product?.images?.map((item, index) => (
        <div className="" key={index}>
          <img
            className=" w-[130px] h-[120px] object-center  "
            alt="prod img"
            src={item.image}
            onClick={() => setMainImages(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
