import { Routes, Route, Navigate } from "react-router";
import CountriesPage from "../pages/countries-page";
import NotFound from "../pages/not-found-page";
import SettingsPage from "../pages/settings-page";
import CountryPage from "../pages/country-page";
import RegistrationPage from "../pages/auth-page/register-page";
import LoginPage from "../pages/auth-page/login-page";
import { AuthLayoutPage } from "../pages/auth-page";
import AsyncProtectedRoute from "../async-auth-protector";
import MainPage from "../pages/main-page";
import ForgatPasswordPage from "../pages/auth-page/forgat-pass-page";
// import ReportsPage from "../pages/reports-page";
import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
import PostsPage from "../pages/posts-page";

const CountriesReportLazy = lazy(() => {
  return import("../pages/reports-page");
});

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route element={<AsyncProtectedRoute />}>
          <Route path="" element={<MainPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="countries" element={<CountriesPage />} />
        </Route>
        <Route
          path="/reports"
          element={
            <Suspense fallback={<CircularProgress />}>
              <CountriesReportLazy />
            </Suspense>
          }
        />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/country/:code" element={<CountryPage />} />
        <Route path="/auth" element={<AuthLayoutPage />}>
          <Route index element={<Navigate to="register" />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="fp" element={<ForgatPasswordPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
