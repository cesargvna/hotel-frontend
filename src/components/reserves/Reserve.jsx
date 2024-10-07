import React, { useState, useEffect } from "react";
import ReserveTable from "./ReserveTable";
import { API_SERVICE } from "../../services/api.service";
import styled from "styled-components";

const ReserveContainer = styled.div`
  padding: 10px;
`;
const Title = styled.h2`text-align: center`;
const Reserve = () => {
  const [reserves, setReserves] = useState([]);

  const getReserves = async () => {
    const response = await API_SERVICE.get("/reserve");
    setReserves(response.data);
  };
  useEffect(() => {
    getReserves();
  }, []);
  return (
    <ReserveContainer>
      <Title>Reservers</Title>
      <ReserveTable data={reserves} />
    </ReserveContainer>
  );
};

export default Reserve;
