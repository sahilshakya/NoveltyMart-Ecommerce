import { ApiRequest } from "../shared/api/api";
import { IOrderRequest } from "./interfaces/orderRequest";
import { ROUTES_NAME } from "../shared/constant/api";

export const order = async (body: IOrderRequest) => {
  const data = await ApiRequest.post(ROUTES_NAME.ORDER, body);
  return data;
};
