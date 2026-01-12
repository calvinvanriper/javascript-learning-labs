/**
 * Checks whether every character in the second string exists in the first string (case-insensitive)
 * 
 * Accepts an array of two strings [source, text].
 * Returns true if each character in the test string is found somewhere in the source string.
 * 
 * @param {[string, string]} array - Two strings to compare: [sourceString, testString]
 * @returns {boolean} True if all characters of the second string exist in the first, otherwise false.
 */
function mutation(array) {
  const element1 = array[0];
  const element2 = array[1];

  // Convert both strings to lowercase so the comparison is case-insensitive
  const element1Array = element1.toLowerCase().split("");
  const element2Array = element2.toLowerCase().split("");
  
  // Check each character from element2 to ensure it exists in element1
  for (const x of element2Array) {
    if (element1Array.includes(x)) {
      continue;
    } else {

      // Fail fast: as soon as one character is missing, the mutation fails
      return false;
    }
  }
  return true;
}

/* --------------------------------------------------
   Test cases (3–5 different results)
-------------------------------------------------- */

console.log("Mutations Tests");
console.log("--------------------------------------------------");

let stringArray = ["hello", "hey"];
let stringComparison = mutation(stringArray);
console.log(`Test 1: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: False

console.log("--------------------------------------------------");

stringArray = ["hello", "Hello"];
stringComparison = mutation(stringArray);
console.log(`Test 2: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

stringArray = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
stringComparison = mutation(stringArray);
console.log(`Test 3: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

stringArray = ["Mary", "Army"];
stringComparison = mutation(stringArray);
console.log(`Test 4: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

stringArray = ["Mary", "Aarmy"];
stringComparison = mutation(stringArray);
console.log(`Test 5: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

stringArray = ["Alien", "line"];
stringComparison = mutation(stringArray);
console.log(`Test 6: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

stringArray = ["floor", "for"];
stringComparison = mutation(stringArray);
console.log(`Test 7: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

stringArray = ["hello", "neo"];
stringComparison = mutation(stringArray);
console.log(`Test 8: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: False

console.log("--------------------------------------------------");

stringArray = ["voodoo", "no"];
stringComparison = mutation(stringArray);
console.log(`Test 9: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: False

console.log("--------------------------------------------------");

stringArray = ["ate", "date"];
stringComparison = mutation(stringArray);
console.log(`Test 10: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: False

console.log("--------------------------------------------------");

stringArray = ["Tiger", "Zebra"];
stringComparison = mutation(stringArray);
console.log(`Test 11: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: False

console.log("--------------------------------------------------");

stringArray = ["Noel", "Ole"];
stringComparison = mutation(stringArray);
console.log(`Test 12: Is \'${stringArray[1]}\' included in \'${stringArray[0]}\' ==> ${stringComparison}`); // Expected result: True

console.log("--------------------------------------------------");

