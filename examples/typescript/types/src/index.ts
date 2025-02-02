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

interface ITradeSystem {
  sales: Array<string>;
}

const tradeSystem: ITradeSystem = {
  title: "tarde-in",
  currencies: ["BTC", "ETH"],
  createdAt: new Date().toISOString(),
  numberOfUsers: 999,
  sales: [],
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

type CoinApi = Partial<Coin>;
type CoinApi2 = Required<{ id?: string }>;

type Wallet = {
  serial: string;
  code: string;
  createdAt: string;
  balance: number;
  coin: COINS;
};

type Account = {
  owner: string;
  bank: string;
  branch: string;
};

enum COINS {
  ETH = 1,
  BTC = 2,
  SOL = 3,
}

type UserProfile = Wallet & Account;
type UserProfileUn = Wallet | Account;
let up: UserProfileUn = {
  serial: "string",
  code: "string",
  createdAt: "string",
  balance: 222,
  coin: COINS.ETH,
  branch: "someBranch",
};

const coinApi: CoinApi = { value: 171 };

function searchCountry() {}

init();
