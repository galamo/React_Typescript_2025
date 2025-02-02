"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("./data.json"));
function searchCountries(data, value) {
    if (typeof value !== "string")
        return;
    if (!Array.isArray(data))
        return;
    const result = data.filter((item) => item?.name?.common?.toLowerCase() === value.toLowerCase());
    return result;
}
function searchCountriesDynamic(data, value, dynamicKey) {
    if (typeof value !== "string")
        return;
    if (!Array.isArray(data))
        return;
    const result = data.filter((item) => (item ? [dynamicKey] : ).toLowerCase() === value.toLowerCase());
    return result;
}
searchCountries([data_json_1.default], "israel");
searchCountriesDynamic([data_json_1.default], "30", "startOfWeek");
