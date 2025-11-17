/**
 * Calculate the factorial of a given number
 * @param {number} n - The number to calculate factorial for
 * @returns {number|string} - The factorial result or error message
 */

// Example:   5! = 5* 4* 3* 2 * 1
function factorial(num) {
  // Check if the input is a number or a string that can be converted to a number
  if (typeof num == "string") {
    num = +num;
  }

  // Check if the input is a number
  if (isNaN(num)) {
    return "Must be a number";
  }

  // Check if the number is an integer
  if (!Number.isInteger(num)) {
    return "Should be an integer";
  }

  // Check if the number is negative
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }

  // Check if the number is 0 or 1
  // Factorial of 0 and 1 is 1
  if (num == 1 || num == 0) {
    return 1;
  }

  let res = 1;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }

  return res;
}

// Test cases
console.log("factorial(5):", factorial(5)); // 120
console.log("factorial(0):", factorial(0)); // 1
console.log("factorial(1):", factorial(1)); // 1
console.log("factorial(-5):", factorial(-5)); // Error message
console.log("factorial(3.5):", factorial(3.5)); // Error message
console.log("factorial('abc'):", factorial("abc")); // Error message
console.log("factorial('10'):", factorial("10")); // 3628800 (converts string to number)
console.log("factorial(170):", factorial(170)); // Largest factorial JavaScript can represent
console.log("factorial(171):", factorial(171)); // Infinity
