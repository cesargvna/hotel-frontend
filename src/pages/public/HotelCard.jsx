import {
  Card,
  ImageContainer,
  HotelImage,
  HotelInfo,
  HotelName,
  Location,
  Rating,
  Features,
  PriceButton,
} from "../../components/utils/Card.js";

const HotelCard = ({ hotel }) => {
  return (
    <Card>
      <ImageContainer>
        <HotelImage src={hotel.image} alt={hotel.name} />
      </ImageContainer>
      <HotelInfo>
        <HotelName>{hotel.name}</HotelName>
        <Location>{hotel.location}</Location>
        <Rating>
          {hotel.rating} - {hotel.reviews} reseñas
        </Rating>
        <Features>
          {hotel.features.map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
        </Features>
        <PriceButton>Ver precios</PriceButton>
      </HotelInfo>
    </Card>
  );
};

export default HotelCard;
