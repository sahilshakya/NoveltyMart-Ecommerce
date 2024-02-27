import H5 from "../../shared/components/ui/H5";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../../category/CategoryFilter";
import Pagination from "../../shared/components/Pagination";
import { ErrorBoundary } from "react-error-boundary";
import ProductFetchingError from "../../shared/errors/ProductFetchingError";

import useCategory from "../hooks/useCategoryData";
import useProductState from "../hooks/useProductsData";

const ProductsPage = () => {
  const {
    filteredProducts,
    setSorted,
    currentPage,
    setCurrentPage,
    totalPages,
    setSelectedCategory,
    isLoading,
    isError,
    error,
  } = useProductState();

  const { allCategories, setMinPrice, setMaxPrice } = useCategory();

  if (isError) {
    return (
      <ErrorBoundary FallbackComponent={ProductFetchingError}>
        Error: {error?.message}
      </ErrorBoundary>
    );
  }

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="md:flex gap-6">
      <div className="">
        <CategoryFilter
          categories={allCategories}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="w-full">
        <ErrorBoundary
          FallbackComponent={ProductFetchingError}
          onError={() => console.log("Error Happened")}
        >
          <div className="flex justify-between gap-4">
            <H5>Products</H5>
            <div>
              <select
                onChange={(e) => setSorted(e.target.value)}
                className="px-3 py-1 rounded-md outline-1"
              >
                <option value="">All</option>
                <option value="desc">Most Recent</option>
                <option value="asc">Most Oldest</option>
              </select>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4 mt-5">
            {filteredProducts?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ProductsPage;
