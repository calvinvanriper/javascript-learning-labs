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

  // Remove leading/trailing spaces and split the sentence into words
  let count = sentence.trim().split(" ");
  
  // Array to store the length of each word
  let maxNum = [];

  // Loop through each word in the sentence
  for(const word of count) {
    const len = word.length;

    // Store the word length in the array
    maxNum.push(len);
  }

  // Find the largest number in the array of word lengths
  const max = Math.max(...maxNum);

  // Return the length of the longest word
  return max;
}

/* --------------------------------------------------
   Test cases
-------------------------------------------------- */

const sentence1 = "The quick brown fox jumped over the lazy dog";
const sentence2 = "May the force be with you";
const sentence3 = "Google do a barrel roll";
const sentence4 = "What is the average airspeed velocity of an unladen swallow";
const sentence5 = "What if we try a superlong word such as otorhinolaryngology";

console.log(`Test Sentence 1: ${sentence1}`);
console.log("Longest Word: " + findLongestWordLength(sentence1));
// Expected output: 6 (jumped)

console.log("--------------------------------------------------");

console.log(`Test Sentence 2: ${sentence2}`);
console.log("Longest Word: " + findLongestWordLength(sentence2));
// Expected output: 5 (force)

console.log("--------------------------------------------------");

console.log(`Test Sentence 3: ${sentence3}`);
console.log("Longest Word: " + findLongestWordLength(sentence3));
// Expected output: 6 (Google or barrel)

console.log("--------------------------------------------------");

console.log(`Test Sentence 4: ${sentence4}`);
console.log("Longest Word: " + findLongestWordLength(sentence4));
// Expected output: 8 (airspeed or velocity)

console.log("--------------------------------------------------");

console.log(`Test Sentence 5: ${sentence5}`);
console.log("Longest Word: " + findLongestWordLength(sentence5));
// Expected output: 19 (otorhinolaryngology)

console.log("--------------------------------------------------");