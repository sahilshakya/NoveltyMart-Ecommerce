import { ApiRequest } from "../api/api";
import { ROUTES_NAME } from "../constant/api";

export const fetchUserData = async (id: number) => {
  const data = await ApiRequest.get(
    ROUTES_NAME.USER.replace(":id", id.toString())
  );

  return data;
};
