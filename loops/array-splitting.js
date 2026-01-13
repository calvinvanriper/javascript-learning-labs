/**
 * Splits an array into groups (chunks) of a specified size.
 * 
 * Example:
 * chunkArrayInGroups(["a","b","c","d"],2)
 * -> [["a","b",]["c","d"]]
 * 
 * @param {Array} largeArray - The original array to split into smaller groups. 
 * @param {number} size - The desired size of each chunk. 
 * @returns {Array[]} A new array containing sub-arrays (chunks) of the given size.
 */
function chunkArrayInGroups(largeArray, size) {
  // This will hold the final list of chunks
  const result = [];

  // Step through the array in increments of "size"
  for (let i = 0; i < largeArray.length; i += size) {
    // slice(start, end) returns a new array from index i up to (but not including) i + size
    // If there aren't enough elements left at the end, slice returns the remaining elements
    result.push(largeArray.slice(i, i+size));
  }

  // Return the new chunked array
  return result;
}

/* --------------------------------------------------
   Test cases 
-------------------------------------------------- */

console.log("Splitting Arrays into Smaller Arrays");

let size = 2;
let array = ["a", "b", "c", "d"];
let arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 1 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [["a", "b"], ["c", "d"]]

size = 3;
array = [0, 1, 2, 3, 4, 5];
arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 2 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [[0, 1, 2], [3, 4, 5]] 

size = 2;
array = [0, 1, 2, 3, 4, 5];
arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 3 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [[0, 1], [2, 3], [4, 5]]

size = 4;
array = [0, 1, 2, 3, 4, 5];
arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 4 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [[0, 1, 2, 3], [4, 5]]

size = 3;
array = [0, 1, 2, 3, 4, 5, 6];
arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 5 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [[0, 1, 2], [3, 4, 5], [6]]

size = 4;
array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 6 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

size = 2;
array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
arrayResults = chunkArrayInGroups(array, size);
console.log("--------------- Test Data Number 7 ---------------");
console.log(`Original Array: ${JSON.stringify(array)}`);
console.log(`New Array Size: ${size}`);
console.log(`Array Split Results: ${JSON.stringify(arrayResults)}`);  // Expected: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]