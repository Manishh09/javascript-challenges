
// Flatten an array using the spread operator and push()
function flattenArrayUsingSpread(arr) {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...flattenArrayUsingSpread(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

console.log(flattenArrayUsingSpread([1, [2, 3], [4, [5, 6, [7, 8]]], 9, [10]]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * How it works:
 *
 *    The spread operator ... expands an array into individual elements
 *    push() adds elements to the existing array (mutates it)
 *    No new array is created.
 *
 * Performance advantage:
 *
 *    Modifies the existing array instead of creating new ones.
 *    Much faster for large or deeply nested arrays.
 *    Time complexity is O(n).
 */
