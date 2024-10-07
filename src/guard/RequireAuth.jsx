import { Navigate, useLocation } from "react-router-dom";
import { getFromLocalStorage } from "../utilities/local-storage-manager";
export default function RequireAuth({ children }) {
  const user = getFromLocalStorage("user");
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user.role === "admin") {
    return children;
  } else {
    return <Navigate to="/" />
  }


}
