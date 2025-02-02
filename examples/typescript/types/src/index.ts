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
function getCountries(): string {
  return "1";
}

console.log(tradeSystem);
