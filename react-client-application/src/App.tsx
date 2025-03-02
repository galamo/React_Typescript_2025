import "./App.css";
import ErrorBoundary, { NiceErrorPage } from "./components/error";
import Layout from "./components/layout";
import { BrowserRouter } from "react-router";
import SettingsProvider from "./context/settingProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<NiceErrorPage />}>
        <Provider store={store}>
          <SettingsProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </SettingsProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
