/**
 * Generates Fibonacci numbers up to a specified limit and returns the sum
 * of all odd Fibonacci numbers less than or equal to that limit.
 *
 * @param {number} limit - The upper bound for Fibonacci numbers to include.
 * @returns {number} The sum of all odd Fibonacci numbers within the limit.
 */
function sumFibs(limit) {
  let fibSequence = [0, 1];
  let nextFib = 0;
  let fibTotal = 0;

  for (let i = 2; nextFib <= limit; i++) {
    nextFib = fibSequence[i - 1] + fibSequence[i - 2];
    if (nextFib <= limit) {
      fibSequence.push(nextFib);
    }
  }
  if (fibSequence.length >= 2) {
    for (let a = 0; a < fibSequence.length; a++) {
      if (fibSequence[a] % 2 !== 0) {
        fibTotal += fibSequence[a];
      }
    }
  }

  return fibTotal;
}

// ---- Test calls (manual validation) ----
console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75025));
