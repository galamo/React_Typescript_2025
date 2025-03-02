import "./App.css";
import ErrorBoundary, { NiceErrorPage } from "./components/error";
import Layout from "./components/layout";
import { BrowserRouter } from "react-router";
import SettingsProvider from "./context/settingProvider";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<NiceErrorPage />}>
        <SettingsProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </SettingsProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
