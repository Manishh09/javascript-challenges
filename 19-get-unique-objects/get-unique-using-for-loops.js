// Write a function to get unique objects from an array of objects

// For example [name: "Manish", age: 25], [name: "Manish", age: 25], [name: "John", age: 30] should return [name: "Manish", age: 25], [name: "John", age: 30]

function findUniqueObjects(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Provide input as a non-empty array";
  }

  const uniqueObjects = [];
  // Outer loop through each object in the input array
  for (const currEle of arr) {
    let isDuplicate = false;

    // Check if this object already exists in  uniqueObjects array
    for (const uniEle of uniqueObjects) {
      // Check if objects are equal by comparing their string representations
      if (JSON.stringify(currEle) === JSON.stringify(uniEle)) {
        isDuplicate = true;
        break;
      }
    }

    // If not a duplicate, add to uniqueObjects
    if (!isDuplicate) {
      uniqueObjects.push(curr);
    }
  }
}

console.log(
  findUniqueObjects([
    { name: "Manish", age: 25 },
    { name: "Manish", age: 25 },
    { name: "John", age: 30 },
  ])
);
// Output: [{ name: "Manish", age: 25 }, { name: "John", age: 30 }]
