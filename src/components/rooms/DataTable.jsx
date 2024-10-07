import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../utils/Table.js";

const DataTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Number</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Type</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableData>{item.number}</TableData>
            <TableData>${item.price}</TableData>
            <TableData>{item.type}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
