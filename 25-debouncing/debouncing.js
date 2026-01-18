/**
 * ============================================================================
 * PROBLEM: Implement Debouncing in JavaScript
 * ============================================================================
 * 
 * DESCRIPTION:
 * Debouncing is a technique to limit the rate at which a function is executed.
 * The debounced function delays the execution of the callback until after a 
 * specified wait time has elapsed since the last time it was invoked.
 * 
 * VISUAL REPRESENTATION:
 * 
 *     User actions:    ↓  ↓  ↓  ↓  ↓          ↓  ↓  ↓
 *     Time:           |-----|-----|-----|-----|-----|
 *     Function calls:                     ✓         ✓
 *                         (wait 300ms after last action)
 * 
 * REAL-WORLD USE CASES:
 * 1. Search input - Wait for user to stop typing before making API call
 * 2. Window resize - Update layout only after resizing stops
 * 3. Form validation - Validate after user stops typing
 * 4. Auto-save - Save document after user stops making changes
 * 
 * EXAMPLES:
 * const debouncedSearch = debounce(searchAPI, 300);
 * 
 * User types: "a"     -> Wait 300ms
 * User types: "ap"    -> Reset timer, wait 300ms
 * User types: "app"   -> Reset timer, wait 300ms
 * [300ms pass]        -> Execute searchAPI("app")
 * 
 * CONSTRAINTS:
 * - Delay must be a non-negative number
 * - Function must preserve 'this' context
 * - Should handle multiple arguments
 * 
 * DIFFERENCE FROM THROTTLING:
 * - Debouncing: Execute AFTER user stops acting
 * - Throttling: Execute AT MOST once per time interval
 * 
 * Time Complexity: O(1) per invocation
 * Space Complexity: O(1) stores only timeout ID
 * ============================================================================
 */

// Q: Implement debouncing in javascript
// The debounced function should delay the processing of the func until after wait milliseconds have elapsed since the last time the debounced function was invoked.


function debounce(fn, delay) {
    // Input validation
    if (typeof fn !== 'function') {
        throw new TypeError('First argument must be a function');
    }
    if (typeof delay !== 'number' || delay < 0) {
        throw new TypeError('Delay must be a non-negative number');
    }

    let timeoutId;

    return function(...args) {
        // clear the previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // set a new timeout
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

// Example usage:
const search = (query) => {
    console.log('Searching for:', query);
}

const debouncedSearch = debounce(search, 300);

// Simulate user typing
debouncedSearch('a');
debouncedSearch('ap');
debouncedSearch('app');
debouncedSearch('appl');
debouncedSearch('apple');