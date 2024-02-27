import { useState } from "react";
import useCategory from "./useCategoryData";
import { fetchProducts } from "../productsService";
import { useQuery } from "@tanstack/react-query";

const useProductState = () => {
  // const [products, setProducts] = useState<AdaptedProductPartial[]>([]);
  const [sorted, setSorted] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 8;

  // const { showBoundary } = useErrorBoundary();

  const { minPrice, maxPrice, selectedCategory, setSelectedCategory } =
    useCategory();

  const offset = (currentPage - 1) * productsPerPage;

  // const getProducts = useCallback(async () => {
  //   try {
  //     const res = await fetchProducts(
  //       selectedCategory,
  //       sorted,
  //       productsPerPage,
  //       offset
  //     );
  //     if (res) {
  //       setProducts(res.data.rows);
  //       setTotalPages(Math.ceil(parseInt(res.data.count) / productsPerPage));
  //     }
  //   } catch (e) {
  //     showBoundary(e);
  //   }
  // }, [selectedCategory, sorted, currentPage, showBoundary]);

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", selectedCategory, sorted, productsPerPage, offset],
    queryFn: async () => {
      const res = await fetchProducts(
        selectedCategory,
        sorted,
        productsPerPage,
        offset
      );
      if (res) {
        setTotalPages(Math.ceil(parseInt(res.data.count) / productsPerPage));
      }
      return res.data.rows;
    },
  });
  const filteredProducts = products?.filter((product) => {
    const PriceMatch =
      (minPrice === 0 && maxPrice === Infinity) ||
      (product.price >= minPrice && product.price <= maxPrice);

    return PriceMatch;
  });

  return {
    filteredProducts,
    isError,
    error,
    isLoading,
    setSorted,
    setCurrentPage,
    totalPages,
    currentPage,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useProductState;
