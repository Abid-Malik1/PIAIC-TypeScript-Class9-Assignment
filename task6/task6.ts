const numbers1: number[] = [3, 6, 9, 12, 15, 18];

const doubledOddNumbers: number[] = numbers1
  .filter(num => num % 2 !== 0) // Filter odd numbers
  .map(oddNum => oddNum * 2); // Map to their doubled values

console.log("Original Numbers:", numbers1);
console.log("Doubled Values of Odd Numbers:", doubledOddNumbers);
