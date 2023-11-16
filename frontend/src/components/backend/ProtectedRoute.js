import { Navigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  if (!token) {
    // user is not authenticated
    return <Navigate to="/admin/login" />;
  }

  return children;
};
