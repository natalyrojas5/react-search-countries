import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import useSearchCountries from "../hooks/useSearchCountries";

const FilterComponent = () => {
  const { regions } = useContext(CountriesContext);
  const { filterByRegion } = useSearchCountries();

  return (
    <select
      aria-label="region"
      name="region"
      defaultValue=""
      className="element shadow"
      onChange={filterByRegion}
      style={{
        overflowY: "scroll",
      }}
      tabindex="0"
    >
      <option value="" disabled>
        Filter by Region
      </option>
      {regions.data.map((region, k) => (
        <option value={region} key={k}>
          {region}
        </option>
      ))}
      <option value="All">All Countries</option>
    </select>
  );
};

export default FilterComponent;
