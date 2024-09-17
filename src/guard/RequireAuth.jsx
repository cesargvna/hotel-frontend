import { Navigate, useLocation } from "react-router-dom";
export default function RequireAuth({ children }) {
  const user = localStorage.getItem("user");
  console.log(user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
