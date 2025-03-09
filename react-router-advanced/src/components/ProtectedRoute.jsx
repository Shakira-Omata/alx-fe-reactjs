import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Change this based on actual authentication logic

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
