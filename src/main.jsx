import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AxiosInterseptor } from "./interseptors/interseptor";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
AxiosInterseptor();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
