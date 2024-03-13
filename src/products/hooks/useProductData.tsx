// import { useQuery } from "@tanstack/react-query";
// import { fetchProductDetails } from "../productsService";

import { useCallback, useEffect, useState } from "react";
import { AdaptedProduct, Image } from "../interfaces/product";
import { fetchProductDetails } from "../productsService";
import { useErrorBoundary } from "react-error-boundary";
import { AxiosError } from "axios";

// export const useProductData = (productId) => {
//   return useQuery({
//     queryKey: ["singleProduct", productId],
//     queryFn: async () => fetchProductDetails(productId),
//   });
// };

export const useProductData = (id: string) => {
  const [product, setProduct] = useState<AdaptedProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState({
    value: 1,
    error: "",
  });
  const [mainImages, setMainImages] = useState<Image | null>(null);
  const { showBoundary } = useErrorBoundary();

  const getProductDetails = useCallback(
    async (productId: string) => {
      try {
        const res = await fetchProductDetails(productId);
        setProduct(res.data);
        setMainImages(res.data.images[0]);
      } catch (err: unknown) {
        showBoundary(err);
        setError((err as AxiosError).message);
      } finally {
        setIsLoading(false);
      }
    },
    [showBoundary]
  );

  useEffect(() => {
    id && getProductDetails(id);
  }, [id, getProductDetails]);

  return {
    product,
    isLoading,
    error,
    quantity,
    setQuantity,
    mainImages,
    setMainImages,
  };
};
