import { Routes, Route } from "react-router";
import CountriesPage from "../pages/countries-page";
import NotFound from "../pages/not-found-page";

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
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
