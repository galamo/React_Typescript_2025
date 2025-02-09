"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const narrowDown_1 = __importDefault(require("./narrowDown"));
const narrowDown_2 = require("./narrowDown");
(0, narrowDown_2.testSomething2)();
(0, narrowDown_1.default)();
const callUserApi = () => {
    return [{ user: 1 }];
};
callUserApi();
