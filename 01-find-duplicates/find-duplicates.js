/**
 * Checks if an array contains duplicate elements.
 *
 * @param {Array} arr - The array to check for duplicates.
 * @returns {boolean} - Returns `true` if duplicates are found, otherwise `false`.
 */
function containsDuplicates(arr) {
  // using map

  const map = new Map();

  for (const element of arr) {
    if (map.has(element)) {
      return true;
    }
    map.set(element, true);
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1, 1, 1]));

// write a function to retrieve duplicate elements from an array

/**
 * Finds and returns an array of duplicate elements in the given array.
 *
 * @param {Array} arr - The array to search for duplicates.
 * @returns {Array} - An array containing the duplicate elements.
 * @Algorithm
 * 1. Keep track of elements we've seen in the seenElements array
 * 2. When we encounter an element that's already in seen, add it to duplicates (if it's not already there)
 * 3. Add each element to seenElements as we process it
 */
function findDuplicates(arr) {
  const seenElements = [];
  const duplicates = [];

  for (element of arr) {
    if (seenElements.includes(element) && !duplicates.includes(element)) {
      duplicates.push(element);
    }

    seenElements.push(element);
  }
  return { duplicates, seenElements };
}

console.log("findDuplicates", findDuplicates([1, 2, 3, 1, 1, 1]));
