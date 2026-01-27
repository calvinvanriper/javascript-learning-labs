/**
 * A function to take normalize an input string and return it
 * with every word of the string capitalized.
 *
 * @param {string} originalString - Input string to convert to title case.
 * @returns {string} A string of capatilized words.
 */
function titleCase(originalString) {
  // normalize string data before performing title case conversion
  originalString = originalString.toLowerCase();

  const stringArray = originalString.split(' ');
  let newStringArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > 0) {
      newStringArray.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));
    }
  }
  return newStringArray.join(' ');
}

// ---- Test calls (manual validation) ----
console.log(titleCase('a little teapot')); // A Little Teapot
console.log(titleCase('sHoRt AnD sToUt')); // Short And Stout
console.log(titleCase('HERE IS MY HANDLE')); // Here Is My Handle
console.log(titleCase('Here Is My Spout')); // Here Is My Spout
