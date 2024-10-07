import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const HotelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HotelInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const HotelName = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const Location = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #0071eb;
  margin: 10px 0;
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;

  span {
    margin-right: 10px;
  }
`;

const PriceButton = styled.button`
  background-color: #0071eb;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: auto;

  &:hover {
    background-color: #005bb5;
  }
`;

export {
  Card,
  ImageContainer,
  HotelImage,
  HotelInfo,
  HotelName,
  Location,
  Rating,
  Features,
  PriceButton,
};
