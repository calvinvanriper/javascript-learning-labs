/**
 * Convert a temperature from Fahrenheit to Celsius.
 *
 * Formula:
 *   C = (F - 32) x (5/9)
 *
 * @param {number} tempF - Temperature in Fahrenheit
 * @returns {number} Temperature converted to Celsius
 */

function convertFtoC(tempF) {
  const tempC = (tempF - 32) * (5/9);
  return tempC;
}

// ---- Test calls (manual validation) ----
console.log(convertFtoC(32));   // 0
console.log(convertFtoC(-22));  // -30
console.log(convertFtoC(14));   // -10
console.log(convertFtoC(68));   // 20
console.log(convertFtoC(86));   // 30