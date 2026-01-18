/**
 * ============================================================================
 * PROBLEM: Find Duplicates in an Array
 * ============================================================================
 * 
 * DESCRIPTION:
 * Given an array of elements, determine if it contains duplicate values and
 * extract all duplicate elements from the array.
 * 
 * EXAMPLES:
 * Input:  [1, 2, 3, 1, 1, 1]
 * Output: containsDuplicates() => true
 *         findDuplicates() => [1]
 * 
 * Input:  [1, 2, 3, 4, 5]
 * Output: containsDuplicates() => false
 *         findDuplicates() => []
 * 
 * CONSTRAINTS:
 * - Array can contain any type of elements (numbers, strings, objects)
 * - For objects, comparison is by reference, not by value
 * - Empty array should return false/[]
 * 
 * FOLLOW-UP QUESTIONS:
 * Q1: What if we need to find duplicates in a sorted array?
 * A: Can use two-pointer technique with O(n) time and O(1) space
 * 
 * Q2: What if we need to count occurrences of each duplicate?
 * A: Use Map to store frequency counts
 * 
 * Q3: How to handle very large arrays that don't fit in memory?
 * A: Consider external sorting or streaming approach
 * ============================================================================
 */

/**
 * Checks if an array contains duplicate elements.
 *
 * @param {Array} arr - The array to check for duplicates.
 * @returns {boolean} - Returns `true` if duplicates are found, otherwise `false`.
 * 
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(n) - storing elements in Map
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
 * 
 * @Algorithm
 * 1. Keep track of elements we've seen in the seenElements array
 * 2. When we encounter an element that's already in seen, add it to duplicates (if it's not already there)
 * 3. Add each element to seenElements as we process it
 * 
 * Time Complexity: O(n²) - includes() is O(n) for each element
 * Space Complexity: O(n) - storing elements in arrays
 * 
 * Note: For better performance, use Set instead of Array for O(n) time complexity
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
