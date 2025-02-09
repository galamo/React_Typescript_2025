"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("./data.json"));
const arr = [data_json_1.default, data_json_1.default, data_json_1.default];
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
