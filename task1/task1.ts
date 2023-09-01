function removeNegativeNumbers(numbers: number[]): number[] {
    const positiveNumbers = numbers.filter(num => num >= 0);
    return positiveNumbers;
  }
  
  const originalArray: number[] = [2, -5, 10, -8, 0, 15, -3];
  const newArray: number[] = removeNegativeNumbers(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Array without Negative Numbers:", newArray);
  