/**
 * Repeats the provided string a specified number of times
 * 
 * @param {string} repeatString - String to be repeated. 
 * @param {number} repeatCount - Number of times to repeat.  
 * @returns {string} A repeated string
 */
function repeatStringNumTimes(repeatString, repeatCount) {

  let returnString = "";
  
  if (repeatCount <= 0) {
    return "";  // Fast fail if count less than or equal to 0
  }

  // Build the repeated string manually since String.repeat() is not allowed
  for (let i = 1; i <= repeatCount; i++) {
    returnString += repeatString;
  }
  return returnString;
}

// ---- Test calls (manual validation) ----
console.log(repeatStringNumTimes("*", 3));     // "***"
console.log(repeatStringNumTimes("abc", 3));   // "abcabcabc"
console.log(repeatStringNumTimes("abc", 4));   // "abcabcabcabc"
console.log(repeatStringNumTimes("*", 0));     // ""
console.log(repeatStringNumTimes("abc", -2));  // ""