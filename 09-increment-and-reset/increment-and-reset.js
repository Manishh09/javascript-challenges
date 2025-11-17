// create a counter function that increments each it is called.
// Also add a reset function which set the count value back to 1

function counter() {

    let count = 0;

    function inc(){
       return ++count;
    }

    function reset() {
        count = 0;
        return ++count;
    }

    return {inc, reset};     
}
const res = counter();
console.log(res.inc())
console.log(res.inc())
console.log(res.inc())

// reset
console.log(res.reset())


/** Using Arrow Functions */

/**
 * Creates a counter object with increment and reset functionalities.
 *
 * @returns {Object} An object with two methods:
 * - `inc`: Increments the counter by 1 and returns the new count.
 * - `reset`: Resets the counter to 0 and returns the new count.
 */
function counterV2() {
    let count = 0;

    const inc = () => ++count;

    const reset = () => {
        count = 0;
        return ++count;
    };

    return { inc, reset };
}
const res2 = counterV2();
console.log(res2.inc())
console.log(res2.inc())
console.log(res2.inc())

// reset
console.log(res2.reset())
