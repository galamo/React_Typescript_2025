import data from "./data.json";

type Coin = {
  value: number;
  symbol: string;
  desc: string;
  tech: Array<string>;
};

const coin: Coin = { value: 11, symbol: "AA", desc: "", tech: [] };
type Country = typeof data;

interface ITradeSystem {
  title: string;
  currencies: Array<string>;
  createdAt: string;
  numberOfUsers: number;
}

const tradeSystem: ITradeSystem = {
  title: "tarde-in",
  currencies: ["BTC", "ETH"],
  createdAt: new Date().toISOString(),
  numberOfUsers: 999,
};
const user: number = 112313;

async function getCountries(): Promise<Array<Country>> {
  const result = await fetch("https://restcountries.com/v3.1/all");
  const data = await result.json();
  return data;
}

async function init() {
  const result = await getCountries();
  console.log(result.map((item) => item?.name?.common));
}
init();
