// Q: Implement throttling in javascript
// The throttled function should ensure that the func is called at most once in every wait milliseconds, regardless of how many times the throttled function is invoked.
// function should be called with a certain time interval


function throttle(fn, delay) {
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
 