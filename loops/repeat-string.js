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

/* --------------------------------------------------
   Test cases
-------------------------------------------------- */

let testString = "*"
let testCount = 3
let repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`);  // Expected: "***"
console.log("--------------------------------------------------");

testString = "abc"
testCount = 3
repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`);  // Expected: "abcabcabc"
console.log("--------------------------------------------------");

testString = "abc"
testCount = 4
repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`);  // Expected: "abcabcabcabc"
console.log("--------------------------------------------------");

testString = "abc"
testCount = 1
repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`);  // Expected: "abc"
console.log("--------------------------------------------------");

testString = "*"
testCount = 8
repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`);  // Expected: "********"
console.log("--------------------------------------------------");

testString = "abc"
testCount = -2
repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`); // Expected: ""
console.log("--------------------------------------------------");

testString = "abc"
testCount = 0
repeatResult = repeatStringNumTimes(testString,testCount);
console.log(`Test String: ${testString} repeated ${testCount} times => ${JSON.stringify(repeatResult)}`);  // Expected: ""
console.log("--------------------------------------------------");