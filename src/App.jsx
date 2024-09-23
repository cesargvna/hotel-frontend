import Login from "./pages/Login";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RequireAuth from "./guard/RequireAuth.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Hotel from "./components/hotels/Hotel.jsx";
import HotelForm from "./components/hotels/HotelForm";

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
              <Sidebar>
                <Routes>
                  <Route path="hotels" element={<Hotel />} />
                  <Route path="create-hotel" element={<HotelForm />} />
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
