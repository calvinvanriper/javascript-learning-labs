/**
 * Finds the largest number in each sub-array and returns a new array
 * containing those maximum values.
 *
 * @param {number[][]} arrayOfArrays - An array containing multiple arrays of numbers.
 * @returns {number[]} A new array made up of the largest number from each sub-array.
 *
 * @example
 * largestOfAll([[1, 2, 3], [4, 5], [9, 0]]);
 * // → [3, 5, 9]
 */
function largestOfAll(arrayOfArrays) {
  let largestNumbers = [];

  // Iterate over each sub-array and extract its maximum value
  for (let i = 0; i < arrayOfArrays.length; i++) {
    let subArray = arrayOfArrays[i];
    largestNumbers.push(Math.max(...subArray));
  }

  return largestNumbers;
}

// ---- Test calls (manual validation) ----
console.log(
  largestOfAll([
    [1, 2, 3],
    [4, 5],
    [9, 0],
  ]),
); // [3, 5, 9]
console.log(
  largestOfAll([
    [13, 27],
    [4, 5],
    [100, 99],
  ]),
); // [27, 5, 100]
console.log(
  largestOfAll([
    [-1, -5],
    [-10, -3],
  ]),
); // [-1, -3]
console.log(largestOfAll([[42], [7], [0]])); // [42, 7, 0]
