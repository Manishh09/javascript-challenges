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

    for (let index = 0; index < this.length; index++) {
        

        acc = acc ? cb(acc, this[index], index, this) : this[index];
        
    }

    return acc;
}


const arr = [1,2,3,4,5];

console.log(arr.customMap((num, i, arr) => num * 2));

console.log(arr.customFilter((num, i, arr) => num % 2 === 0));

console.log(arr.customReduce((acc, num, i, arr) => acc + num));
