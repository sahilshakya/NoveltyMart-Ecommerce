import { useState } from "react";
import useCategory from "./useCategoryData";
import { fetchProducts } from "../productsService";
import { useQuery } from "@tanstack/react-query";

const useProductsData = () => {
  const [sorted, setSorted] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 8;

  const { selectedCategory, setSelectedCategory } = useCategory();

  const offset = (currentPage - 1) * productsPerPage;

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

  return {
    products,
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

export default useProductsData;
