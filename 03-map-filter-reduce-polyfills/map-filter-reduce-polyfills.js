// map , filter

// Array.map(num, i, arr)

Array.prototype.customMap = function(cb) {

    const tempArr = [];

    for(let i=0; i < this.length; i++) {
        tempArr.push(cb(this[i], i, this)) // this : parent array
    }

    return tempArr;

}

// Array.filter(num, i, arr)

Array.prototype.customFilter = function(cb) {


    const tempArr = [];

    for(let i=0; i < this.length; i++) {
        if(cb(this[i], i, this)){
            tempArr.push(this[i]);
        }
    }
    return tempArr;

}

// Array.reduce((acc, curr, i, arr)=> {}, initialValue)

Array.prototype.customReduce = function(cb, initialValue) {
    let acc = initialValue;
    let startIndex = 0;

    // If no initial value provided, use first element
    if (initialValue === undefined) {
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        acc = this[0];
        startIndex = 1;
    }

    for (let index = startIndex; index < this.length; index++) {
        acc = cb(acc, this[index], index, this);
    }

    return acc;
}


const arr = [1,2,3,4,5];


function output(arr) {
    console.log(arr.customMap((num, i, arr) => num * 2));
}

output(arr)


console.log(arr.customFilter((num, i, arr) => num % 2 === 0));

console.log(arr.customReduce((acc, num, i, arr) => acc + num, 0));
