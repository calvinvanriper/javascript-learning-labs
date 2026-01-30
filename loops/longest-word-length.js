/**
 * Finds the length of the longest word in a sentence.
 *
 * The sentence is trimmed to remove extra whitespace,
 * split into individual words, and each word's length
 * is compared to determine the maximum length.
 *
 * @param {string} sentence - The input sentence to analyze.
 * @returns {number} The length of the longest word in the sentence.
 */
function findLongestWordLength(sentence) {
  let count = sentence.trim().split(' ');
  let maxNum = [];

  for (const word of count) {
    const len = word.length;

    maxNum.push(len);
  }

  const max = Math.max(...maxNum);

  return max;
}

// ---- Test calls (manual validation) ----
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog')); // 6
console.log(findLongestWordLength('May the force be with you')); // 5
console.log(findLongestWordLength('Google do a barrel roll')); // 6
console.log(findLongestWordLength('What is the average airspeed velocity of an unladen swallow')); // 8
console.log(findLongestWordLength('What if we try a superlong word such as otorhinolaryngology')); // 19
