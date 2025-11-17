// Write a function to get unique objects from an array of objects

// For example [name: "Manish", age: 25], [name: "Manish", age: 25], [name: "John", age: 30] should return [name: "Manish", age: 25], [name: "John", age: 30]

function findUniqueObjectsUsingSome(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Provide input as a non-empty array";
    }

    const uniqueObjects = [];
    // Using some method to check for duplicates
    arr.forEach((currEle) => {
        const isDuplicate = uniqueObjects.some((uniEle) => JSON.stringify(currEle) === JSON.stringify(uniEle));
        if (!isDuplicate) {
            uniqueObjects.push(currEle);
        }
    });

    return uniqueObjects;
}

console.log(
    findUniqueObjectsUsingSome([
        { name: "Manish", age: 25 },
        { name: "Manish", age: 25 },
        { name: "John", age: 30 },
    ])
);
// Output: [{ name: "Manish", age: 25 }, { name: "John", age: 30 }]
