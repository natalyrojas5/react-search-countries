import useSearchCountries from "../hooks/useSearchCountries";

const SearchComponent = () => {
  const { searching } = useSearchCountries();

  return (
    <div className="search">
      <ion-icon name="search-outline"></ion-icon>
      <input
        className="element shadow search"
        placeholder="Search for a country ..."
        onChange={searching}
      />
    </div>
  );
};

export default SearchComponent;
