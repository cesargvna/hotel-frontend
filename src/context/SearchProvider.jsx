import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    fechaIni: "",
    fechaFin: "",
    search: "",
  });
  console.log(searchData);
  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
