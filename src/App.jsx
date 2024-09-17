import Login from "./pages/Login";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProtectedPage from "./pages/protected/ProtectedPage.jsx";
import RequireAuth from "./guard/RequireAuth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Header />}>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/protected"
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
