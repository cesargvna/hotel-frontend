import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    fechaIni: "",
    fechaFin: "",
    search: "",
  });
  const [reserveInfo, setReserveInfo] = useState({ hotel: [], rooms: [] })
  return (
    <SearchContext.Provider value={{ searchData, setSearchData, reserveInfo, setReserveInfo }}>
      {children}
    </SearchContext.Provider>
  );
};
