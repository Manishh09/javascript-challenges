// Find the longest word length in a given sentence
// E.g: "Hello , Javascript developers"

// Output: 10 

/**
 * Finds the length of the longest word in a given sentence.
 *
 * @param {string} sentence - The sentence to evaluate.
 * @returns {number|string} The length of the longest word in the sentence, or a message indicating invalid input.
 */
function findLongestWordLength(sentence) {

    // check input is of type string

    if((typeof sentence === 'string') && sentence.length){

        // split the sentence into words
        const words = sentence.split(' ');

        // store a temp variable
        let longestWordLength = 0;

        // iterate over words array and find the longest word

        for (const word of words) {
            
            // check word in array is greater than longest word and store word in temp variable
            // this way, every time the `longestWord` value replaces with `word` which is greater than the previously stored value
            if(word.length > longestWordLength){
                longestWordLength = word.length;
            }                     

        }

        return longestWordLength;
        
    }

    return "Provide input as a string type"

}