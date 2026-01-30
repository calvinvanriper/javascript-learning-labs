/**
 * Filters an array of objects, returning only those that contain
 * all key/value pairs found in the source object.
 *
 * @param {Array<Object>} objectArray - Array of objects to search.
 * @param {Object} objectSource - Object containing required key/value pairs.
 * @returns {Array<Object>} Array of objects that match all properties in objectSource.
 */
function whatIsInAName(objectArray, objectSource) {
  const keys = Object.keys(objectSource);

  return objectArray.filter((item) => keys.every((key) => item[key] === objectSource[key]));
}

// ---- Test calls (manual validation) ----
console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
); // [{ first: "Tybalt", last: "Capulet" }]
console.log(whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 })); // [{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}]
console.log(
  whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
    apple: 1,
    bat: 2,
  })
); // [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]
console.log(
  whatIsInAName([{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }, { bat: 2 }], {
    apple: 1,
    bat: 2,
  })
); // [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]
console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })); // []
