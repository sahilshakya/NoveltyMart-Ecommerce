import {
  Product,
  AdaptedProduct,
  ProductPartial,
  AdaptedProductPartial,
} from "./interfaces/product";
import { IListResponse, IResponse } from "../shared/interfaces/http";
import { formatToUSCurrency } from "../shared/utils/common";

export const adaptProductDetail = (
  res: IResponse<Product>
): IResponse<AdaptedProduct> => {
  return {
    ...res,
    data: {
      ...res.data,
      availableQuantity: res.data.quantity,
      formattedPrice: formatToUSCurrency({ amount: res.data.price }),
    },
  };
};

export const adaptProducts = (
  res: IResponse<IListResponse<ProductPartial>>
): IResponse<IListResponse<AdaptedProductPartial>> => {
  return {
    ...res,
    data: {
      ...res.data,
      rows: res.data.rows.map((product) => ({
        ...product,
        formattedPrice: formatToUSCurrency({ amount: product.price }),
        formattedDiscount: formatToUSCurrency({
          amount: product.discountPrice,
        }),
      })),
    },
  };
};
