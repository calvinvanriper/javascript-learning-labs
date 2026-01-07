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
  // Apply Fahrenheit -> Celsius
  const tempC = (tempF - 32) * (5/9);
  return tempC;
}

// Test calls (manual validation)
const temp1 = convertFtoC(32);
const temp2 = convertFtoC(-22);
const temp3 = convertFtoC(14);
const temp4 = convertFtoC(68);
const temp5 = convertFtoC(86);
console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp4);
console.log(temp5);
