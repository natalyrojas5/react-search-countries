import { useEffect, useState } from "react";
import { countriesServices } from "../services/countriesServices";

const useGetCountry = (countryName) => {
  const [country, setCountry] = useState({
    isLoading: true,
    data: {},
  });

  useEffect(async () => {
    const res = await countriesServices.getSearch(
      countryName.replaceAll("-", " ")
    );
    const resJSON = await res.json();
    const {
      name: { common, nativeName },
      capital,
      flags: { png },
      region,
      tld,
      subregion,
      currencies,
      languages,
      borders,
      population,
    } = resJSON[0];

    const data = {
      name: common,
      capital: capital?.[0] ?? "",
      flag: png,
      region,
      tld: tld[0],
      subregion,
      currencies: Object.values(currencies)[0]?.name ?? "",
      languages: Object.values(languages),
      nativeName: Object.values(nativeName)[0]?.official ?? "",
      borders,
      population,
    };
    setCountry((prevState) => ({
      ...prevState,
      isLoading: false,
      data,
    }));
  }, [countryName]);

  return country;
};

export default useGetCountry;
