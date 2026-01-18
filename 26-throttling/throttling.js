/**
 * ============================================================================
 * PROBLEM: Implement Throttling in JavaScript
 * ============================================================================
 * 
 * DESCRIPTION:
 * Throttling is a technique to ensure that a function is called at most once
 * in a specified time period, regardless of how many times it's invoked.
 * 
 * VISUAL REPRESENTATION:
 * 
 *     User actions:    ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓
 *     Time:           |-----------|-----------|-----|
 *     Function calls: ✓           ✓           ✓
 *                     (execute every 2000ms interval)
 * 
 * REAL-WORLD USE CASES:
 * 1. Scroll event - Update position indicator at regular intervals
 * 2. Button clicks - Prevent rapid multiple submissions
 * 3. Mouse move - Update coordinates periodically, not on every pixel
 * 4. API rate limiting - Ensure max N requests per time window
 * 5. Game loop - Limit frame rate updates
 * 
 * EXAMPLES:
 * const throttledLog = throttle(logPosition, 2000);
 * 
 * User scrolls continuously:
 * t=0ms:    Execute logPosition() ✓
 * t=500ms:  Ignore
 * t=1000ms: Ignore
 * t=2000ms: Execute logPosition() ✓
 * t=2100ms: Ignore
 * t=4000ms: Execute logPosition() ✓
 * 
 * CONSTRAINTS:
 * - Delay must be a non-negative number
 * - Function must preserve 'this' context
 * - Should handle multiple arguments
 * 
 * DIFFERENCE FROM DEBOUNCING:
 * - Throttling: Execute AT MOST once per interval (regular execution)
 * - Debouncing: Execute AFTER activity stops (delayed execution)
 * 
 * Time Complexity: O(1) per invocation
 * Space Complexity: O(1) stores only timestamp
 * ============================================================================
 */

// Q: Implement throttling in javascript
// The throttled function should ensure that the func is called at most once in every wait milliseconds, regardless of how many times the throttled function is invoked.
// function should be called with a certain time interval


function throttle(fn, delay) {
    // Input validation
    if (typeof fn !== 'function') {
        throw new TypeError('First argument must be a function');
    }
    if (typeof delay !== 'number' || delay < 0) {
        throw new TypeError('Delay must be a non-negative number');
    }
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    }
}

// Example usage:
const log = (message) => {
    console.log('Log:', message);
}
const throttledLog = throttle(log, 2000);

// Simulate rapid calls
throttledLog('Message 1');
throttledLog('Message 2');
throttledLog('Message 3');
throttledLog('Message 4');
throttledLog('Message 5');
 