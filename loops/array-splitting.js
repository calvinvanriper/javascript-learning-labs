/**
 * Splits an array into groups (chunks) of a specified size.
 * 
 * Example:
 * chunkArrayInGroups(["a","b","c","d"],2)
 * -> [["a","b",], ["c","d"]]
 * 
 * @param {Array} largeArray - The original array to split into smaller groups. 
 * @param {number} size - The desired size of each chunk. 
 * @returns {Array[]} A new array containing sub-arrays (chunks) of the given size.
 */
function chunkArrayInGroups(largeArray, size) {
  // This will hold the final list of chunks
  const result = [];

  for (let i = 0; i < largeArray.length; i += size) {
    // slice(start, end) returns a new array from index i up to (but not including) i + size
    // If there aren't enough elements left at the end, slice returns the remaining elements
    result.push(largeArray.slice(i, i+size));
  }

  // Return the new chunked array
  return result;
}

// ---- Test calls (manual validation) ----
console.log(JSON.stringify(chunkArrayInGroups(["a", "b", "c", "d"], 2)));         // [["a","b"],["c","d"]]
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)));           // [[0,1,2],[3,4,5]]
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)));           // [[0,1,2,3],[4,5]]
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)));        // [[0,1,2],[3,4,5],[6]]
console.log(JSON.stringify(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)));  // [[0,1,2,3],[4,5,6,7],[8]]