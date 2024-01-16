import axios from "axios";
import { BASE_URL } from "../constant/api";

export const ApiRequest = axios.create({
  baseURL: BASE_URL,
});

ApiRequest.interceptors.request.use(
  async (req) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      req.headers.Authorization = `bearer ${token}`;
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
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
