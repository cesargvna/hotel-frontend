import React from "react";
import styled from "styled-components";
//const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL;
const IMAGE_URL = "";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../utilities/local-storage-manager.js";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const HotelImage = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const HotelName = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const HotelAddress = styled.p`
  margin: 5px 0;
  color: gray;
`;

const HotelRating = styled.p`
  margin: 5px 0;
  color: #007bff;
`;

const PriceContainer = styled.div`
  text-align: right;
  min-width: 150px;
`;

const Price = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const ActionButton = styled.button`
  background-color: #00c4cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #009fa8;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const user = getFromLocalStorage("user");
  const handleViewMore = () => {
    if (!user) {
      return navigate("/login", { replace: true });
    }
    navigate(`/select-room/${hotel.id}`, { replace: true });
  };
  return (
    <CardContainer>
      <HotelImage src={`${IMAGE_URL + hotel.image}`} alt={hotel.name} />
      <InfoContainer>
        <HotelName>{hotel.name}</HotelName>
        <HotelAddress>{hotel.address}</HotelAddress>
        <HotelRating>Rating - Excellent({hotel.rating})</HotelRating>
      </InfoContainer>
      <PriceContainer>
        <Price>{hotel.price} per night</Price>
        <p>Price expected for April 2024</p>
        <ActionButton onClick={handleViewMore}>View More</ActionButton>
      </PriceContainer>
    </CardContainer>
  );
};

export default HotelCard;
