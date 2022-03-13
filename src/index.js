import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.scss";

import CountriesView from "./views/CountriesView";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
