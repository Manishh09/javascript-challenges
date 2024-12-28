// remove falsy values from a given array
// falsy values are: 0, null, undefined, NaN, "", false
/**
 * Removes all falsy values from an array.
 *
 * @param {Array} arr - The array to be filtered.
 * @returns {Array|string} - A new array with all falsy values removed, or a string message if the input is not an array.
 */
function removeFalsyValuesUsingFilter(arr) {

    // check type of arr

    if(Array.isArray(arr)) {
        return arr.filter(val => !!val);
    }

    return "provide input as an array";
}




function removeFalsyValuesWithBoolean(arr) {
    if(Array.isArray(arr)) {
        return arr.filter(Boolean);
    }

    return "provide input as an array";
}

console.log(removeFalsyValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, null, undefined, NaN, "", false, true, "hello", "world", " ", "  "])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hello", "world", " ", "  "]