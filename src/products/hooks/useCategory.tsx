import { useEffect, useState } from "react";

import { useErrorBoundary } from "react-error-boundary";
import { AdaptedCategory } from "../../category/interfaces/category";
import { fetchCategory } from "../../category/categoryService";

const useCategory = () => {
  const [allCategories, setAllCategories] = useState<AdaptedCategory[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await fetchCategory();
        if (res) {
          setAllCategories(res.data.rows);
        }
      } catch (e) {
        showBoundary(e);
      }
    };
    getCategory();
  }, [showBoundary]);

  return {
    allCategories,
    setAllCategories,
    minPrice,
    setMinPrice,
    setMaxPrice,
    maxPrice,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useCategory;
