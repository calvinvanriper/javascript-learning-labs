/**
 * Finds the smallest common multiple that is evenly divisible
 * by every number within the inclusive range defined by two numbers.
 *
 * @param {number[]} arr - Array containing two integers that define the range.
 * @returns {number} The least common multiple of all numbers in the range.
 */
function smallestCommons(arr) {
  // Ensure numbers are processed in ascending order to build the range correctly
  const [min, max] = arr.slice().sort((a, b) => a - b);

  // Computes the greatest common divisor using Euclid's algorithm
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Uses GCD to efficiently compute the least common multiple
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Iteratively builds the LCM across the entire range
  let current = min;
  for (let i = min + 1; i <= max; i++) {
    current = lcm(current, i);
  }

  return current;
}

// ---- Test calls (manual validation) ----
console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820
