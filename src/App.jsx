import Login from "./pages/Login";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import RequireAuth from "./guard/RequireAuth.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Hotel from "./components/hotels/Hotel.jsx";
import HotelForm from "./components/hotels/HotelForm";
import Rooms from "./components/rooms/Rooms.jsx";
import RoomsForm from "./components/rooms/RoomsForm.jsx";
import Reserve from "./components/reserves/Reserve.jsx";
import ReservationForm from "./components/reservations/ReservationForm.jsx";
import Reservation from "./components/reservations/Reservation.jsx";
import { SearchProvider } from "./context/SearchProvider.jsx";
import User from "./components/users/User.jsx";
import UserForm from "./components/users/UserForm.jsx";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Header />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select-room/:id" element={<Reservation />} />
          <Route path="create-reserve" element={<ReservationForm />} />
          <Route
            path="/protected/*"
            element={
              <RequireAuth>
                <Sidebar>
                  <Routes>
                    <Route path="hotels" element={<Hotel />} />
                    <Route path="create-hotel" element={<HotelForm />} />
                    <Route path="hotel-rooms/:id" element={<Rooms />} />
                    <Route path="create-room/:id" element={<RoomsForm />} />
                    <Route path="reserves" element={<Reserve />} />
                    <Route path="users" element={<User />} />
                    <Route path="create-user" element={<UserForm />} />


                  </Routes>
                </Sidebar>


              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </SearchProvider>
  );
}

export default App;
