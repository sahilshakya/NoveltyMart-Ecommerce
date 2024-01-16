import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <div className="min-height: 100vh flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
