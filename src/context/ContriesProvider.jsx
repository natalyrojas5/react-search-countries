import React, { useState } from "react";
import useGetAllCountries from "../hooks/useGetAllCountries";
import { CountriesContext } from "./CountriesContext";

const ContriesProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <CountriesContext.Provider
      value={{
        ...useGetAllCountries(),
        theme,
        setTheme,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default ContriesProvider;
