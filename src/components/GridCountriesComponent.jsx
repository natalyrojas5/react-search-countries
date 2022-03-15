import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

import SkeletonComponent from "./SkeletonComponent";
import CardSmallCountryComponent from "./CardSmallCountryComponent";
import { EmptyCountriesComponent } from "./EmptyCountriesComponent";

const GridCountriesComponent = () => {
  const {
    countries: { current, isLoading },
  } = useContext(CountriesContext);
  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div id="grid-countries" className="grid-countries w-container">
        {isLoading &&
          current.length === 0 &&
          skeletons.map((index) => (
            <SkeletonComponent key={index} typeSeketon="card-small" />
          ))}
        {current.length > 0 &&
          !isLoading &&
          current.map((country, index) => (
            <CardSmallCountryComponent key={index} {...country} />
          ))}
      </div>
      {current.length === 0 && !isLoading && <EmptyCountriesComponent />}
    </>
  );
};

export default GridCountriesComponent;
