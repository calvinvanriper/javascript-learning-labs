/**
 * Checks whether all objects in a collection have a truthy value
 * for a specified property.
 *
 * @param {Array<Object>} collection - Array of objects to evaluate
 * @param {string} pre - Property name to test on each object
 * @returns {boolean} True if every object has a truthy value for the property.
 */
function truthCheck(collection, pre) {
  // Uses Array.every to ensure all objects satisfy the truthiness condition
  return collection.every((obj) => obj[pre]);
}

// ---- Test calls (manual validation) ----
console.log(truthCheck([{ a: 'hello' }, { a: 42 }, { a: [] }, { a: {} }], 'a')); // true
console.log(truthCheck([{ score: 10 }, { score: 0 }, { score: 5 }], 'score')); // false
console.log(truthCheck([{ x: undefined }, { x: 1 }], 'x')); // false
console.log(truthCheck([{ active: true }, {}, { active: true }], 'active')); // false
console.log(truthCheck([{ flag: 'false' }, { flag: 'true' }], 'flag')); // true
