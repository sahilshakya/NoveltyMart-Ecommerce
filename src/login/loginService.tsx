import { ApiRequest } from "../shared/api/api";
// import httpMethods from "../api/httpMethods";
import { ROUTES_NAME } from "../shared/constant/api";
import { ILoginRequest } from "./interfaces/loginRequest";

export const login = async (body: ILoginRequest) => {
  try {
    const data = await ApiRequest.post(ROUTES_NAME.LOGIN, body);
    return data;
  } catch (err) {
    console.log(err);
  }
};
