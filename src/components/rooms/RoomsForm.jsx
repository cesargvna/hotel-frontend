import { Formik, Form, Field, ErrorMessage } from "formik";
import { API_SERVICE } from "../../services/api.service.js";
import * as Yup from "yup";
import styled from "styled-components";
import { SubmitButton, CloseButton } from "../utils/Buttons.js";
import { useNavigate, useParams } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled(Field)`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

const ButtonContent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const validationSchema = Yup.object({
  number: Yup.string().required("El numero es obligatorio"),
  price: Yup.number()
    .required("El precio es obligatorio")
    .positive("Debe ser un precio positivo"),
  //type: Yup.string().required("El tipo es obligatorio"),
});

const RoomsForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = async (values) => {
    values.hotelId = id;
    const response = await API_SERVICE.post("/room", values);
    if (response.status === 201) {
      navigate(`/protected/hotel-rooms/${id}`, { replace: true });
    }
  };
  const handleCancel = () => {
    navigate(`/protected/hotel-rooms/${id}`, { replace: true });
  };
  return (
    <FormContainer>
      <h1>Create a new room</h1>
      <Formik
        initialValues={{ number: "", price: "", type: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ setFieldValue }) => (
          <StyledForm>
            <label htmlFor="number">Número</label>
            <Input type="text" name="number" />
            <ErrorMessage name="number" component={ErrorText} />

            <label htmlFor="price">Precio</label>
            <Input type="number" name="price" />
            <ErrorMessage name="price" component={ErrorText} />

            <label htmlFor="type">Tipo</label>
            <Input
              as="select"
              name="type"
              onChange={(e) => {
                setFieldValue("type", e.target.value);
              }}
            >
              <option value="">Selecciona un tipo</option>
              <option value="suite">Suite</option>
              <option value="juniorsuite">Junior suite</option>
              <option value="gransuite">Gran Suite </option>
            </Input>
            <ErrorMessage name="type" component={ErrorText} />

            <ButtonContent>
              <SubmitButton type="submit">Submit</SubmitButton>
              <CloseButton type="button" onClick={handleCancel}>
                Close
              </CloseButton>
            </ButtonContent>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RoomsForm;
