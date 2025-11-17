// Implement a javascript function that groups an array of objects by a property.
// The function should take two arguments: the array of objects and the property to group by.
// The function should return an object where the keys are the values of the property and the values are arrays of objects that have that property value.

function groupByProp(arr, prop) {
  // Create an empty object to hold the grouped results
  const grouped = {};

  // Iterate through each object in the array
  arr.forEach((obj) => {
    // Get the value of the property to group by
    const key = obj[prop];

    // If the key doesn't exist in the grouped object, create it
    if (!grouped[key]) {
      grouped[key] = [];
    }

    // Push the current object into the array for that key
    grouped[key].push(obj);
  });

  return grouped;
}
// Example usage:
const data = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "fruit", name: "banana" },
  { id: 3, category: "vegetable", name: "carrot" },
  { id: 4, category: "fruit", name: "orange" },
  { id: 5, category: "vegetable", name: "broccoli" },
];
const groupedData = groupByProp(data, "category");
console.log(groupedData);
