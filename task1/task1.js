function removeNegativeNumbers(numbers) {
    var positiveNumbers = numbers.filter(function (num) { return num >= 0; });
    return positiveNumbers;
}
var originalArray = [2, -5, 10, -8, 0, 15, -3];
var newArray = removeNegativeNumbers(originalArray);
console.log("Original Array:", originalArray);
console.log("Array without Negative Numbers:", newArray);
