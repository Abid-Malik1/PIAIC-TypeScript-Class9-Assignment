const fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];

const longFruits: string[] = fruits.filter(fruit => fruit.length > 5);

console.log("Original Fruits:", fruits);
console.log("Long Fruits (more than 5 characters):", longFruits);
