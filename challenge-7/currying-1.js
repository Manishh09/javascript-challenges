// Write a function that maintains a running total and adds the provided number to it

/**
 * Creates a function that maintains a running total and adds the provided number to it.
 *
 * @returns {function(number=): number} A function that takes a number as an argument (default is 0)
 * and adds it to the running total, returning the updated total.
 */
function sum() {
  
  let total = 0;
  
  return (num = 0) => total += num;
  
  
}

const res = sum();
console.log(res(5))
console.log(res(3))