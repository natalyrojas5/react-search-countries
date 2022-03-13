import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const HeaderComponent = () => {
  const { setTheme, theme } = useContext(CountriesContext);
  return (
    <header className="element shadow">
      <div className="w-container header d-flex-between">
        <h1> Where in the world?</h1>
        <div
          className="pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <ion-icon name="moon-outline"></ion-icon>
          ) : (
            <ion-icon name="partly-sunny-outline"></ion-icon>
          )}
          <span> {capitalizeFirstLetter(theme)} Mode</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
