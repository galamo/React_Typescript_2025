import data from "./data.json";

const arr = [data, data, data];

const result = arr.map((item) => {
  return { name: item.name.common, pop: item.population };
});

const result2 = arr.filter((item) => {
  return item.population > 600000;
});

const result3 = arr.findIndex((item) => {
  return item.population > 600000;
});
const result4 = arr.find((item) => {
  return item.population > 600000;
});
