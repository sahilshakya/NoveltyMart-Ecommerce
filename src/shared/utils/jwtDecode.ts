import { User } from "../interfaces/userType";
import { jwtDecode } from "./jwt";
import { getLocal } from "./storage";

export const getDecodedUserFromToken = () => {
  const token = getLocal("authToken");

  if (token) {
    const decoded: User = jwtDecode(token);

    return decoded;
  } else {
    console.log("null");
    return null;
  }
};
