/**
 * Calculates the sum of all prime numbers up to and including a given limit.
 *
 * @param {number} limit - Upper bound to check for prime numbers.
 * @returns {number} Sum of all prime numbers less than or equal to limit.
 */
function sumPrimes(limit) {
  let primesArray = [];

  if (limit < 2) {
    return 0;
  }

  // Determines whether a number is prime using square root optimization
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primesArray.push(i);
    }
  }

  return primesArray.reduce((total, current) => total + current);
}

// ---- Test calls (manual validation) ----
console.log(sumPrimes(10)); // 17
console.log(sumPrimes(5)); // 10
console.log(sumPrimes(2)); // 2
console.log(sumPrimes(1)); // 0
console.log(sumPrimes(20)); // 77
