import { AdaptedProductPartial } from "./product";

export interface PaginationProps {
  products: AdaptedProductPartial[] | 0;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
}
