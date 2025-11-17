// Write a function to count the number of vowels in a string

/**
 * Counts the number of vowels in a given string.
 *
 * @param {string} str - The input string to analyze.
 * @returns {number} The number of vowels found in the input string.
 * @throws {TypeError} Throws an error if the input is not a string.
 */
function countVowels(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const temp = str.toLowerCase();

  for (const element of temp) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}




// Test cases
const testString = "Hello, World!";

console.log("Using countVowels:", countVowels(testString)); // Output: 3
console.log(countVowels("")); // Output: 0
console.log(countVowels("Hello")); // Output: 2
console.log(countVowels("World")); // Output: 1
console.log(countVowels("aeiou")); // Output: 5
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // Output: 5
console.log(countVowels("12345")); // Output: 0
 