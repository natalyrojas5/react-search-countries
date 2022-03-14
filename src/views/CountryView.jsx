import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetCountry from "../hooks/useGetCountry";
import { CountriesContext } from "../context/CountriesContext";

import HeaderComponent from "../components/HeaderComponent";
import CardBigCountryComponent from "../components/CardBigCountryComponent";

const CountryView = () => {
  const navigate = useNavigate();
  let { name } = useParams();

  const { theme, setCountries } = useContext(CountriesContext);
  const { data, isLoading } = useGetCountry(name);

  return (
    <main className={"theme-" + theme}>
      <HeaderComponent />
      <div className="py-3 w-container content-main">
        <button
          className="shadow element btn-back mb-2 pointer"
          onClick={() => {
            navigate("/");
            setCountries((prev) => ({
              ...prev,
              isLoading: true,
            }));
          }}
        >
          <ion-icon name="chevron-back-outline"></ion-icon> Back
        </button>
        <CardBigCountryComponent {...data} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default CountryView;
