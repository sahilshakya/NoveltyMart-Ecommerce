// import { useMutation } from "@tanstack/react-query";
// import { ILoginRequest } from "../interfaces/loginRequest";
// import { login } from "../loginService";
// import { setLocal } from "../../shared/utils/storage";
// import { User } from "../../shared/interfaces/userType";
// import { jwtDecode } from "jwt-decode";
// import { toast } from "react-toastify";

// export const useLoginMutation = () => {
//   return useMutation({
//     mutationFn: async ({ payload }: { payload: ILoginRequest }) => {
//       const loginReq = await login(payload);
//       if (loginReq) {
//         const token = loginReq.data.token;
//         setLocal("authToken", token);
//         // setAuthData(token);
//         const decoded: User = jwtDecode(token);
//         return decoded;
//       }
//     },
//     onSuccess: () => {},
//     onError: () => {
//       toast.error("Incorrect Email/Password");
//     },
//   });
// };
