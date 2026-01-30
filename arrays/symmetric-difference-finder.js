/**
 * Returns the symmetric difference between two arrays.
 * Values that appear in only one of the arrays are included in the result.
 *
 * @param {Array<*>} firstArray - First array to be compared.
 * @param {Array<*>} secondArray - Second array to be compared.
 * @returns {Array<*>} Array of values unique to each input array.
 */
function diffArray(firstArray, secondArray) {
  const uniqueArr1 = firstArray.filter((item) => !secondArray.includes(item));
  const uniqueArr2 = secondArray.filter((item) => !firstArray.includes(item));

  return [...uniqueArr1, ...uniqueArr2];
}

// ---- Test calls (manual validation) ----
console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
); // ["pink wool"]
console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  )
); // []
console.log(diffArray(['pen', 'book'], ['book', 'pencil', 'notebook'])); // ["pen", "pencil", "notebook"]
console.log(diffArray(['apple', 'banana'], [])); // ["apple", "banana"]
console.log(diffArray([], [])); // []
