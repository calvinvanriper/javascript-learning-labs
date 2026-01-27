/**
 * Function accepts an array and returns an array stripped of all falsy values.
 *
 * @param {Array<*>} guestsArray - Source array of random values.
 * @returns {Array<*>} A new array with all falsy values removed.
 */
function bouncer(guestsArray) {
  let filteredArray = [];

  for (let i = 0; i < guestsArray.length; i++) {
    if (guestsArray[i]) {
      filteredArray.push(guestsArray[i]);
    }
  }
  return filteredArray;
}

// ---- Test calls (manual validation) ----
console.log(bouncer([7, 'ate', '', false, 9])); // [7, "ate", 9]
console.log(bouncer(['a', 'b', 'c'])); // ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ''])); // []
console.log(bouncer([null, NaN, 1, 2, undefined])); // [1, 2]
console.log(bouncer([])); // []
