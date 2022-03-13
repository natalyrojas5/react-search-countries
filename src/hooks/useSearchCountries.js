import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import scrollTop from "../utils/scrollTop";

const useSearchCountries = () => {
  const { countries, setCountries } = useContext(CountriesContext);

  const filterByRegion = (event) => {
    const currentRegion = event.target.value;
    let current = countries.data.filter((c) => c.region === currentRegion);

    if (currentRegion === "All") {
      current = countries.data;
    }
    setCountries((prev) => ({
      ...prev,
      current,
    }));
    scrollTop();
  };

  const searching = ({ target: { value } }) => {
    let current = countries.data;
    if (value.length !== 0) {
      current = countries.data.filter((c) => {
        return c.name.toLowerCase().includes(value.toLowerCase());
      });
    }
    setCountries({
      ...countries,
      current,
    });
  };
  return { filterByRegion, searching };
};

export default useSearchCountries;
