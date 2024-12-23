import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { API_SERVICE, POST_IMAGE } from "../../services/api.service";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitButton, CloseButton } from "../utils/Buttons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Cambia para que el contenido comience desde arriba */
  background-color: #f7f9fc;
  height: calc(100vh - 60px);
  overflow-y: auto; /* Asegura que el contenedor pueda hacer scroll si es necesario */

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00c4cc;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #009fa8;
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin-top: 20px; /* Agrega un margen para evitar que quede pegado al tope */
`;

const Title = styled.h2`
  text-align: center;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  clasification: Yup.string().required("Classification is required"),
  price: Yup.number().required("Price is required"),
  description: Yup.string().required("Description is required"),
  //checkIn: Yup.string().required("Check-in time is required"),
  // checkOut: Yup.string().required("Check-out time is required"),
});
const HotelForm = () => {
  const [fileName, setFileName] = useState("");
  const [hotel, setHotel] = useState({});
  const [src, setSrc] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleCreate = async (values) => {
    const response = await POST_IMAGE("/hotels", values);
    navigate("/protected/hotels");
  };

  const handleCancel = () => {
    navigate("/protected/hotels");
  };

  const getHotel = async () => {
    const response = await API_SERVICE.get(`/hotels/${id}`);
    setHotel(response.data);
  };
  useEffect(() => {
    if (id) {
      getHotel();
    }
  }, [id]);

  const handleSubmit = async (values) => {
    if (id) {
      const response = await API_SERVICE.put(`/hotels/${id}`, values);
      console.log(response.data);
      navigate("/protected/hotels");
    } else {
      handleCreate(values);
    }
  };

  const initialValues = {
    name: hotel?.name || "",
    address: hotel?.address || "",
    clasification: hotel?.clasification || "",
    price: hotel?.price || "",
    description: hotel?.description || "",
  };
  return (
    <Container>
      <FormContainer>
        <Title>Hotel Form</Title>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ setFieldValue }) => (
            <Form>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" />
                <ErrorMessage name="name" component={ErrorText} />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input type="text" name="address" />
                <ErrorMessage name="address" component={ErrorText} />
              </div>

              <div>
                <Label htmlFor="clasification">Clasification</Label>
                <Input type="text" name="clasification" />
                <ErrorMessage name="clasification" component={ErrorText} />
              </div>

              <div>
                <Label htmlFor="image">Image</Label>
                <Input
                  type="file"
                  name="image"
                  onChange={(e) => {
                    let reader = new FileReader();
                    let file = e.target.files[0];
                    if (file) {
                      reader.onloadend = () => setFileName(file.name);
                      if (file.name !== fileName) {
                        reader.readAsDataURL(file);
                        setSrc(reader);
                        setFieldValue("file", file);
                      }
                    }
                  }}
                />
                <ErrorMessage name="image" component={ErrorText} />
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <Input type="number" name="price" />
                <ErrorMessage name="price" component={ErrorText} />
              </div>
              <div>
                <Label htmlFor="description">Descriotion</Label>
                <Input type="text" name="description" />
                <ErrorMessage name="description" component={ErrorText} />
              </div>
              <ButtonContent>
                <SubmitButton type="submit">Submit</SubmitButton>
                <CloseButton type="button" onClick={handleCancel}>
                  Cancel
                </CloseButton>
              </ButtonContent>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default HotelForm;
