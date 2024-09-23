import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FilterContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 300px;
  background-color: #2d2d2d;
  color: #fff;
  margin-right: 10px;
  outline: none;
`;

const DateInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  margin-right: 10px;
  width: 150px;
`;

const IconButton = styled.button`
  background-color: #00c4cc;
  color: white;
  border: none;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #009fa8;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const HotelFilter = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  const handleNewHotel = () => {
    navigate("/protected/create-hotel", { replace: true });
  };

  return (
    <FilterContainer>
      <SearchInput type="text" placeholder="Search" />
      <DateInput type="date" placeholder="dd/mm/aaaa" />
      <DateInput type="date" placeholder="dd/mm/aaaa" />
      <IconButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.71 20.29l-4.42-4.42A8 8 0 1016 17.34l4.42 4.42a1 1 0 001.42-1.42zM10 16a6 6 0 110-12 6 6 0 010 12z" />
        </svg>
      </IconButton>
      <IconButton onClick={handleNewHotel}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6V5a1 1 0 012 0v6h6a1 1 0 010 2z" />
        </svg>
      </IconButton>
    </FilterContainer>
  );
};

export default HotelFilter;
