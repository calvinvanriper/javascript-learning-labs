/**
 * Inserts the elements of one array into another array at a specified index
 * without modifying the original arrays.
 *
 * @param {any[]} array1 - The array whose elements will be inserted.
 * @param {any[]} array2 - The array that will receive the inserted elements.
 * @param {number} index - The position at which insertion should begin.
 * @returns {any[]} A new array containing the combined elements.
 *
 * @example
 * frankenSplice([1, 2], ["a", "b"], 1);
 * // → ["a", 1, 2, "b"]
 */
function frankenSplice(array1, array2, index) {
  // Create a shallow copy of the second array to preserve immutability
  let resultArray = [...array2];

  // Insert each element of array1 at the correct position
  for (let i = 0; i < array1.length; i++) {
    resultArray.splice(index, 0, array1[i]);
    index++;
  }

  return resultArray;
}

// ---- Test calls (manual validation) ----
console.log(frankenSplice([1, 2], ["a", "b"], 1));          // ["a", 1, 2, "b"]
console.log(frankenSplice(["x", "y"], [1, 2, 3], 0));      // ["x", "y", 1, 2, 3]
console.log(frankenSplice([true], [false], 1));            // [false, true]
console.log(frankenSplice([], ["a", "b"], 1));             // ["a", "b"]
