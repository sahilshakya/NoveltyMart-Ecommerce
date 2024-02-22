import { Outlet } from "react-router-dom";

import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className=" bg-gray-light md:px-[120px] md:py-[50px] min-h-[100vh] p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
