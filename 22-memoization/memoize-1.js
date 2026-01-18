/**
 * ============================================================================
 * PROBLEM: Implement Memoization in JavaScript
 * ============================================================================
 * 
 * DESCRIPTION:
 * Memoization is an optimization technique that caches the results of expensive
 * function calls and returns the cached result when the same inputs occur again.
 * 
 * VISUAL REPRESENTATION:
 * 
 *     First Call:  add(2, 3)  →  [Compute] → 5 → Store in cache
 *     Second Call: add(2, 3)  →  [Cache]   → 5 (instant!)
 *     Third Call:  add(5, 7)  →  [Compute] → 12 → Store in cache
 *     Fourth Call: add(2, 3)  →  [Cache]   → 5 (instant!)
 * 
 * REAL-WORLD USE CASES:
 * 1. Fibonacci calculations - Avoid redundant recursive calls
 * 2. API responses - Cache results for same parameters
 * 3. Complex calculations - Store expensive computation results
 * 4. React.memo / useMemo - Prevent unnecessary re-renders
 * 5. Database queries - Cache frequently accessed data
 * 
 * EXAMPLES:
 * // Expensive function
 * function fibonacci(n) {
 *   if (n <= 1) return n;
 *   return fibonacci(n-1) + fibonacci(n-2);  // Many repeated calculations!
 * }
 * 
 * // With memoization
 * const memoFib = memoized(fibonacci);
 * memoFib(40); // Fast! Previously calculated values are cached
 * 
 * CONSTRAINTS:
 * - Function must be pure (same input = same output)
 * - Arguments must be serializable for cache key
 * - Consider memory usage for large caches
 * 
 * TRADE-OFFS:
 * Pros:
 * - Dramatic performance improvement for repeated calls
 * - Simple to implement and use
 * 
 * Cons:
 * - Memory overhead to store cache
 * - Only works with pure functions
 * - Cache key generation can be expensive
 * 
 * Time Complexity: 
 * - First call: O(n) where n is original function complexity
 * - Cached call: O(1) cache lookup
 * 
 * Space Complexity: O(k) where k is number of unique argument combinations
 * ============================================================================
 */

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