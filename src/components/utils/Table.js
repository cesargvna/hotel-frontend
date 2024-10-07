import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  font-family: "Arial, sans-serif";
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableHead = styled.thead`
  background-color: #00c4cc;
  color: #ffffff;
  text-align: left;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

const TableHeader = styled.th`
  padding: 12px 15px;
`;

const TableData = styled.td`
  padding: 12px 15px;
`;
export { Table, TableHead, TableRow, TableHeader, TableData };
