import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div
      style={{
        padding: "0px 0.1rem 0px 15.1rem",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
