/**
 * Converts a string into spinal-case format.
 *
 * Spinal case is a lowercase string where words are separated by
 * hyphens. This function normalizes different word separators such
 * as spaces, underscores, and camelCase boundaries before converting
 * the result to lowercase spinal-case.
 *
 * @param {string} inputString - The string to convert.
 * @returns {string} The spinal-case formatted string.
 */
function spinalCase(inputString) {
  const camelCaseRegex = /([a-z])([A-Z])/g;
  const separatorRegex = /[ _]+/g;

  return inputString.replace(camelCaseRegex, '$1 $2').replace(separatorRegex, '-').toLowerCase();
}

// ---- Test calls (manual validation) ----

console.log(spinalCase('This Is Spinal Tap')); // "this-is-spinal-tap"

console.log(spinalCase('thisIsSpinalTap')); // "this-is-spinal-tap"

console.log(spinalCase('The_Andy_Griffith_Show')); // "the-andy-griffith-show"

console.log(spinalCase('Teletubbies say Eh-oh')); // "teletubbies-say-eh-oh"

console.log(spinalCase('AllThe-small Things')); // "all-the-small-things"
