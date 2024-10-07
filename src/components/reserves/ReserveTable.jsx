import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../utils/Table.js";
import moment from "moment";

const ReserveTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Date in</TableHeader>
          <TableHeader>Date out</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>State</TableHeader>
          <TableHeader>Room</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableData>
              {moment(item.fechaIni).format("DD/MM/YYYY HH:mm")}
            </TableData>
            <TableData>
              {moment(item.fechaFin).format("DD/MM/YYYY HH:mm")}
            </TableData>
            <TableData>{item.userId?.name}</TableData>
            <TableData>{item.state}</TableData>
            <TableData>{item.roomId?.number}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ReserveTable;
