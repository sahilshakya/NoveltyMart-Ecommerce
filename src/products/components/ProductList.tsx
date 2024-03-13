import { ErrorBoundary } from "react-error-boundary";
import ProductCard from "./ProductCard";
import ProductFetchingError from "../../shared/errors/ProductFetchingError";
import { ProductListProps } from "../interfaces/productList";

export const ProductList = ({
  products,
  maxPrice,
  minPrice,
  isError,
  isLoading,
  error,
}: ProductListProps) => {
  const filteredProducts = products?.filter((product) => {
    const PriceMatch =
      (minPrice === 0 && maxPrice === Infinity) ||
      (product.price >= minPrice && (!maxPrice || product.price <= maxPrice));

    return PriceMatch;
  });

  if (isError) {
    return (
      <ErrorBoundary FallbackComponent={ProductFetchingError}>
        Error: {error?.message}
      </ErrorBoundary>
    );
  }

  if (isLoading) return <p>Loading products...</p>;

  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4 mt-5">
      {filteredProducts?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
