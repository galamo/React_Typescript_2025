import { useState } from "react";
import { HeaderApp } from "../../ui/header-app";
import { Country } from "./country";
import data from "./data.json";
import css from "./index.module.css";

export default function CountriesPage() {
  const [filter, setFilter] = useState("");
  const [isAsia, setIsAsia] = useState(false);

  function onFilterHandler(event: any) {
    setFilter(event.target.value);
  }
  function onAsiaHandler() {
    setIsAsia(!isAsia);
  }

  const filteredCountriesAsia = isAsia
    ? data.filter((item) => item?.region.toLowerCase() === "asia")
    : data;
  const filteredCountries = filter
    ? filteredCountriesAsia.filter((item) =>
        item?.name?.common.toLowerCase().includes(filter.toLowerCase())
      )
    : filteredCountriesAsia;

  return (
    <div>
      <HeaderApp title={"Countries"} />
      <input onChange={onFilterHandler} />
      <button onClick={onAsiaHandler}> Only Asia Countries </button>
      <div>
        <h1 style={{ textAlign: "center" }}>
          {filteredCountries.length}/{data.length}
        </h1>
      </div>
      <div className={css.contentCountries}>
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
