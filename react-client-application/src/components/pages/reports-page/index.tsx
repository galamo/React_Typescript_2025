// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Country } from "../countries-page/country";
import { CountryServer } from "../countries-page";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";

interface DataLine {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateDataLine(): DataLine[] {
  const pages = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  // Create the data array by mapping each page name to a DataLine object with random values
  const data: DataLine[] = pages.map((page) => ({
    name: page,
    uv: randomInt(1000, 5000), // You can adjust the range as needed
    pv: randomInt(1000, 5000),
    amt: randomInt(1000, 5000),
  }));

  return data;
}

const data = [
  { name: "Group A", value: 900 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 500 },
  { name: "Group D1", value: 500 },
  { name: "Group D2", value: 500 },
  { name: "Group D3", value: 500 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const dns = "http://localhost:2200/api/countries-delay/";

export default function ReportsPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [lineChartData, setLineChartData] = useState<Array<DataLine>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("CountriesPage route loaded");
    let isSubscribed = true;
    async function getCountries() {
      try {
        setIsLoading(true);
        const { data } = await axios.get<{
          data: Array<CountryServer>;
          result: Array<CountryServer>;
        }>(dns);
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
        if (isSubscribed) {
          setCountries(countriesClientModeled);
        }
      } catch (ex) {
        console.log(ex);
        alert("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const memoizedAdaptedData = useMemo(() => {
    const data = simpleCalcAggregationByRegion(countries);
    const adaptedData: Array<{ name: string; value: number }> =
      getAdaptedData(data);
    return adaptedData;
  }, [countries]);

  const memoizedAdaptedDataPopulation = useMemo(() => {
    const data = simpleCalcAggregationByRegionPopulation(countries);
    const adaptedData: Array<{ name: string; value: number }> =
      getAdaptedData(data);
    return adaptedData;
  }, [countries]);

  return (
    <>
      {isLoading ? <CircularProgress /> : null}
      <h1>Reports</h1>
      <Button
        onClick={() => {
          setLineChartData(generateDataLine());
        }}
      >
        Set Line Data
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChartApp data={memoizedAdaptedData} />
        <PieChartApp data={memoizedAdaptedDataPopulation} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChartApp data={lineChartData} />
      </div>
    </>
  );
}
function PieChartApp(props: { data: Array<{ name: string; value: number }> }) {
  return (
    <PieChart width={700} height={400}>
      <Pie
        data={props.data}
        cx={120}
        cy={200}
        innerRadius={20}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={(data) => {
          return data.name + " " + data.value;
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
// @ts-ignore
function LineChartApp(props: any) {
  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

function simpleCalcAggregationByRegion(countries: Country[]) {
  console.log("Calculating long process.....");
  if (!Array.isArray(countries)) return;
  const regionsObj: { [key: string]: number } = {};
  countries.forEach((c) => {
    if (regionsObj[c.region]) {
      regionsObj[c.region] = regionsObj[c.region] + 1;
    } else {
      regionsObj[c.region] = 1;
    }
  });
  return regionsObj;
}

function simpleCalcAggregationByRegionPopulation(countries: Country[]) {
  if (!Array.isArray(countries)) return;
  const regionsObj: { [key: string]: number } = {};
  countries.forEach((c) => {
    if (regionsObj[c.region]) {
      regionsObj[c.region] = regionsObj[c.region] + c.population;
    } else {
      regionsObj[c.region] = c.population;
    }
  });
  return regionsObj;
}

function getAdaptedData(result: { [key: string]: number } | undefined) {
  return Object.entries(result).map(([key, value]) => {
    return { name: key, value };
  });
}

// calculation
function calcAggregationByRegion(countries: Country[]) {
  if (!Array.isArray(countries)) return [];
  const result = countries.reduce((regionsObj: any, currentCountry) => {
    const { region } = currentCountry;
    if (!region) return regionsObj;
    if (regionsObj[region]) {
      return {
        ...regionsObj,
        [region]: regionsObj[region] + 1,
      };
    } else {
      return {
        ...regionsObj,
        [region]: 1,
      };
    }
  }, {});
  return result;
}
