import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function User() {
  return <h1> THIS IS USER COMPONENT!!!! </h1>;
}
function Product() {
  const pName = "bread";
  const pPrice = 12;
  return (
    <div style={{ border: "1px solid black" }}>
      <h1> product name: {pName} </h1>
      <h2> product price: {pPrice} </h2>
    </div>
  );
}

function App() {
  const title: string = "This is message";
  return (
    <>
      <div>
        <h1>{title}</h1>
        <Product />
        <User />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>Click me</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
