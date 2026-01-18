/**
 * ============================================================================
 * PROBLEM: Find the Longest Word in a Sentence
 * ============================================================================
 * 
 * DESCRIPTION:
 * Given a sentence (string), find and return the longest word. If multiple
 * words have the same maximum length, return the first one encountered.
 * 
 * EXAMPLES:
 * Input:  "Hello, Javascript developers"
 * Output: "developers"
 * 
 * Input:  "The quick brown fox"
 * Output: "quick" (first word with length 5)
 * 
 * Input:  ""
 * Output: "Provide input as a string type"
 * 
 * CONSTRAINTS:
 * - Input must be a string
 * - Words are separated by spaces
 * - Punctuation is included in word length
 * - Empty strings return error message
 * 
 * FOLLOW-UP QUESTIONS:
 * Q1: What if punctuation should be excluded?
 * A: Use regex to remove punctuation before comparison
 * 
 * Q2: What if multiple words have same max length?
 * A: Current implementation returns first occurrence
 * 
 * Q3: How to handle multiple spaces between words?
 * A: split(' ') may create empty strings, use split(/\s+/) or filter
 * 
 * Time Complexity: O(n) where n is number of characters
 * Space Complexity: O(w) where w is number of words (split array)
 * ============================================================================
 */

 

// E.g: "Hello , Javascript developers"

// Output: developers

/**
 * Finds the longest word in a given sentence.
 *
 * @param {string} sentence - The sentence from which to find the longest word.
 * @returns {string} The longest word in the sentence. If the input is not a string, returns "Provide input as a string type".
 */
function findLongestWord( sentence )  {

    // check input is of type string

    if((typeof sentence === 'string') && sentence.length){

        // split the sentence into words
        const words = sentence.split(' ');

        // store a temp variable
        let longestWord = '';

        for (const word of words) {
            
            // check word in array is greater than longest word and store word in temp variable
            // this way, every time the `longestWord` value replaces with `word` which is greater than the previously stored value
            if(word.length > longestWord.length){
                longestWord = word;
            }                     

        }

        return longestWord;
        
    }

    return "Provide input as a string type"
}

console.log(findLongestWord("Hello, Javascript developers")); // developers


