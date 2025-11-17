// Write a program to find the third largest element in an array
// without sorting

function findThirdLargest(inp) {
  if (Array.isArray(inp) && inp.length < 3) {
    return "Length should be 3 or greater";
  }

  const removeDup = [...new Set(inp)];
  let max = 0;
  let max2 = 0;

  let max3 = 0;

  for (const val of removeDup) {
    if (val > max) {
      max3 = max2;
      max2 = max;
      max = val;
    } else if (val > max2) {
      max3 = max2;
      max2 = val;
    } else if (val > max3) {
      max3 = val;
    }
  }
  return max3;
}

console.log(findThirdLargest([50, 40, 60]));
console.log(findThirdLargest([50, 40, 60, 70]));
console.log(findThirdLargest([50, 40, 60, 70, 80]));

// With Sorting
function findThirdLargestUsingSortedArray(inp) {
  if (Array.isArray(inp) && inp.length < 3) {
    return "Length should be 3 or greater";
  }
  const removeDup = [...new Set(inp)];
  const sortedArr = removeDup.sort();
  let max = sortedArr[0];
  let max2 = sortedArr[0];

  let max3 = sortedArr[0];

  for (const val of sortedArr) {
    if (val > max) {
      max3 = max2;
      max2 = max;
      max = val;
    }
  }
  return max3;
}

console.log(findThirdLargest([50, 40, 60]));
