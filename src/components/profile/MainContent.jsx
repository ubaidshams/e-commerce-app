import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import CustomRoutes from "../../routes/CustomRoutes";

const MainContent = () => {
  return (
    <div className="mainBlock">
      <Outlet />
    </div>
  );
};

export default MainContent;
