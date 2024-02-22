import { Link } from "react-router-dom";
import { AdaptedProductPartial } from "../interfaces/product";
import { uiRoutes } from "../../shared/constant/uiRoutes";

const ProductCard: React.FC<{ product: AdaptedProductPartial }> = ({
  product,
}) => {
  return (
    <Link to={uiRoutes.productDetail.replace(":id", product.id.toString())}>
      <div className=" bg-white text-gray-medium shadow-sm">
        <img
          src={product.images[1].image}
          alt="Product"
          className="lg:h-[309px] object-cover object-center w-full "
        />

        <div className="px-4 py-3 ">
          <p className="text-verySmall font-regularBold ">
            {product.brand[0].name}/{product.category.name}
          </p>
          <p className="text-regularSmall font-regularBold">{product.name}</p>
          <div className="md:flex items-center justify-between">
            <p className="text-regularSmall font-bold cursor-auto">
              {product.formattedPrice}
            </p>
            <div className="">
              <p className="text-regularSmall font-regularBold  cursor-auto my-3 line-through text-gray-medium">
                {product.formattedDiscount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
