/**
 * ============================================================================
 * PROBLEM: Flatten a Nested Array
 * ============================================================================
 * 
 * DESCRIPTION:
 * Given a multi-dimensional (nested) array, flatten it into a single-dimensional array.
 * The flattening can be done to a specific depth or completely (infinite depth).
 * 
 * VISUAL REPRESENTATION:
 * 
 *     Input: [1, [2, [3, [4]], 5]]
 * 
 *            [1, [2, [3, [4]], 5]]
 *            │    │   │   │    │
 *            │    └───┼───┘    │    Depth 1
 *            │        └─────────┘    Depth 2
 *            └──────────────────┘    Depth 3
 * 
 *     Output (flat): [1, 2, 3, 4, 5]
 * 
 * EXAMPLES:
 * Input:  [1, 2, [3, 4, [5, 6, [7, 8]]]]
 * Output (depth=1): [1, 2, 3, 4, [5, 6, [7, 8]]]
 * Output (depth=2): [1, 2, 3, 4, 5, 6, [7, 8]]
 * Output (depth=∞): [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 * CONSTRAINTS:
 * - Array can contain any type of elements
 * - Empty arrays should return []
 * - Non-array inputs should be handled gracefully
 * 
 * APPROACHES:
 * 1. Built-in flat() method - Simple but requires ES2019+
 * 2. Recursion with reduce() - More control, works everywhere
 * 3. Iterative with stack - Avoids recursion depth limits
 * 
 * FOLLOW-UP QUESTIONS:
 * Q1: What's the time complexity of flattening?
 * A: O(n) where n is total number of elements across all nesting levels
 * 
 * Q2: What's the maximum depth JavaScript can handle with recursion?
 * A: Typically ~10,000 calls, but varies by browser/environment
 * 
 * Q3: How to flatten objects with nested arrays?
 * A: Need recursive function that handles both objects and arrays
 * ============================================================================
 */

// flattening an array using flat method

// 1. Without Depth
function flattenUsingBuiltInFlat(inputArray, depth) {

    if(Array.isArray(inputArray) && inputArray.length) {
        if(depth) {
            return inputArray.flat(depth);
        }
        return inputArray.flat();
    }
}
console.log(flattenUsingBuiltInFlat([1,2,[3,4, [5,6,[7,8]]]],Infinity));

// Using flat, will flatten till first level of nested array if you do not send depth as input to the flat method


// 2. Using reduce and recursion

function flattenUsingRecursion(inputArray) {
    if(Array.isArray(inputArray) && inputArray.length) {
        return inputArray.reduce((acc, curr) => {
            if(Array.isArray(curr) && curr.length) {
                return acc.concat(flattenUsingRecursion(curr));
            }
            return acc.concat(curr);
        }, []);
    }
}

console.log(flattenUsingRecursion([1,2,[3,4, [5,6,[7,8]]]]));
