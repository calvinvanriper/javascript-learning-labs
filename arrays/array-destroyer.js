/**
 * Removes all values from an array that match any of the additional arguments.
 *
 * @param {Array<*>} sourceArray - An array of values to filter.
 * @param {...*} itemsToRemove - Values that should be removed from sourceArray.
 * @returns {Array<*>} New array containing only remaining values.
 */
function destroyer(sourceArray, ...itemsToRemove) {
  return sourceArray.filter((item) => !itemsToRemove.includes(item));
}

// ---- Test calls (manual validation) ----
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 1)); // [3, 5, 2, 2]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
console.log(destroyer(['tree', 'hamburger', 53], 'tree', 53)); // ["hamburger"]
console.log(
  destroyer(
    ['possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht'],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
); // [12, 92, 65]
