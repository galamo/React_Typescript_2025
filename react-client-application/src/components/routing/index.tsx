import { Routes, Route, Navigate } from "react-router";
import CountriesPage from "../pages/countries-page";
import NotFound from "../pages/not-found-page";
import SettingsPage from "../pages/settings-page";
import CountryPage from "../pages/country-page";
import RegistrationPage from "../pages/auth-page/register-page";
import LoginPage from "../pages/auth-page/login-page";
import { AuthLayoutPage } from "../pages/auth-page";
import AsyncProtectedRoute from "../async-auth-protector";

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

        <Route path="/countries" element={<AsyncProtectedRoute />}>
          <Route index element={<CountriesPage />} />
        </Route>

        <Route path="/country/:code" element={<CountryPage />} />
        <Route path="/auth" element={<AuthLayoutPage />}>
          <Route index element={<Navigate to="register" />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
