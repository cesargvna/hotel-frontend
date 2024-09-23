import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

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

const SubmitButton = styled.button`
  width: 40%;
  padding: 0.75rem;
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

const CloseButton = styled.button`
  width: 40%;
  padding: 0.75rem;
  background-color: #dc3545;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

// Form validation schema with Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  classification: Yup.string().required("Classification is required"),
  image: Yup.mixed().required("Image is required"),
  checkIn: Yup.string().required("Check-in time is required"),
  checkOut: Yup.string().required("Check-out time is required"),
});

const HotelForm = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Hotel Form</Title>
        <Formik
          initialValues={{
            name: "",
            address: "",
            classification: "",
            image: null,
            price: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
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
                <Label htmlFor="classification">Classification</Label>
                <Input type="text" name="classification" />
                <ErrorMessage name="classification" component={ErrorText} />
              </div>
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
                <Label htmlFor="classification">Classification</Label>
                <Input type="text" name="classification" />
                <ErrorMessage name="classification" component={ErrorText} />
              </div>

              <div>
                <Label htmlFor="image">Image</Label>
                <Input
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="image" component={ErrorText} />
              </div>

              <div>
                <Label htmlFor="checkIn">Price</Label>
                <Input type="number" name="price" />
                <ErrorMessage name="checkIn" component={ErrorText} />
              </div>
              <ButtonContent>
                <SubmitButton type="submit">Submit</SubmitButton>
                <CloseButton type="button">Cansel</CloseButton>
              </ButtonContent>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default HotelForm;