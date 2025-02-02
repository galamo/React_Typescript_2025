"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// 5 == "5" =>true
// 5 === "5" => false
function calculateTax(input) {
    const { price, tax } = input;
    if (typeof price === "string") {
        const v = Number(price.replace("$", ""));
        return Math.ceil(v * tax);
    }
    else {
        return Math.ceil(price * tax);
    }
}
