type CalculateTaxInput = {
  price: string | number;
  tax: number;
};
// 5 == "5" =>true
// 5 === "5" => false
export function calculateTax(input: CalculateTaxInput): number {
  const { price, tax } = input;
  if (typeof price === "string") {
    const v = Number(price.replace("$", ""));
    return Math.ceil(v * tax);
  } else {
    return Math.ceil(price * tax);
  }
}
