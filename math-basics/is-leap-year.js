/**
 * Determine whether a given year is a leap year.
 *
 * Rules:
 * - Every year divisible by 4 is a leap year,
 *   except years that are divisible by 100,
 *   unless they are also dividible by 400.
 *
 * @param {number} year - Full year value (e.g., 2024)
 * @returns {string} Message describing whether it is a leap year
 */
function isLeapYear(year) {
  if(year%4 == 0) {
    if (year%400 == 0) {
      return `${year} is a leap year.`;
    } else if (year%100 == 0) {
      return `${year} is not a leap year.`;
    } else {
      return `${year} is a leap year.`;
    }
  } else {
    return `${year} is not a leap year.`;
  }
}

// Test calls (manual validation)
console.log(isLeapYear(1920)); // leap
console.log(isLeapYear(1900)); // not leap
console.log(isLeapYear(1600)); // leap
console.log(isLeapYear(1995)); // not leap
console.log(isLeapYear(2024)); // leap
