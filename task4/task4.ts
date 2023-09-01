const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSquaredNumbers: number[] = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(evenNum => evenNum * evenNum); // Map to their squares

console.log("Original Numbers:", numbers);
console.log("Squares of Even Numbers:", evenSquaredNumbers);
