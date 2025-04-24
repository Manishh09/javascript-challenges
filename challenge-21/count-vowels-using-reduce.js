// Write a function to count the number of vowels in a string: using reduce


/**
 * Counts the number of vowels in a given string using the Array reduce method.
 *
 * @param {string} str - The input string to count vowels in.
 * @returns {number} The total number of vowels in the input string.
 * @throws {TypeError} Throws an error if the input is not a string.
 */
function countVowelsUsingReduce(str) {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string");
    }
  
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    return [...str.toLowerCase()].reduce(
      (count, char) => count + vowels.has(char),
      0
    );
  }

  // Test
  const testString = "Hello, World!";
  console.log("Using countVowelsUsingReduce:", countVowelsUsingReduce(testString)); // Output: 3
