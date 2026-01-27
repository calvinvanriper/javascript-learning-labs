/**
 * Finds the first missing letter from a case-insensitive, alphabetical string of letters
 * 
 * @param {string} sourceString - The input string to analyze (may contain uppercase or lowercase). 
 * @returns {string \ undefined} The first missing letter, or undefined if no letters are missing.
 */
function fearNotLetter(sourceString) {
  const masterString = "abcdefghijklmnopqrstuvwxyz";

  // Normalize to lowercase so indexing and comparisons work consistently
  sourceString = sourceString.toLowerCase();

  // Determine where in the alphabet the input starts
  const startPoint = masterString.indexOf(sourceString[0]);

  // Compare each character in the input to the expected alphabet character
  for (let i = 0; i < sourceString.length; i++) {
    if (masterString[i + startPoint] === sourceString[i]) {
      continue;
    } else {
      return masterString[i + startPoint];
    }
  }

  return undefined;
}

// ---- Test calls (manual validation) ----
console.log(fearNotLetter("abce"));            // "d"
console.log(fearNotLetter("abcdefghjklmno"));  // "i"
console.log(fearNotLetter("stvwx"));           // "u"
console.log(fearNotLetter("abc"));             // undefined