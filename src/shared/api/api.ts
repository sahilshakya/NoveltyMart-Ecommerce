import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constant/api";

export const ApiRequest: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // baseURL: "https://dev.vitafyhealth.com",
});

ApiRequest.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    req.headers["Content-Type"] = "application/json";

    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

ApiRequest.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log(error);

    // Do something with response error
    return Promise.reject(error);
  }
);
