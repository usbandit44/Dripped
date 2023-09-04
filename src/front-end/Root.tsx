import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";

const Root = () => {
  return (
    <div className="layout">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Root;
