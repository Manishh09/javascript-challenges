 

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


