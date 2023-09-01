var fruits = ["apple", "banana", "cherry", "date", "grape"];
var longFruits = fruits.filter(function (fruit) { return fruit.length > 5; });
console.log("Original Fruits:", fruits);
console.log("Long Fruits (more than 5 characters):", longFruits);
