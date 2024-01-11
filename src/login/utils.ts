import { login } from "../service/loginService";
import { ILoginRequest } from "./interfaces/loginRequest";

export const loginHandler = async ({ data }: { data: ILoginRequest }) => {
  try {
    const payload = {
      email: data.email,
      password: data.password,
    };

    const loginReq = await login(payload);
    if (loginReq) {
      const token = loginReq.data.token;
      localStorage.setItem("authToken", token);
      return token;
    }
  } catch (err) {
    console.log(err);
  }
};
