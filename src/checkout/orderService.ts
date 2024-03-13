import { ApiRequest } from "../shared/api/api";
import { ROUTES_NAME } from "../shared/constant/api";
import { Orders } from "./util";

export const order = async (body: Orders) => {
  const data = await ApiRequest.post(ROUTES_NAME.ORDER, body);
  return data;
};
