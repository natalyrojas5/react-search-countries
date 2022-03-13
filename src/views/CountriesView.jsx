import { useContext, useEffect } from "react";
import { CountriesContext } from "../context/CountriesContext";

import HeaderComponent from "../components/HeaderComponent";
import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";
import GridCountriesComponent from "../components/GridCountriesComponent";

const CountriesView = () => {
  const { getCountries, theme } = useContext(CountriesContext);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <main className={"theme-" + theme}>
      <HeaderComponent />
      <div className="pb-3 w-container">
        <div className="search-and-filter">
          <SearchComponent />
          <FilterComponent />
        </div>
        <GridCountriesComponent />
      </div>
    </main>
  );
};
export default CountriesView;
