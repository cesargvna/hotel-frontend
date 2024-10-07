import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { API_SERVICE } from '../../services/api.service';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
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

const InputField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const SelectField = styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  phone: Yup.string().required('El teléfono es requerido'),
  address: Yup.string().required('La dirección es requerida'),
  email: Yup.string().email('Correo inválido').required('El correo es requerido'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
  //rol: Yup.string().oneOf(['admin', 'cliente'], 'Rol inválido').required('El rol es requerido'),
});

const UserForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {

    try {
      const response = await API_SERVICE.post('/users', values);
      navigate('/protected/users', { replace: true })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Container>
      <h2>Formulario de Registro</h2>
      <Formik
        initialValues={{ name: '', phone: '', address: '', email: '', password: '', role: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <InputField>
              <Label htmlFor="name">Nombre</Label>
              <StyledField type="text" id="name" name="name" />
              <ErrorMessage name="name" component={ErrorText} />
            </InputField>

            <InputField>
              <Label htmlFor="phone">Teléfono</Label>
              <StyledField type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component={ErrorText} />
            </InputField>

            <InputField>
              <Label htmlFor="address">Dirección</Label>
              <StyledField type="text" id="address" name="address" />
              <ErrorMessage name="address" component={ErrorText} />
            </InputField>

            <InputField>
              <Label htmlFor="email">Correo</Label>
              <StyledField type="email" id="email" name="email" />
              <ErrorMessage name="email" component={ErrorText} />
            </InputField>

            <InputField>
              <Label htmlFor="password">Contraseña</Label>
              <StyledField type="password" id="password" name="password" />
              <ErrorMessage name="password" component={ErrorText} />
            </InputField>

            <InputField>
              <Label htmlFor="role">Rol</Label>
              <SelectField as="select" id="role" name="role"
                onChange={(e) => {
                  setFieldValue("role", e.target.value);
                }}
              >
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="cliente">Cliente</option>
              </SelectField>
              <ErrorMessage name="rol" component={ErrorText} />
            </InputField>

            <Button type="submit">Registrarse</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserForm;
