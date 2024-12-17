function containsDuplicates( arr ) {

    // using map

    const map = new Map();

    for (const element of arr) {
        if(map.has(element)) {
            return true;
        }
        map.set(element, true)
    }
    return false;
}

console.log(containsDuplicates([1,2,3,1,1,1]));
