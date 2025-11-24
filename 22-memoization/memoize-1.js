// Memoization function

// Q: Implement a memoization function that caches the results of a given function based on its input arguments. The memoized function should return the cached result when called with the same arguments again, improving performance for expensive function calls.

function memoized(fn) {
    // cache object to store results
    const cache = {};

    // return a new function that wraps the original function
    return function(...args) {
        // create a unique key for the arguments
        const key = args.join(',');

        // if key exists in cache, return cached result
        if(key in cache) {
            console.log('Returning cached result for arguments:', args);
            return cache[key];
        }

        // otherwise, call the original function and store the result in cache
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}


const add = (x, y) => {
  console.log('Computing...');
  return x + y;
}

const memoizedAdd = memoized(add);

console.log(memoizedAdd(2, 3)); // Computes and logs: Computing... 5
console.log(memoizedAdd(2, 3)); // Returns cached result: 5