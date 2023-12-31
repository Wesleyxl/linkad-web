import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute: React.FC = (): JSX.Element => {
  const token = localStorage.getItem("access_token");

  if (!token || token === "" || token === undefined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

const UnPrivateRoute: React.FC = (): JSX.Element => {
  const token = localStorage.getItem("access_token");

  if (!token || token === "" || token === undefined) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export { PrivateRoute, UnPrivateRoute };
