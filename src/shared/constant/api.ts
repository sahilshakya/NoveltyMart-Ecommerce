import { envConfig } from "../config";

export const BASE_URL = envConfig.baseUrl;

export const ROUTES_NAME = {
  LOGIN: "users/login",
  PRODUCTS: "products",
  PRODUCTS_DETAIL: `products/:id`,
  ORDER: `orders`,
  USER: `users/:id`,
  CATEGORY: `categorys`,
};
