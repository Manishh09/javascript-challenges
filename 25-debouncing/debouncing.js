// Q: Implement debouncing in javascript
// The debounced function should delay the processing of the func until after wait milliseconds have elapsed since the last time the debounced function was invoked.


function debounce(fn, delay) {

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