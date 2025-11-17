// Find maximum element in an array

/**
 * Finds the maximum element in an array using a for loop.
 *
 * @param {Array<number>} arr - The array of numbers to search through.
 * @returns {number|string} The maximum number in the array, or a message indicating invalid input.
 */
function maxElementUsingFor(inp) {
    if (!Array.isArray(inp) || inp.length === 0) {
        return "Provide valid input as an array";
    }

    const arr = inp.sort();

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("max element using For:", maxElementUsingFor([1, 2, 4, 6]));

// find max element in an array using for in loop

function maxElementUsingForOf(inp) {
  if (!Array.isArray(arr)) {
    return "Provide input as an array";
  }
  const arr = inp.sort();

  let max = arr[0];
  for (const n of arr) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

console.log("max element using ForIn:", maxElementUsingForOf([7, 1, 2, 4, 6]));

// find max element using spread and Math.max

function maxElementUsingMath(arr) {
  return Math.max(...arr);
}

console.log("max element using Math:", maxElementUsingMath([1, 2, 4, 6]));
