import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  isWelcomeEnable: boolean | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  isWelcomeEnable,
}) => {
  return isAuthenticated && isWelcomeEnable ? (
    <Outlet />
  ) : (
    <Navigate to="/welcome" replace />
  );
};

export default ProtectedRoute;
