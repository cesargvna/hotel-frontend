import React, { useEffect, useState, useContext } from "react";
import { replace, useNavigate, useParams } from "react-router-dom";
import RoomsTable from "./RoomsTable";
import styles from "styled-components";
import { API_SERVICE } from "../../services/api.service";
//const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL;
const IMAGE_URL = "";
import { SearchContext } from "../../context/SearchProvider.jsx";
import { SubmitButton } from "../utils/Buttons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationContainer = styles.div`
  padding: 10px;
  overflox: scroll;
`;
const Title = styles.h2`
  text-align: center;
`;
const HotelContent = styles.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const ImageContent = styles.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const HotelInfo = styles.div`
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ReserveDate = styles.div`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  `;
const SelectedRooms = styles.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Reservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState([]);
  const [reserves, setReserves] = useState([]);
  const { searchData, setReserveInfo, reserveInfo } = useContext(SearchContext);

  const getHotel = async () => {
    try {
      const response = await API_SERVICE.get(`/hotels/${id}`);
      setHotel(response.data);
      setReserveInfo((prevState) => ({
        ...prevState,
        hotel: response.data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleReserve = () => {
    setReserveInfo((prevState) => ({
      ...prevState,
      rooms: reserves,
    }));
    if (reserves.length === 0) {
      return toast.error("Selecciona almenos una habitacion.", {
        autoClose: 2000,
      });
    }
    navigate(`/create-reserve`, { replace: true });
  };

  useEffect(() => {
    getHotel();
  }, [reserves]);
  return (
    <ReservationContainer>
      <ToastContainer />
      <HotelContent>
        <ImageContent src={`${IMAGE_URL + hotel.image}`} alt={hotel.name} />
        <HotelInfo>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Price: ${hotel.price}</p>
        </HotelInfo>
        <ReserveDate>
          <h4>Datos de reserva</h4>
          <p>Fecha de entrada: {searchData.fechaIni}</p>
          <p>Fecha de salida: {searchData.fechaFin}</p>
        </ReserveDate>
      </HotelContent>

      <SelectedRooms>
        <div>
          {reserves?.map((room) => (
            <div key={room.number}>
              Room Number: {room.number}, Price: {room.price}, Type: {room.type}
            </div>
          ))}
        </div>
        <SubmitButton
          style={{ width: "100px", height: "60px" }}
          onClick={handleReserve}
        >
          Reserve
        </SubmitButton>
      </SelectedRooms>
      <Title>Select a rom</Title>
      <RoomsTable reserves={reserves} setReserves={setReserves} />
      {}
    </ReservationContainer>
  );
};

export default Reservation;
