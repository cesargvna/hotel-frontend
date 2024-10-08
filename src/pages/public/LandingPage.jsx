import React, { useState } from "react";
import HotelCard from "./HotelCard.jsx";
import CardHotel from "../../components/hotels/HotelCart.jsx";
import SearchHotel from "../../components/SearchHotel.jsx";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchProvider.jsx";

import styled from "styled-components";
import { API_SERVICE } from "../../services/api.service.js";

const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const SectionValoration = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
const SearchSection = styled.section`
  width: 100%;
`;

export default function LandingPage() {
  const hotelData = [
    {
      image: "https://via.placeholder.com/300x200",
      name: "Edinburgh Marriott Hotel",
      location: "Edimburgo",
      rating: "8.4",
      reviews: "9584",
      features: ["Piscina", "Spa"],
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Castlefield Hotel",
      location: "Mánchester",
      rating: "8.3",
      reviews: "6397",
      features: ["Piscina", "Acepta mascotas"],
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "King Street Townhouse",
      location: "Mánchester",
      rating: "9.1",
      reviews: "7367",
      features: ["Piscina", "Spa"],
    },
  ];
  const { searchData, setSearchData } = useContext(SearchContext);
  const [hotels, setHotels] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await API_SERVICE.get("/search", { params: searchData });
    setHotels(response.data);
  };
  return (
    <>
      <LandingContainer>
        <SearchSection>
          <SearchHotel handleSearch={handleSearch} />
          {hotels.map((hotel, index) => (
            <CardHotel key={index} hotel={hotel} />
          ))}
        </SearchSection>
        <SectionValoration>
          {hotelData.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </SectionValoration>
      </LandingContainer>
    </>
  );
}
