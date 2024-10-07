import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_SERVICE } from "../../services/api.service";
import styled from "styled-components";

import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../utils/Table.js";

const RoomsTable = ({ reserves, setReserves }) => {
  const [rooms, setRooms] = useState([]);
  const { id } = useParams();

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

  const handleCheckboxChange = (room, isChecked) => {
    if (isChecked) {
      setReserves((prevSelected) => [...prevSelected, room]);
      console.log(reserves);
    } else {
      setReserves((prevSelected) =>
        prevSelected.filter(
          (selectedRoom) => selectedRoom.number !== room.number,
        ),
      );
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Number</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Select</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rooms?.map((item, index) => (
            <TableRow key={index}>
              <TableData>{item.number}</TableData>
              <TableData>${item.price}</TableData>
              <TableData>{item.type}</TableData>
              <TableData>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                />
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default RoomsTable;
