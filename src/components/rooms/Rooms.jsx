import { useState, useEffect } from "react";
import DataTable from "../rooms/DataTable.jsx";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { API_SERVICE } from "../../services/api.service.js";
import { IconCreate } from "../utils/IconCreate.jsx"

const RoomsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
`;

const Rooms = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  const handleNewRoom = () => {
    navigate(`/protected/create-room/${id}`, { replace: true });
  };
  const getRooms = async () => {
    try {
      const response = await API_SERVICE.get(`/hotels/${id}/rooms`);
      setRooms(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);
  return (
    <RoomsContainer>
      <Title> Rooms</Title>
      <IconCreate onClick={handleNewRoom}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6V5a1 1 0 012 0v6h6a1 1 0 010 2z" />
        </svg>
      </IconCreate>
      <DataTable data={rooms} />
    </RoomsContainer>
  );
};

export default Rooms;
