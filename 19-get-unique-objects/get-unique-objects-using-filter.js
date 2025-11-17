// Write a function to get unique objects from an array of objects using filter method

// For example [name: "Manish", age: 25], [name: "Manish", age: 25], [name: "John", age: 30] should return [name: "Manish", age: 25], [name: "John", age: 30]

function findUniqueObjectsUsingFilter(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Provide input as a non-empty array";
    }

    const uniqueObjects = arr.filter((obj, index, currArr) => {
        // Check if the current object is the first occurrence in the array
        return index === currArr.findIndex((cur) => JSON.stringify(cur) === JSON.stringify(obj));
    });

    return uniqueObjects;
}

console.log(findUniqueObjectsUsingFilter([{ name: "Manish", age: 25 }, { name: "Manish", age: 25 }, { name: "John", age: 30 }]));
// Output: [{ name: "Manish", age: 25 }, { name: "John", age: 30 }]
