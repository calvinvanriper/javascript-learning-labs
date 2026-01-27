/**
 * Convert a temperature from Celsius to Fahrenheit.
 *
 * Formula:
 *   F = C x (9/5) + 32
 *
 * @param {number} tempC - Temperature in Celsius
 * @returns {number} Temperature converted to Fahrenheit
 */
function convertCtoF(tempC) {
  const tempF = tempC * (9 / 5) + 32;
  return tempF;
}

// ---- Test calls (manual validation) ----
console.log(convertCtoF(0)); // 32
console.log(convertCtoF(-30)); // -22
console.log(convertCtoF(-10)); // 14
console.log(convertCtoF(20)); // 68
console.log(convertCtoF(30)); // 86
