
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../utils/Table.js";

const UserTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>phone</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableData>{item.name}</TableData>
            <TableData> {item.phone}</TableData>
            <TableData>{item.email}</TableData>
            <TableData>{item.role}</TableData>
            <TableData>
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
