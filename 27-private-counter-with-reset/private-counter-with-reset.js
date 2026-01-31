/**
 * A private counter function with reset functionality.
 */

function counter() {
    let count = 0;

    return {
        increment: function() {
            return ++count
        },

        reset: function() {
            count = 0;
        },

        value: function() {
            return count;
        }
    }
}

// Example usage:
const myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.value()); // 2
myCounter.reset();
console.log(myCounter.value()); // 0
console.log(myCounter.increment()); // 1