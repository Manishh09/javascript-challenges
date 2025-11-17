// Write a function to get unique objects from an array of objects

// For example [name: "Manish", age: 25], [name: "Manish", age: 25], [name: "John", age: 30] should return [name: "Manish", age: 25], [name: "John", age: 30]


function findUniqueObjects(arr) {
    if(!Array.isArray(arr) || arr.length == 0){
        return "Provide input as a non-empty array"
    }

    const uniqueObjects = [];
    const seenObj = {};
    // Using object map to track unique objects
    // Note: JSON.stringify is used to convert the object into a string representation for comparison
    // This is necessary because objects are compared by reference in JavaScript
    for (const obj of arr) {
        console.log(JSON.stringify(obj))
        const key = JSON.stringify(obj);
        if(!seenObj[key]){
            seenObj[key]= true;
            uniqueObjects.push(obj);
        }
    }
    return uniqueObjects;
}

console.log(findUniqueObjects([ { name: 'Manish', age: 25 },{ name: 'Manish', age: 25 }, { name: 'John', age: 30 } ]))

// Output: [{ name: "Manish", age: 25 }, { name: "John", age: 30 }]




// Note: 
/**
 * In JavaScript, objects are compared by reference, not by value. 
 * This means that when you try to use an object as a key in a regular JavaScript object or try to check if it exists, JavaScript looks at whether it's the exact same object instance in memory, not whether it has the same properties and values.
 */
