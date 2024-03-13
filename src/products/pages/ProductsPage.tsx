import CategoryFilter from "../../category/components/CategoryFilter";
import Pagination from "../components/Pagination";
import useCategory from "../hooks/useCategoryData";
import useProductData from "../hooks/useProductsData";
import { ProductList } from "../components/ProductList";
import { ProductSort } from "../components/ProductSort";

const ProductsPage = () => {
  const {
    products,
    setSorted,
    currentPage,
    setCurrentPage,
    totalPages,
    setSelectedCategory,
    isLoading,
    isError,
    error,
  } = useProductData();

  const { allCategories, minPrice, maxPrice, setMaxPrice, setMinPrice } =
    useCategory();

  return (
    <div className="md:flex gap-6">
      <CategoryFilter
        categories={allCategories}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="w-full">
        <ProductSort setSorted={setSorted} />

        <ProductList
          products={products}
          minPrice={minPrice}
          maxPrice={maxPrice}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
