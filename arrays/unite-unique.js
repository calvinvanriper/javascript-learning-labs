/**
 * Merges multiple arrays into a single array containing only unique values,
 * preserving the order of first appearance across all input arrays.
 *
 * @param {...Array<*>} arrays - Source arrays to merge.
 * @returns {Array<*>} A new array of unique values in insertion order.
 */
function uniteUnique(...arrays) {
  let uniqueArray = [];
  for (let i = 0; i < arrays.length; i++) {
    let tempArray = [...arrays[i]];

    for (let a = 0; a < tempArray.length; a++) {
      if (!uniqueArray.includes(tempArray[a])) {
        uniqueArray.push(tempArray[a]);
      } else {
        continue;
      }
    }
  }

  return uniqueArray;
}

// ---- Test calls (manual validation) ----
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // [1, 3, 2, 5, 4, 6]
console.log(
  uniteUnique(
    ['a', 1, true, '*'],
    ['b', 2, false, '&'],
    ['c', 3, NaN, '|'],
    [3, 'b', NaN, '*', 'string']
  )
); // ['a', 1, true, '*', 'b', 2, false, '&', 'c', 3, NaN, '|', 'string']
