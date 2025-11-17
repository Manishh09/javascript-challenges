// find second largest element in an array

function findSecondLargestElement(inp) {
  if (!Array.isArray(inp) || inp.length === 0) {
    return "Provide valid input as an array";
  }

  const arr = inp.sort();

  let max = arr[0];

  for (const val of arr) {
    if (val > max) {
      max = val;
    }
  }
  let secondMax = arr[0];

  for (const val of arr) {
    if (val < max && val > secondMax) {
      secondMax = val;
    }
  }

  return secondMax;
}

console.log(
  "second largest element:",
  findSecondLargestElement([15, 11, 12, 1, 3, 5, 2, 6, 8, 10])
);

// With Sorted Array
function findSecondLargestElementUsingSortedArray(inp) {
  if (!Array.isArray(inp) || inp.length === 0) {
    return "Provide valid input as an array";
  }

  const arr = inp.sort((a, b) => a - b);

  let max = arr[0];

  let secondMax = arr[0];

  for (const val of arr) {
    if (val > max) {
      secondMax = max;

      max = val;
    }
  }

  return secondMax;
}

console.log(
  "second largest element - in optimized function:",
  findSecondLargestElementUsingSortedArray([17, 15, 11, 12, 1, 3, 5, 2, 6, 8, 10])
);

// Without Sorted Array
function findSecondLargestElementWithoutSortedArray(inp) {
  if (!Array.isArray(inp) || inp.length === 0) {
    return "Provide valid input as an array";
  }

  // const arr = inp.sort((a, b) => a - b);

  let max = 0;

  let secondMax = 0;

  for (const val of inp) {
    if (val > max) {
      secondMax = max;

      max = val;
    } else if (val > secondMax) {
      secondMax = val;
    }
  }

  return secondMax;
}

console.log(
  "second largest element - in optimized function:",
  findSecondLargestElementWithoutSortedArray([17, 15, 11, 12, 1, 3, 5, 2, 6, 8, 10])
);
