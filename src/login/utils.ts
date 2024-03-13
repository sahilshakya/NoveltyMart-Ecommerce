import { jwtDecode } from "../shared/utils/jwt";
import { login } from "./loginService";
import { setLocal } from "../shared/utils/storage";
import { ILoginRequest } from "./interfaces/loginRequest";
import { User } from "../shared/interfaces/userType";

export const LoginHandler = async ({ data }: { data: ILoginRequest }) => {
  const payload = {
    email: data.email,
    password: data.password,
  };
  const loginReq = await login(payload);
  if (loginReq) {
    const token = loginReq.data.token;
    setLocal("authToken", token);
    // setAuthData(token);
    const decoded: User = jwtDecode(token);
    return decoded;
  }
};
