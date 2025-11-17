 // Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

// Steps to solve
// 1. Check if both arrays are of the same length.
// 2. Sort both arrays.
// 3. Compare each element of the first array with the square of the corresponding element in the second array.
// 4. If all elements match, return true; otherwise, return false.


// Using ForEach
function checkSquared(arr1, arr2) {

    if(Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length){

        const sortedArr1 = arr1.sort((a, b) => a - b);
        const sortedArr2 = arr2.sort((a, b) => a - b);

        let res = true;
        sortedArr1.forEach((value, idx) => {
            if (sortedArr2[idx] !== value * value) {
                res = false;
            }
        }); 
        return res;
    }
    return false
}


console.log(checkSquared([1,2,4], [1,4,16]));


// Using every method

function checkSquaredUsingEvery(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
        const sortedArr1 = arr1.slice().sort((a, b) => a - b);
        const sortedArr2 = arr2.slice().sort((a, b) => a - b);

        return sortedArr1.every((value, index) => sortedArr2[index] === value * value);
    }
    return false;
}
console.log(checkSquaredUsingEvery([1,2,4], [1,4,16]));
