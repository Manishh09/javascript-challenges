
/**
 * Checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence 
 * that reads the same backward as forward, ignoring case and non-alphanumeric characters.
 *
 * @param {string} input - The string to check for palindrome properties.
 * @returns {boolean} - Returns `true` if the input string is a palindrome, otherwise `false`.
 * @throws {Error} - Throws an error if the input is not a string.
 */
function isStringPalindrome(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }
    const regex = /[\W_]/g;
    const cleanedInput = input
        .toLowerCase()
        .replaceAll(regex, ''); // Normalize case and remove non-alphanumeric characters

    return cleanedInput && cleanedInput === cleanedInput.split('').reverse().join('');
}

console.log(isStringPalindrome('nurses run')); // true
console.log(isStringPalindrome('madam')); // true


 
