import { Country } from "./index";
import data from "./data.json";

function searchCountries(
  data: Array<Country>,
  value: string
): Array<Country> | undefined {
  if (typeof value !== "string") return;
  if (!Array.isArray(data)) return;

  const result = data.filter(
    (item) => item?.name?.common?.toLowerCase() === value.toLowerCase()
  );
  return result;
}

function searchCountriesDynamic(
  data: Array<Country>,
  value: string,
  dynamicKey: keyof Country
): Array<Country> | undefined {
  if (typeof value !== "string") return;
  if (!Array.isArray(data)) return;

  //   const result = data.filter(
  //     // @ts-ignore
  //     // (item) => (item?[dynamicKey]).toLowerCase() === value.toLowerCase()
  //   );
  return;
}

searchCountries([data], "israel");
searchCountriesDynamic([data], "30", "startOfWeek");
