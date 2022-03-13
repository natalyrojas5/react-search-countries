import { hasTextOrList } from "../utils/hasTextOrList";
import SkeletonComponent from "./SkeletonComponent";

const CardBigCountryComponent = ({
  name,
  capital,
  flag,
  region,
  tld,
  subregion,
  currencies,
  languages,
  nativeName,
  borders,
  population,
  isLoading,
}) => {
  const SkeletonGrid = () => (
    <div className="d-grid-col-2 mt-1">
      <SkeletonComponent typeSeketon="text" />
      <SkeletonComponent typeSeketon="text" />
    </div>
  );
  return (
    <div className="element card-big d-flex-between">
      {isLoading ? (
        <SkeletonComponent typeSeketon="card-small" />
      ) : (
        <img src={flag} alt={name} className="w-100 shadow" loading="lazy" />
      )}

      <div className="card-big-body text-left w-100">
        {isLoading ? (
          <SkeletonComponent typeSeketon="title" />
        ) : (
          <h1>{hasTextOrList(name)}</h1>
        )}

        {isLoading ? (
          <SkeletonGrid />
        ) : (
          <div className="d-grid-col-2">
            <p>
              <b>Native Name:</b> {hasTextOrList(nativeName)}
            </p>
            <p>
              <b>Top Level Domain:</b> {hasTextOrList(tld)}
            </p>
          </div>
        )}

        {isLoading ? (
          <SkeletonGrid />
        ) : (
          <div className="d-grid-col-2">
            <p>
              <b>Population:</b> {hasTextOrList(population)}
            </p>
            <p>
              <b>Currencies:</b> {hasTextOrList(currencies)}
            </p>
          </div>
        )}

        {isLoading ? (
          <SkeletonGrid />
        ) : (
          <div className="d-grid-col-2">
            <p>
              <b>Región:</b> {hasTextOrList(region)}
            </p>
            <p>
              <b>Lenguages: </b>
              {hasTextOrList(languages)}
            </p>
          </div>
        )}

        {isLoading ? (
          <SkeletonGrid />
        ) : (
          <div className="d-grid-col-2">
            <p>
              <b>Sub Región:</b> {hasTextOrList(subregion)}
            </p>
            <p>
              <b>Capital:</b> {hasTextOrList(capital)}
            </p>
          </div>
        )}

        <div className="d-grid-col-2 mt-4 border-countries">
          <p className="mb-0">
            {isLoading ? (
              <SkeletonComponent typeSeketon="text" />
            ) : (
              <b>Borders:</b>
            )}
          </p>
          {isLoading ? (
            <div className="countries">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonComponent typeSeketon="text" key={i} />
              ))}
            </div>
          ) : (
            <div className="countries">
              {!borders || borders?.length === 0
                ? "-"
                : borders.map((b, i) => <button key={i}>{b}</button>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBigCountryComponent;
