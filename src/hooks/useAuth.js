import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider.jsx";
export function useAuth() {
  return useContext(AuthContext);
}
