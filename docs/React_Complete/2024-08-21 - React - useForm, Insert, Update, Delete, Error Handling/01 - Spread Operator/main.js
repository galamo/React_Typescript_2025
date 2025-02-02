

const kitten1 = { name: "Mitsi", age: 4, color: "White"};
// const kitten2 = { name: kitten1.name, age: kitten1.age, color: kitten1.color };
const kitten2 = { ...kitten1 }; // Spread Operator

kitten1.name = "Cyber";

console.log(kitten1); // Cyber
console.log(kitten2); // Mitsi


