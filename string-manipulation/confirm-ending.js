/*
 * Check whether a string ends with a given target string.
 * (Implemented without using String.prototype.endsWith)
 *
 * @param {string} sourceString - The full string to evaluate
 * @param {string} endString - The string to check for at the end
 * @returns {boolean} True if sourceString ends with endString, otherwise false
 */

function confirmEnding(sourceString, endString) {
  // Extract the ending portion of the source string
  const sourceEndString = sourceString.slice(-endString.length);

  // Compare the extracted substring to the target ending
  return sourceEndString === endString;
  
}

// ---- Test calls ----
const sourceString1 = "Bastian";
const endString1 = "n";
const sourceString2 = "Congratulation";
const endString2 = "on";
const sourceString3 = "Connor";
const endString3 = "n";
const sourceString4 = "Walking on water and developing software from a specification are easy if both are frozen";
const endString4 = "specification";
const sourceString5 = "He has to give me a new name";
const endString5 = "name";
const sourceString6 = "Open sesame";
const endString6 = "same";
const sourceString7 = "Open sesame";
const endString7 = "sage";
const sourceString8 = "Open sesame";
const endString8 = "game";
const sourceString9 = "If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing";
const endString9 = "mountain";
const sourceString10 = "Abstraction";
const endString10 = "action";

console.log(confirmEnding(sourceString1,endString1));    // true
console.log(confirmEnding(sourceString2,endString2));    // true
console.log(confirmEnding(sourceString3,endString3));    // false
console.log(confirmEnding(sourceString4,endString4));    // false
console.log(confirmEnding(sourceString5,endString5));    // true
console.log(confirmEnding(sourceString6,endString6));    // true
console.log(confirmEnding(sourceString7,endString7));    // false
console.log(confirmEnding(sourceString8,endString8));    // false
console.log(confirmEnding(sourceString9,endString9));    // false
console.log(confirmEnding(sourceString10,endString10));  // true
