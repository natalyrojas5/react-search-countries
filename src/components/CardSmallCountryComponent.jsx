import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { formatParam } from "../utils/formatParam";
import { hasTextOrList } from "../utils/hasTextOrList";

const CardSmallCountryComponent = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
  const navigate = useNavigate();

  const getByNameCountry = () => {
    const country = formatParam(name);
    navigate("/country/" + country);
  };
  return (
    <div className="element shadow card-small" title={name}>
      <div className="card-small-img">
        <img src={flag} alt="Perú" className="w-100" />
      </div>
      <div className="card-small-body">
        <h1 className="pointer" onClick={getByNameCountry}>
          {hasTextOrList(name)}
        </h1>
        <p>
          <b>Population:</b> {hasTextOrList(population)}
        </p>
        <p>
          <b>Región:</b> {hasTextOrList(region)}
        </p>
        <p>
          <b>Capital:</b> {hasTextOrList(capital)}
        </p>
      </div>
    </div>
  );
};

CardSmallCountryComponent.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CardSmallCountryComponent;
