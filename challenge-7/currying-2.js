/**
 * A curried function that calculates the sum of all arguments provided.
 * The function can be called repeatedly with additional arguments, and
 * when called with no arguments, it returns the total sum of all arguments
 * provided so far.
 *
 * @param {...number} args - Initial numbers to be summed.
 * @returns {Function|number} - Returns a function to accept more arguments,
 * or the total sum when called with no arguments.
 *
 * @example
 * const result = sum(1)(2)(3)(); // 6
 * const result2 = sum(4, 5)(6)(); // 15
 * const result3 = sum(); // 0
 */
const sum = (...args) => {
  if (args.length === 0) {
    return 0;
  }

  const totalArgs = [...args];

  const tempFn = (...args2) => {
    totalArgs.push(...args2);

    if (args2.length === 0) {
      return totalArgs.reduce((a, b) => a + b, 0); // return sum 
    }
    return tempFn; // recursively call
  };
  return tempFn;
};

const res = sum(10, 20, 30)(40)(50)();
console.log(res);
