import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CountriesView from "../views/CountriesView";
import CountryView from "../views/CountryView";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesView />} />
        <Route path="/country/:name" element={<CountryView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
