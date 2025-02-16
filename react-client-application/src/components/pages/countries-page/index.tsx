import React, { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "./country";
import StaticData from "./data.json";
import css from "./index.module.css";
import { CircularProgress, Input, Skeleton } from "@mui/material";
type CountryServer = (typeof StaticData)[0]; // using the StaticData only for Type

const dns = "http://localhost:2200/api";
const urlAllCountries = `${dns}/countries-delay/`;
const urlNameCountries = `${dns}/countries-delay/name/`;

export default function CountriesPage() {
  const [filter, setFilter] = useState("");
  const [isAsia, setIsAsia] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    async function getCountries() {
      try {
        setIsLoading(true);
        const { data } = await axios.get<{
          data: Array<CountryServer>;
          result: Array<CountryServer>;
        }>(
          countryName
            ? `${dns}/countries-delay/name/${countryName}`
            : urlAllCountries
        );
        const arrResult = data.data || data.result;
        const countriesClientModeled: Array<Country> = arrResult.map((item) => {
          return {
            name: item?.name?.common,
            flag: item.flags.png,
            population: item.population,
            region: item.region,
            code: item.cca3,
          };
        });
        setCountries(countriesClientModeled);
      } catch (ex) {
        console.log(ex);
        alert("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();

    return () => {
      console.log("CountriesPage Component is Destroyed");
    };
  }, [countryName]);

  function onFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }
  function onAsiaHandler() {
    setIsAsia(!isAsia);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setCountryName(event.target.value);
  }

  const filteredCountriesAsia = isAsia
    ? countries.filter((item) => item?.region.toLowerCase() === "asia")
    : countries;
  const filteredCountries = filter
    ? filteredCountriesAsia.filter((item) =>
        item?.name?.toLowerCase().includes(filter.toLowerCase())
      )
    : filteredCountriesAsia;

  return (
    <div style={{ marginTop: "50px" }}>
      {/* <HeaderApp title={"Countries"} /> */}
      <input onChange={onFilterHandler} />
      <button onClick={onAsiaHandler}> Only Asia Countries </button>
      <div>
        <h2> Server side filters</h2>
        <Input onChange={handleSearch} />
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {filteredCountries.length}/{countries.length}
            </>
          )}
        </h1>
      </div>

      <div className={css.contentCountries}>
        {isLoading ? (
          <DummySekeletonCountries />
        ) : (
          <>
            {filteredCountries.map((item) => {
              return (
                <Country
                  key={item.code}
                  name={item?.name}
                  code={item.code}
                  flag={item?.flag}
                  population={item.population}
                  region={item.region}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

function DummySekeletonCountries() {
  const skeletons = [];
  for (let index = 0; index < 12; index++) {
    skeletons.push(
      <Skeleton key={index} variant="rectangular" width={400} height={500} />
    );
  }
  return skeletons;
}
