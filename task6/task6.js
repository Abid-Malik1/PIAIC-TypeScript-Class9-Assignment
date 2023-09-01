var numbers1 = [3, 6, 9, 12, 15, 18];
var doubledOddNumbers = numbers1
    .filter(function (num) { return num % 2 !== 0; }) // Filter odd numbers
    .map(function (oddNum) { return oddNum * 2; }); // Map to their doubled values
console.log("Original Numbers:", numbers1);
console.log("Doubled Values of Odd Numbers:", doubledOddNumbers);
