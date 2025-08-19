import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  // const token = sessionStorage.getItem("token");
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem("token"));

   useEffect(() => {
     // Listen for token changes (mainly from other tabs)
     const handleStorage = () => {
       setToken(sessionStorage.getItem("token") || "");
     };
     window.addEventListener("storage", handleStorage);
     return () => window.removeEventListener("storage", handleStorage);
   }, []);

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
