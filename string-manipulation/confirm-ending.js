/**
 * Check whether a string ends with a given target string.
 * (Implemented without using String.prototype.endsWith)
 *
 * @param {string} sourceString - The full string to evaluate
 * @param {string} endString - The string to check for at the end
 * @returns {boolean} True if sourceString ends with endString, otherwise false
 */

function confirmEnding(sourceString, endString) {
  // Extract the ending portion of the source string
  const sourceEndString = sourceString.slice(-endString.length);

  // Compare the extracted substring to the target ending
  return sourceEndString === endString;
}

// ---- Test calls (manual validation) ----
console.log(confirmEnding('Bastian', 'n')); // true
console.log(confirmEnding('Bastian', 'on')); // false
console.log(confirmEnding('Walking on water is easy if frozen', 'water')); // false
console.log(confirmEnding('Open sesame', 'same')); // true
console.log(confirmEnding('Open sesame', 'sage')); // false
