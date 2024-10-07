import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const FormContainer = styled.div`
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-14]+$/, "Phone must be only digits")
    .required("Phone is required"),
  address: Yup.string().required("Address is required"),
});

const ReserveForm = () => {
  return (
    <FormContainer>
      <h1>Reserve Form</h1>
      <Formik
        initialValues={{ name: "", phone: "", address: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
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

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ReserveForm;
