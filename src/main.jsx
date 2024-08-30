import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AxiosInterseptor } from "./interseptors/interseptor";
import "./index.css";
AxiosInterseptor();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
