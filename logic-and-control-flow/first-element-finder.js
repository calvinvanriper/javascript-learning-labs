/**
 * Returns the first element in an array that satisfies a given truth test.
 *
 * @param {number[]} array - An array of numbers to search through.
 * @param {Function} func - A predicate function that returns true or false.
 * @returns {number|undefined} The first element that passes the truth test, or undefined if none do.
 *
 * @example
 * findElement([1, 3, 5, 8, 9], num => num % 2 === 0);
 * // → 8
 */
function findElement(array, func) {
  // Iterate through the array and apply the predicate function
  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    // Return immediately when the truth test passes
    if (func(num)) {
      return num;
    }
  }

  // If no element satisfies the condition, undefined is returned implicitly
}

// ---- Test calls (manual validation) ----
console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)); // 8
console.log(findElement([1, 3, 5, 7, 9], (num) => num > 10)); // undefined
console.log(findElement([4, 6, 8], (num) => num < 5)); // 4
console.log(findElement([], (num) => num > 0)); // undefined
console.log(findElement([1, 2, 4, 5, 7, 8, 9], (num) => num % 3 === 0)); // 9
