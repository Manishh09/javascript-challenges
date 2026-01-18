// Implement a javascript function to group array of objects by a property


/**
 * Groups an array of objects by the `city` property using the `reduce` method.
 *
 * @param {Array<Object>} arr - The array of objects to group. Each object is expected to have a `city` property.
 * @returns {Object} An object where the keys are the unique `city` values and the values are arrays of objects 
 *                   (excluding the `city` property) that belong to each city.
 */
function groupByUsingReduce(arr) {
    
    return arr.reduce((res, obj)=> {
        const {city, ...rest} = obj; 
        if(!res[city]){
            res[city]=[]
        }
        res[city].push(rest);
        return res;

    }, {})
}

// Example usage:
const data = [
    { id: 1, category: "fruit", name: "apple" },
    { id: 2, category: "fruit", name: "banana" },
    { id: 3, category: "vegetable", name: "carrot" },
    { id: 4, category: "fruit", name: "orange" },
    { id: 5, category: "vegetable", name: "broccoli" },
  ];
  const groupedData = groupByUsingReduce(data);
  console.log(groupedData);