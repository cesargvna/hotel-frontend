import { API_SERVICE } from "../../services/api.service.js";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../utils/Table.js";
import { useNavigate } from "react-router-dom";


const ReserveTable = ({ data, deleteHotel }) => {
  const navigate = useNavigate();
  const handleHabitations = (id) => {
    navigate(`/protected/hotel-rooms/${id}`)
  }


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Address</TableHeader>
          <TableHeader>Clasification</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableData>
              {item.name}
            </TableData>
            <TableData>
              {item.address}
            </TableData>
            <TableData>{item.clasification}</TableData>
            <TableData>
              <button type="button">Edit</button>
              <button type="button" onClick={() => deleteHotel(item.id)}>Delete</button>
              <button type="button" onClick={() => handleHabitations(item.id)}>Habitations</button>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ReserveTable;
