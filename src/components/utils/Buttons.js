import styled from "styled-components";

export const CloseButton = styled.button`
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

export const SubmitButton = styled.button`
  width: 40%;
  padding: 0.75rem;
  background-color: #00c4cc;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #009fa8;
  }
`;
