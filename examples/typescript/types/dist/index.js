"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = require("./calculate");
const tax1 = (0, calculate_1.calculateTax)({ price: 100, tax: 0.2 });
console.log(tax1); // Output: 20
const tax2 = (0, calculate_1.calculateTax)({ price: "$200", tax: 0.15 });
console.log(tax2); // Output: 30
const coin = { value: 11, symbol: " AA", desc: "", tech: [] };
const tradeSystem = {
    title: "tarde-in",
    currencies: ["BTC", "ETH"],
    createdAt: new Date().toISOString(),
    numberOfUsers: 999,
    sales: [],
};
const user = 112313;
async function getCountries() {
    const result = await fetch("https://restcountries.com/v3.1/all");
    const data = await result.json();
    return data;
}
async function init() {
    const result = await getCountries();
    // console.log(result.map((item) => item?.name?.common));
}
var COINS;
(function (COINS) {
    COINS[COINS["ETH"] = 1] = "ETH";
    COINS[COINS["BTC"] = 2] = "BTC";
    COINS[COINS["SOL"] = 3] = "SOL";
})(COINS || (COINS = {}));
let up = {
    serial: "string",
    code: "string",
    createdAt: "string",
    balance: 222,
    coin: COINS.ETH,
    branch: "someBranch",
};
const coinApi = { value: 171 };
function searchCountry() { }
init();
