import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import RoomsTable from "./RoomsTable";
import styles from "styled-components";
import { API_SERVICE } from "../../services/api.service";
const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL;
import { SearchContext } from "../../context/SearchProvider.jsx";
import { SubmitButton } from "../utils/Buttons";

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
  const [hotel, setHotel] = useState([]);
  const [reserves, setReserves] = useState([]);
  const { searchData, setSearchData } = useContext(SearchContext);
  const [isReserve, setIsReserve] = useState(false);

  const getHotel = async () => {
    try {
      const response = await API_SERVICE.get(`/hotels/${id}`);
      setHotel(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReserve = async () => {};

  useEffect(() => {
    getHotel();
  }, []);
  console.log(searchData);
  return (
    <ReservationContainer>
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
