import React, { useState } from "react";
import styled from "styled-components";
import HotelCard from "./HotelCart.jsx";
import HotelFilter from "./HotelFilter.jsx";
import HotelForm from "./HotelForm.jsx";

const hotels = [
  {
    name: "Cartagena",
    address: "Cartagena",
    rating: 90,
    price: "650.000",
    image: "https://via.placeholder.com/200", // URL de la imagen del hotel
  },
  {
    name: "Barranquilla",
    address: "Barranquilla",
    rating: 90,
    price: "650.000",
    image: "https://via.placeholder.com/200", // URL de la imagen del hotel
  },
  {
    name: "Cartagena",
    address: "Cartagena",
    rating: 90,
    price: "650.000",
    image: "https://via.placeholder.com/200", // URL de la imagen del hotel
  },
  {
    name: "Barranquilla",
    address: "Barranquilla",
    rating: 90,
    price: "650.000",
    image: "https://via.placeholder.com/200", // URL de la imagen del hotel
  },
];
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

const Hotel = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <HotelsContainer>
      <HotelFilter setShowForm={setShowForm} />
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
      {showForm && <HotelForm showForm={showForm} setShowForm={setShowForm} />}
    </HotelsContainer>
  );
};

export default Hotel;
