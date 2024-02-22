import { useCallback, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { AdaptedProductPartial } from "../interfaces/product";
import useCategory from "./useCategory";
import { fetchProducts } from "../productsService";

const useProductState = () => {
  const [products, setProducts] = useState<AdaptedProductPartial[]>([]);
  const [sorted, setSorted] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 8;

  const { showBoundary } = useErrorBoundary();

  const { minPrice, maxPrice, selectedCategory, setSelectedCategory } =
    useCategory();

  const filteredProducts = products?.filter((product) => {
    const PriceMatch =
      (minPrice === 0 && maxPrice === Infinity) ||
      (product.price >= minPrice && product.price <= maxPrice);

    return PriceMatch;
  });

  const getProducts = useCallback(async () => {
    const offset = (currentPage - 1) * productsPerPage;
    try {
      const res = await fetchProducts(
        selectedCategory,
        sorted,
        productsPerPage,
        offset
      );
      if (res) {
        setProducts(res.data.rows);
        setTotalPages(Math.ceil(parseInt(res.data.count) / productsPerPage));
      }
    } catch (e) {
      showBoundary(e);
    }
  }, [selectedCategory, sorted, currentPage, showBoundary]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return {
    filteredProducts,
    setSorted,
    setCurrentPage,
    totalPages,
    currentPage,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useProductState;
