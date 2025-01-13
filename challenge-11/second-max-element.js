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

// optimized version

function findSecondLargestElementV2(inp) {
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
    if (val > max) {
      secondMax = max;

      max = val;
    } else if (val < max && val > secondMax) {
      secondMax = val;
    }
  }

  return secondMax;
}

console.log(
    "second largest element - in optimized function:",
    findSecondLargestElementV2([17,15, 11, 12, 1, 3, 5, 2, 6, 8, 10])
  );
