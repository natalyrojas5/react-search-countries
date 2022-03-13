import { useState } from "react";
import { countriesServices } from "../services/countriesServices";

const useGetAllCountries = () => {
  const [regions, setRegions] = useState({
    isLoading: true,
    data: [],
  });

  const [countries, setCountries] = useState({
    isLoading: true,
    data: [],
    current: [],
  });

  const getCountries = async () => {
    if (countries.data.length > 0) return;
    setCountries((prev) => ({
      ...prev,
      isLoading: true,
      data: [],
      current: [],
    }));
    const res = await countriesServices.getAll();
    const resJSON = await res.json();
    const hasCountries = resJSON.length > 0;

    if (hasCountries) {
      const countries = resJSON.map(
        ({ name: { official }, region, flags, population, capital }) => ({
          name: official,
          region,
          flag: flags.png,
          population,
          capital: capital?.[0] ?? "",
        })
      );
      setRegions((prev) => ({
        ...prev,
        isLoading: false,
        data: [...new Set(countries.map(({ region }) => region))],
      }));

      setCountries((prev) => ({
        ...prev,
        isLoading: false,
        data: countries,
        current: countries,
      }));
    }
  };

  return {
    regions,
    countries,
    setCountries,
    getCountries,
  };
};

export default useGetAllCountries;
