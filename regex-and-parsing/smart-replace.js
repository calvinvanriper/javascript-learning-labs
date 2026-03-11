/**
 * Replaces a word in a sentence while preserving the original
 * word's capitalization style.
 *
 * If the word being replaced begins with an uppercase letter,
 * the replacement word is capitalized to match. Otherwise the
 * replacement word remains lowercase.
 *
 * @param {string} str - The original sentence.
 * @param {string} before - The word to replace.
 * @param {string} after - The replacement word.
 * @returns {string} The updated sentence with preserved casing.
 */
function myReplace(str, before, after) {
  if (!before || !after) {
    return str;
  }

  // Adjust replacement word casing to match the original word
  after =
    before[0] === before[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);

  return str.replace(before, after);
}

// ---- Test calls (manual validation) ----

console.log(myReplace('Let us go to the store', 'store', 'mall')); // "Let us go to the mall"

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')); // "He is Sitting on the couch"

console.log(myReplace('I think we should look up there', 'up', 'Down')); // "I think we should look down there"

console.log(myReplace('This has a spellngi error', 'spellngi', 'spelling')); // "This has a spelling error"

console.log(myReplace('His name is Tom', 'Tom', 'john')); // "His name is John"
