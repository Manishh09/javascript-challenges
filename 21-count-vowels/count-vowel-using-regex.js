// Write a function to count the number of vowels in a string: using regex

/**
 * Counts the number of vowels in a given string using a regular expression.
 *
 * @param {string} str - The input string to count vowels in.
 * @returns {number} The number of vowels (a, e, i, o, u) in the input string.
 *                   Returns 0 if the input string is empty or null.
 */
function countVowelsUsingRegex(str) {
  // Early return for empty strings
  if (!str) return 0;

  // Use a regular expression instead of array iteration
  return (str.toLowerCase().match(/[aeiou]/g) || []).length;
}

// Test
const testString = "Hello, World!";
console.log("Using countVowelsUsingRegex:", countVowelsUsingRegex(testString)); // Output: 3
