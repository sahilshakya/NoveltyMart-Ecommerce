import { ApiRequest } from "../api/api";
// import httpMethods from "../api/httpMethods";
import { ROUTES_NAME } from "../constant/api";
import { ILoginRequest } from "../login/interfaces/loginRequest";

// export const login = (body: ILoginRequest): Promise<any> => {
//   return new Promise<any>((resolve, reject) => {
//     // try {
//     httpMethods
//       .post(ROUTES_NAME.LOGIN, body)
//       .then((response) => {
//         resolve(response);
//         console.log(response);
//         return response;
//       })
//       .catch((err) => reject(err));
//   });
// };

export const login = async (body: ILoginRequest) => {
  try {
    const data = await ApiRequest.post(ROUTES_NAME.LOGIN, body);

    return data;
  } catch (err) {
    console.log(err);
  }
};
