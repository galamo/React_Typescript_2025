import { Routes, Route } from "react-router";
import CountriesPage from "../pages/countries-page";
import NotFound from "../pages/not-found-page";
import SettingsPage from "../pages/settings-page";
import CountryPage from "../pages/country-page";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1> Main Page, nothing to show... </h1>
            </div>
          }
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/country/:code" element={<CountryPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
