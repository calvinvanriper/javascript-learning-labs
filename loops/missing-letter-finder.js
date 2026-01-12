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

  // If we never found a mismatch, nothing is missing
  return undefined;
}

/* --------------------------------------------------
   Test cases
-------------------------------------------------- */

let testLetters = "abce";
let missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 1: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`);  // Expected: d

console.log("--------------------------------------------------");

testLetters = "abcdefghjklmno";
missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 2: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`); // Expected: i

console.log("--------------------------------------------------");

testLetters = "stvwx";
missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 3: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`);  // Expected: u

console.log("--------------------------------------------------");

testLetters = "bcdf";
missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 4: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`);  // Expected: e

console.log("--------------------------------------------------");

testLetters = "abcdefghijklmnopqrstuvwxyz";
missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 5: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`);  // Expected: undefined

console.log("--------------------------------------------------");

testLetters = "EFghIJkmnop";
missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 6: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`);  // Expected: l

console.log("--------------------------------------------------");

testLetters = "a";
missingLetter = fearNotLetter(testLetters);
console.log(`Test Letters 7: ${testLetters}`);
console.log(`The missing letter is... ${missingLetter}`);  // Expected: undefined

console.log("--------------------------------------------------");