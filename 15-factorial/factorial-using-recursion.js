/**
 * Calculate the factorial of a given number using recursion
 * @param {number} n - The number to calculate factorial for
 * @returns {number|string} - The factorial result or error message
 */
function findFactorial(num) {
  // Base cases for recursion
  if (n === 0 || n === 1) {
    return 1;
  }

  return num * findFactorial(num - 1);
}

console.log("factorial(5):", findFactorial(5)); // 120
