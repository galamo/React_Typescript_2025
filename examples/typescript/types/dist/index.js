"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coin = { value: 11, symbol: "AA", desc: "", tech: [] };
const tradeSystem = {
    title: "tarde-in",
    currencies: ["BTC", "ETH"],
    createdAt: new Date().toISOString(),
    numberOfUsers: 999,
};
const user = 112313;
async function getCountries() {
    const result = await fetch("https://restcountries.com/v3.1/all");
    const data = await result.json();
    return data;
}
async function init() {
    const result = await getCountries();
    console.log(result.map((item) => item?.name?.common));
}
init();
