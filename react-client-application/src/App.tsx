import "./App.css";
import ErrorBoundary, { NiceErrorPage } from "./components/error";
import Layout from "./components/layout";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<NiceErrorPage />}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
