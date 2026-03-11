/**
 * Translates a word into Pig Latin.
 *
 * If the word begins with a vowel, "way" is appended to the end.
 * If the word begins with one or more consonants, the leading
 * consonant sound is moved to the end and "ay" is appended.
 *
 * @param {string} inputString - The word to translate.
 * @returns {string} The Pig Latin translation.
 */
function translatePigLatin(inputString) {
  if (!inputString) {
    return '';
  }

  const vowelRegex = /^[aeiou]/i;
  const leadingConsonantClusterRegex = /^([^aeiou]+)(.*)$/i;

  if (vowelRegex.test(inputString)) {
    return inputString + 'way';
  }

  const match = inputString.match(leadingConsonantClusterRegex);

  if (!match) {
    return inputString + 'ay';
  }

  const [, consonantCluster, remainingLetters] = match;

  return remainingLetters + consonantCluster + 'ay';
}

// ---- Test calls (manual validation) ----

console.log(translatePigLatin('algorithm')); // "algorithmway"

console.log(translatePigLatin('glove')); // "oveglay"

console.log(translatePigLatin('schwartz')); // "artzschway"

console.log(translatePigLatin('eight')); // "eightway"

console.log(translatePigLatin('rhythm')); // "rhythmay"
