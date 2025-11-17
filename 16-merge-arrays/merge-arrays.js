// Given 2 arrays that are not sorted [0,5,3,4,31] and [7, 4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?


function mergeSortedArraysUsingSpread(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return [...arr1, ...arr2].sort((a, b) => a - b);
    }
    return [];
}

console.log(mergeSortedArraysUsingSpread([0, 5, 3, 4, 31], [7, 4, 6, 30]));
// [ 0, 3,  4,  4, 5, 6, 7, 30, 31 ]

function mergeSortedArraysUsingConcat(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return arr1.concat(arr2).sort((a, b) => a - b);
    }
    return [];
}

console.log(mergeSortedArraysUsingConcat([0, 5, 3, 4, 31], [7, 4, 6, 30]));
// [ 0, 3,  4,  4, 5, 6, 7, 30, 31 ]