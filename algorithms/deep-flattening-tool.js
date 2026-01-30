/**
 * Flattens a nested array of any depth into a single-level array
 *
 * @param {Array<*>} arr - Array that may contain nested arrays.
 * @returns {Array<*>} A new array with all values flattened into one level.
 */
function steamrollArray(arr) {
  let result = [];

  // Recursively walks the structure to extract non-array values
  function arrayWalk(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        arrayWalk(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  arrayWalk(arr);
  return result;
}

// ---- Test calls (manual validation) ----
console.log(steamrollArray([[['a']], [['b']]])); // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); //[1, {}, 3, 4]
console.log(
  steamrollArray([
    1,
    [2, [3, [4, []]]],
    { name: 'Calvin', age: 41 },
    [[[[5]]]],
    'hello',
    [true, [false, [null]]],
    [],
    [[[{ a: 1 }]]],
  ])
);
