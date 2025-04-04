import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
  if (auth === false) {
    // replace => replacer le navigateur ancien par "/login"
    return <Navigate to="/login" replace />;
  }

  // children ila bghina n diro fiha awahed component (fhad le cas ) route
  // Outlet : plusieur component
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
