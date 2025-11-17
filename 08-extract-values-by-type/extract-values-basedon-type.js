// extract values from an array based on type
// for example, if i want to filter only string type from an array , it should return string value out of array value

function extractValues( arr ) {

    if(Array.isArray(arr) && arr.length) {

        return arr.filter(val =>  typeof val === "string")
    }

    return "provide input as an array"

}

console.log(extractValues([1,2,3,"i am string"]))