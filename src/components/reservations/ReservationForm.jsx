import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { SearchContext } from "../../context/SearchProvider.jsx";
import { API_SERVICE } from "../../services/api.service.js";
import { getFromLocalStorage } from "../../utilities/local-storage-manager.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormInfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FormContainer = styled.div`
  width: 50%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;

  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const InfoContainer = styled.div`
  width: 50%;
  max-width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.h4`
  font-size: 18px;
  margin-top: 20px;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;

const RoomContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const Total = styled.h4`
  font-size: 20px;
  color: #2ecc71;
  font-weight: bold;
`;
const Room = styled.div`
  display: flex;
  justify-content: space-between;
`;
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
});

const ReservationForm = () => {
  const { searchData, reserveInfo } = useContext(SearchContext);
  const navigate = useNavigate();
  let totalPrice = 0;
  for (let i = 0; i < reserveInfo.rooms.length; i++) {
    totalPrice += reserveInfo.rooms[i].price;
  }
  const handleSubmit = async (values) => {
    const user = {
      ...values,
      id: getFromLocalStorage("user").id,
    };
    const data = {
      user: user,
      hotelId: reserveInfo.hotel.id,
      rooms: reserveInfo.rooms,
      date: searchData,
    };
    try {
      console.log(data);
      const response = await API_SERVICE.post("/reserve", data);
      if (response.status === 201) {
        toast.success("Reserva realizada exitosamente!", {
          autoClose: 3000,
        });
      }
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      toast.error("Error al agregar reserva.", { autoClose: 3000 });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <FormInfoContainer>
      <ToastContainer />
      <InfoContainer>
        <Title>Info Reserva</Title>
        <Paragraph>Hotel: {reserveInfo.hotel.name}</Paragraph>
        <Paragraph>Dirección: {reserveInfo.hotel.address}</Paragraph>
        <Paragraph>Fecha Entrada: {searchData.fechaIni}</Paragraph>
        <Paragraph>Fecha Salida: {searchData.fechaFin}</Paragraph>

        <Subtitle>Rooms</Subtitle>
        <RoomContainer>
          {reserveInfo.rooms.map((room, index) => (
            <Room key={index}>
              <Paragraph>Tipo: {room.type}</Paragraph>
              <Paragraph>Habi {room.number}</Paragraph>
              <Paragraph>Price: {room.price}$</Paragraph>
            </Room>
          ))}
        </RoomContainer>
        <Divider />
        <Total>Total: {totalPrice}$</Total>
      </InfoContainer>{" "}
      <FormContainer>
        <h1>Reserve Form</h1>
        <Formik
          initialValues={{ name: "", phone: "", address: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {() => (
            <Form>
              <FormField>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" />
                <ErrorMessage name="name" component={ErrorText} />
              </FormField>

              <FormField>
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" id="phone" name="phone" />
                <ErrorMessage name="phone" component={ErrorText} />
              </FormField>

              <FormField>
                <Label htmlFor="address">Address</Label>
                <Input type="text" id="address" name="address" />
                <ErrorMessage name="address" component={ErrorText} />
              </FormField>

              <SubmitButton type="submit">Confirmar Reserva</SubmitButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </FormInfoContainer>
  );
};

export default ReservationForm;
