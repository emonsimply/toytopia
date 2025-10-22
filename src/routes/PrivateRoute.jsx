import React, { use } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../pages/LoadingSpinner/LoadingSpinner";


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location)

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
