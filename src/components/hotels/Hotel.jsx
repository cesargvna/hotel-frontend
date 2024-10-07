import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HotelFilter from "./HotelFilter.jsx";
import HotelForm from "./HotelForm.jsx";
import HotelTable from "./HotelTable.jsx"
import { API_SERVICE } from "../../services/api.service.js";

const HotelsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Estilos del scrollbar */
  &::-webkit-scrollbar {
    width: 10px; /* Ancho del scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0; /* Color del fondo del track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00c4cc; /* Color de la barra */
    border-radius: 10px;
    border: 2px solid #e0e0e0; /* Espacio entre la barra y el track */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #009fa8; /* Color cuando se pasa el cursor por la barra */
  }
`;

const Title = styled.h2`text-align:center`;

const Hotel = () => {
  const [showForm, setShowForm] = useState(false);
  const [hotels, setHotels] = useState([]);

  const getHotels = async () => {
    const response = await API_SERVICE.get("/hotels");
    setHotels(response.data);
  };

  const deleteHotel = (id) => {
    try {
      const response = API_SERVICE.delete(`/hotels/${id}`)
      setHotels(hotels.filter(item => item.id !== id));
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHotels();
  }, []);
  return (
    <HotelsContainer>
      <Title>Hotels</Title>
      <HotelFilter setShowForm={setShowForm} />
      <HotelTable data={hotels} deleteHotel={deleteHotel} />
      {showForm && <HotelForm showForm={showForm} setShowForm={setShowForm} />}
    </HotelsContainer>
  );
};

export default Hotel;
