import { ProductProp } from "../interfaces/productDetail";

export const ProductDescription = ({ product }: ProductProp) => {
  return (
    <div className="mx-10 my-5 bg-white p-3 md:flex">
      <div className="flex-grow">
        <h2 className="text-h6 font-bold ">Product Description</h2>
        <p>{product.description}</p>
      </div>
      <div className="flex-grow md:ml-auto">
        <h2 className="text-h6 font-bold ">Product Specification</h2>
        <ul className="md:flex flex-col justify-between">
          <li>{product.brand.name}</li>
          <li>{product.category.name}</li>
          <li>{product.subCategory.name}</li>
        </ul>
      </div>
    </div>
  );
};