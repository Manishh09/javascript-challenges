// Implement a javascript function that flattens a nested array into a single-dimensional array.
// The function should handle any level of nesting.
// The function should not use any built-in methods like flat or reduce.

function flattenArray(arr) {
  let res = [];
  // Using for loop to iterate through the array
  for (const val of arr) {
    if (Array.isArray(val) && val.length) {
      // If the value is an array, recursively flatten it
      res = res.concat(flattenArray(val));
    } else {
      // If the value is not an array, push it to the result array
      res.push(val);
    }
  }
  return res;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6, [7, 8]]], 9, [10]]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * How it works:
 *   concat() creates a new array by combining the original array with the argument
 *   It doesn't modify the original array (immutable)
 *   Returns a brand new array
 *
 * Performance issue:
 *   Every call creates a new array and copies all elements
 *   If you do this repeatedly, you're copying the growing array over and over
 *   Time complexity becomes O(n²) for deeply nested arrays
 */


     
