import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
