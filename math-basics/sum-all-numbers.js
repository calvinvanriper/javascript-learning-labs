/**
 * A function that accepts an array of two numbers, sorts them numerically, and adds
 * all numbers within the defined range.
 *
 * @param {[number, number]} numberArray - An array of two numbers, creating the range to sum.
 * @returns {number} The sum of the range of numbers.
 */
function sumAll(numberArray) {
  let sumNumber = 0;
  if (numberArray[0] > numberArray[1]) {
    numberArray.reverse();
  }

  for (let i = numberArray[0]; i <= numberArray[1]; i++) {
    sumNumber += i;
  }
  return sumNumber;
}

// ---- Test calls (manual validation) ----
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
console.log(sumAll([1, 25])); // 325
