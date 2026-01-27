/**
 * Checks whether every character in the second string exists in the first string (case-insensitive)
 * 
 * Accepts an array of two strings [source, text].
 * Returns true if each character in the test string is found somewhere in the source string.
 * 
 * @param {[string, string]} array - Two strings to compare: [sourceString, testString]
 * @returns {boolean} True if all characters of the second string exist in the first, otherwise false.
 */
function mutation(array) {
  const source = array[0];
  const test = array[1];

  // Normalize case to ensure comparison rules are consistent
  const sourceChars = source.toLowerCase().split("");
  const testChars = test.toLowerCase().split("");
  
  // Fail fast: stop as soon as required character is missing
  for (const char of testChars) {
    if (!sourceChars.includes(char)) {
      return false;
    }
  }
  return true;
}

// ---- Test calls (manual validation) ----
console.log(mutation(["hello", "hey"]));                         // false
console.log(mutation(["hello", "Hello"]));                       // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));  // true
console.log(mutation(["Mary", "Army"]));                         // true
console.log(mutation(["Noel", "Ole"]));                          // true