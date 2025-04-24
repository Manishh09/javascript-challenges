// Write a function to count the number of vowels in a string: using filter


/**
 * Counts the number of vowels in a given string using the Array `filter` method.
 *
 * @param {string} str - The input string to count vowels from.
 * @returns {number} The number of vowels in the input string. Returns 0 for an empty string.
 */
function countVowelsUsingFilter(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Early return for empty strings
    if (!str) return 0;
    // Use filter to count vowels
    // Convert string to lowercase and split into characters
    // Filter out non-vowel characters
    // Return the length of the filtered array
    return [...str.toLowerCase()].filter(char => vowels.includes(char)).length;
}