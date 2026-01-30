/**
 * Accepts an array of numbers, sorts it numerically, and determines
 * the index where a given number should be inserted to preserve order.
 *
 * @param {number[]} sourceArray - Array of numbers {will be sorted in place).
 * @param {number} insertNumber - Number to be inserted into the array.
 * @returns {number} The index where insertNumber should be placed.
 */

function getIndexToIns(sourceArray, insertNumber) {
  sourceArray.sort((a, b) => a - b);

  const returnIndex = sourceArray.findIndex((num) => num >= insertNumber);

  if (returnIndex === -1) {
    return sourceArray.length;
  }

  return returnIndex;
}

// ---- Test calls (manual validation) ----
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
console.log(getIndexToIns([2, 20, 10], 19)); // 2
console.log(getIndexToIns([3, 10, 5], 11)); // 3
console.log(getIndexToIns([], 5)); // 0
