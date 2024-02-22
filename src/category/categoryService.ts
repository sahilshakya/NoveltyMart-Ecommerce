import { ApiRequest } from "../shared/api/api";
import { AdaptedCategory, Category } from "./interfaces/category";
import { adaptCategory } from "./util";
import { ROUTES_NAME } from "../shared/constant/api";
import { IListResponse, IResponse } from "../shared/interfaces/http";

export const fetchCategory = async (): Promise<
  IResponse<IListResponse<AdaptedCategory>>
> => {
  const data: IResponse<IListResponse<Category>> = await ApiRequest.get(
    ROUTES_NAME.CATEGORY
  );
  return adaptCategory(data);
};
