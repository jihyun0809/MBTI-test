import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  return <Outlet />;
};

export default ProtectedRouter;
