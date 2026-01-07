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
  // Apply Celsius -> Fahrenheit conversion formula
  const tempF = tempC * (9/5) + 32;
  return tempF;
}

// Test calls (manual validation)
const temp1 = convertCtoF(0);
const temp2 = convertCtoF(-30);
const temp3 = convertCtoF(-10);
const temp4 = convertCtoF(20);
const temp5 = convertCtoF(30);
console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp4);
console.log(temp5);
