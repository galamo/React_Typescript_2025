import { useState } from "react";
import { HeaderApp } from "../../ui/header-app";
import { Country } from "./country";
import data from "./data.json";

export default function CountriesPage() {
  const [filter, setFilter] = useState("");

  const filteredCountries = filter
    ? data.filter((item) =>
        item?.name?.common.toLowerCase().includes(filter.toLowerCase())
      )
    : data;

  return (
    <div>
      <HeaderApp title={"Countries"} />
      search
      <input
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {filteredCountries.map((item) => {
          return (
            <Country
              key={item.cca3}
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
