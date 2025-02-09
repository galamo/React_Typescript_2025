import { HeaderApp } from "../../ui/header-app";
import { Country } from "./country";
import data from "./data.json";

export default function CountriesPage() {
  return (
    <div>
      <HeaderApp title={"Countries"} />
      search <input />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {data.map((item) => {
          return (
            <Country
              name={item?.name?.common}
              code={item.cca3}
              flag={item?.flags?.png}
              population={item.population}
              region={item.region}
            />
          );
        })}
      </div>
    </div>
  );
}
