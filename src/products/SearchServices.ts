import { ApiRequest } from "../shared/api/api";
import { uiRoutes } from "../shared/constant/uiRoutes";

export const searchProduct = async () => {
  const data = await ApiRequest.get(uiRoutes.searchProduct, {
    // params:{
    //     q:,
    //     limit:,
    //     offset:,
    // }
  });
  return data;
};
