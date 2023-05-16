import React from "react";
import { Outlet, Route, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/allso/login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
