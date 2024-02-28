import { AdaptedProductPartial } from "./product";

export interface ProductListProps {
  products: AdaptedProductPartial[] | undefined;
  maxPrice: number;
  minPrice: number;
  isError: boolean;
  isLoading: boolean;
  error: Error | null;
}
