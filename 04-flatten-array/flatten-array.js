// flattening an array using flat method

// 1. Without Depth
function flattenUsingBuiltInFlat(inputArray, depth) {

    if(Array.isArray(inputArray) && inputArray.length) {
        if(depth) {
            return inputArray.flat(depth);
        }
        return inputArray.flat();
    }
}
console.log(flattenUsingBuiltInFlat([1,2,[3,4, [5,6,[7,8]]]],Infinity));

// Using flat, will flatten till first level of nested array if you do not send depth as input to the flat method


// 2. Using reduce and recursion

function flattenUsingRecursion(inputArray) {
    if(Array.isArray(inputArray) && inputArray.length) {
        return inputArray.reduce((acc, curr) => {
            if(Array.isArray(curr) && curr.length) {
                return acc.concat(flattenUsingRecursion(curr));
            }
            return acc.concat(curr);
        }, []);
    }
}

console.log(flattenUsingRecursion([1,2,[3,4, [5,6,[7,8]]]]));
