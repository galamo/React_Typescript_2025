// const cat = { name: "Mitsi", age: 4, color: "White"};
// const name = cat.name;
// const age = cat.age;
// const color = cat.color;
// console.log(name, age, color);

// const grades = [100, 90, 95];
// const first = grades[0];
// const second = grades[1];
// const third = grades[2];
// console.log(first, second, third);

// -----------------------------------------------
// Same using Object Destructuring Assignment: 
const { color, name, age } = { name: "Mitsi", age: 4, color: "White" };
console.log(name, age, color);

// Same using Array Destructuring Assignment:
const [first, second, third] = [100, 90, 95];
console.log(first, second, third);
