import { Navigate, useLocation } from "react-router-dom";

const Middleware = ({ page }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <Navigate to={'/login'} state={{ from: location }} replace />
    );
  }
  return page;
};


export default Middleware;
