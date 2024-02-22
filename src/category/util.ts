import { IListResponse, IResponse } from "../shared/interfaces/http";
import { AdaptedCategory, Category } from "./interfaces/category";

export const adaptCategory = (
  res: IResponse<IListResponse<Category>>
): IResponse<IListResponse<AdaptedCategory>> => {
  return {
    ...res,
    data: {
      ...res.data,
      rows: res.data.rows.map((category) => ({
        ...category,
        formattedName:
          category.name.substring(0, 1).toUpperCase() +
          category.name.substring(1),
      })),
    },
  };
};
