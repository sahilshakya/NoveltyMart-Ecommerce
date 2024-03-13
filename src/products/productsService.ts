import { ApiRequest } from "../shared/api/api";
import { ROUTES_NAME } from "../shared/constant/api";
import {
  AdaptedProduct,
  AdaptedProductPartial,
  Product,
  ProductPartial,
} from "./interfaces/product";
import { adaptProductDetail, adaptProducts } from "./utils";
import { IListResponse, IResponse } from "../shared/interfaces/http";

export const fetchProducts = async (
  selectedCategory: string,
  sorted: string,
  productsPerPage: number,
  offset: number
): Promise<IResponse<IListResponse<AdaptedProductPartial>>> => {
  const data: IResponse<IListResponse<ProductPartial>> = await ApiRequest.get(
    ROUTES_NAME.PRODUCTS,
    {
      params: {
        keyword: selectedCategory,
        sortType: sorted,
        limit: productsPerPage,
        offset: offset,
        // sortBy: sorted,
      },
    }
  );

  return adaptProducts(data);
};

export const fetchProductDetails = async (
  id: string
): Promise<IResponse<AdaptedProduct>> => {
  const data: IResponse<Product> = await ApiRequest.get(
    ROUTES_NAME.PRODUCTS_DETAIL.replace(":id", id)
  );

  return adaptProductDetail(data);
};
