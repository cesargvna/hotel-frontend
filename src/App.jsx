import Login from "./pages/Login";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProtectedPage from "./pages/protected/ProtectedPage.jsx";
import RequireAuth from "./guard/RequireAuth.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Hotel from "./components/hotels/Hotel.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Header />}>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/protected/*"
          element={
            <RequireAuth>
              <Sidebar >
                <Routes >
                  <Route path='hotels' element={<Hotel />} />
                </Routes>
              </Sidebar>
            </RequireAuth>
          }
        />

      </Route>
    </Routes>
  );
}

export default App;
