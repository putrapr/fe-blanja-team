import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  if (!token || Date.now() >= decoded.exp * 1000) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
