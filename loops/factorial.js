/**
 * Calculates the factorial of a given number
 * 
 * Factorial definition:
 * n! = 1 x 2 x 3 x ... x n
 * 
 * This function:
 * 1) Builds an array of numbers from 1 to n
 * 2) Multiplies them together to get the factorial
 * 
 * @param {number} number - The number to calculate the factorial for. 
 * @returns {number} The factorial result. 
 */
function factorialCalculator(number) {
  let result = 1;     // Holds the running multiplication result
  let counter = 1;    // Used to build the list of numbers from 1 to n
  let numArray = [];  // Stores numbers from 1 up to the input number

  // Build the array [1, 2, 3, ..., number]
  while (counter <= number) {
    numArray.push(counter);
    counter++;
  }

  // Multiply all numbers in the array together
  for (const num of numArray) {
    result = result * num;
  }

  return result;
}

/* --------------------------------------------------
   Test cases (3–5 different results)
-------------------------------------------------- */

console.log("Factorial Tests");
console.log("--------------------------------------------------");

let num = 0;
let factorial = factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`); // Expected: 1

console.log("--------------------------------------------------");

num = 1;
factorial = factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`); // Expected: 1

console.log("--------------------------------------------------");

num = 5;
factorial = factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`); // Expected: 120

console.log("--------------------------------------------------");

num = 7;
factorial = factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`); // Expected: 5040

console.log("--------------------------------------------------");

num = 10;
factorial = factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`); // Expected: 3628800