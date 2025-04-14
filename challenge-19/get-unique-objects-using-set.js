// Write a function to get unique objects from an array of objects

// For example [name: "Manish", age: 25], [name: "Manish", age: 25], [name: "John", age: 30] should return [name: "Manish", age: 25], [name: "John", age: 30]

function findUniqueObjectsUsingSet(arr) {
    
    if(!Array.isArray(arr) || arr.length == 0){
        return "Provide input as an array"
    }

    const uniqueObjects = [];
    // Using Set to track unique objects
    // Note: JSON.stringify is used to convert the object into a string representation for comparison
    // This is necessary because objects are compared by reference in JavaScript
    const seenObj = new Set();
    for (const obj of arr) {
        const key = JSON.stringify(obj); 
        if (!seenObj.has(key)) {
            seenObj.add(key);
            uniqueObjects.push(obj);
        }
    }
    return uniqueObjects;

}

console.log(findUniqueObjectsUsingSet([{name: "Manish", age: 25}, {name: "Manish", age: 25}, {name: "John", age: 30}]));
// Output: [{ name: "Manish", age: 25 }, { name: "John", age: 30 }]
