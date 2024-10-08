import { useEffect, useState } from "react";
import UserTable from "./UserTable.jsx"
import { API_SERVICE } from "../../services/api.service";
import { IconCreate } from "../utils/IconCreate.jsx"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const UserContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
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

const Title = styled.h2`
  text-align:center;
`

const User = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await API_SERVICE.get(`/users`);
    setUsers(response.data)
  }
  useEffect(() => {
    getUsers();
  }, [])

  const handleCreate = () => {
    navigate('/protected/create-user', { replace: true })
  }

  return (
    <UserContainer>
      <Title>Users </Title>
      <IconCreate onClick={handleCreate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6V5a1 1 0 012 0v6h6a1 1 0 010 2z" />
        </svg>
      </IconCreate>
      <UserTable data={users} />
    </UserContainer>
  )
};

export default User;
