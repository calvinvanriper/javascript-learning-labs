/**
 * Removes items from the beginning of an array until the provided
 * function returns true for an element, then returns the remaining array.
 *
 * @param {Array<*>} arr - The source array to process.
 * @param {function(*): boolean} func - A callback function that tests each element.
 * @returns {Array<*>} A new array starting from the first element that satisfies the condition.
 */
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

// ---- Test cases (manual validation) ----
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); // [3, 4]
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); // [1, 0, 1]
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
); // [1, 2, 3]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
); // []
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
); // [7, 4]
