/**
 * Reverses a given string without using built-in array reversal methods.
 *
 * @param {string} input - The string to reverse.
 * @returns {string} A new string with characters in reverse order.
 *
 * @example
 * reverseString("hello");
 * // → "olleh"
 */
function reverseString(input) {
  let reversed = '';

  // Iterate from the end of the string to the beginning,
  // building a new string character by character.
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }

  return reversed;
}

// ---- Test calls (manual validation) ----
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('JavaScript')); // "tpircSavaJ"
console.log(reverseString('A-')); // "-A"
console.log(reverseString('')); // ""
console.log(reverseString('12345')); // "54321"
