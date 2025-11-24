// Q: Implement a memoization function that caches the results of a given function based on its input arguments. The memoized function should return the cached result when called with the same arguments again, improving performance for expensive function calls.

// Input functions may have different numbers of arguments and may also be methods that rely on the `this` context. Ensure that your memoization function correctly handles these scenarios.
const obj = {
    value: 42,
    compute: memoizedFn(function(x, y) {
        console.log('Computing...');
        return this.value + x + y;
    })
}
 
console.log(obj.compute(2, 3));

console.log(obj.compute(2, 3)); // Should return cached result

// output should be 47


function memoizedFn(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.join(',');
        if (cache.has(key)) {
            console.log('Returning cached result for arguments:', args);
            return cache.get(key);
        }

        const result = fn.apply(this, args);  // use apply to maintain `this` context       
        cache.set(key, result);
        return result;
    }        
}