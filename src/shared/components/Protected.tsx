import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { uiRoutes } from "../constant/uiRoutes";
import { getLocal } from "../utils/storage";

export const Protected = () => {
  const token = getLocal("authToken");
  if (!token) {
    return <Navigate to={uiRoutes.login} />;
  }
  return <Outlet />;
};

export const Public = () => {
  const token = getLocal("authToken");
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");

  if (!token) {
    return <Outlet />;
  }

  if (returnUrl) {
    return <Navigate to={uiRoutes.checkout} />;
  }

  return <Navigate to={uiRoutes.products} />;
};
