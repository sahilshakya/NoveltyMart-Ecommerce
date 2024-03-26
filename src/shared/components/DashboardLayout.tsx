import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import { Breadcrumb } from "./Breadcrumbs";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className=" bg-gray-light lg:px-[120px] lg:py-[50px] min-h-[100vh] p-5">
        <Breadcrumb />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
