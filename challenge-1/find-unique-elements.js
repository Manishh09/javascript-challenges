/**
 * Removes duplicate values from an array and returns a new array with unique values.
 *
 * @param {Array} arr - The array from which to remove duplicate values.
 * @returns {Array|string} A new array with unique values or a message if the input is not a valid array.
 */
function uniqueArray( arr ) {
    
    const uniqArr = [];
    
    
    if(Array.isArray(arr) && arr.length) {
        
      // return getUniqueElementsUsingForEach(arr, uniqArr);
      // return getUniqueElementsUsingSet(arr)
      // return getUniqueElementsUsingFilter(arr)
      return getUniqueElementsUsingForOf(arr, uniqArr);
    }
    
    
    return "Provide array of items"
}

console.log(uniqueArray([1,1,2,3,3,5,6,7,8,8,9,9,10]))


function getUniqueElementsUsingForOf(arr, uniqArr) {
    for (const element of arr) {
        if (!uniqArr.includes(element)) {
            uniqArr.push(element);
        }

    }
    return uniqArr;
}

function getUniqueElementsUsingFilter(arr) {
    return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

function getUniqueElementsUsingSet(arr) {
    return [...new Set(arr)];
}

function getUniqueElementsUsingForEach(arr, uniqArr) {
    // arr.forEach((item) => {
    //     if (!uniqArr.includes(item)) {
    //         uniqArr.push(item);
    //     }
    // });
    arr.forEach((item) => {
        if (uniqArr.indexOf(item) === -1) {
            uniqArr.push(item);
        }
    });

    return uniqArr;
}
