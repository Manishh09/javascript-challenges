/**
 * Multiplies three numbers using currying.
 *
 * @param {number} a - The first number.
 * @returns {function} A function that takes the second number.
 * @returns {function} A function that takes the third number and returns the product of the three numbers.
 */
const multiply = (a) => {
  
    return (b) => {
      
      return (c) => a * b * c;
    }
  }
  
  console.log(multiply(1)(2)(3))


  // one liner for currying

  const curriedMultiplyFn = (a) => (b) => (c) => a * b * c;

  console.log(curriedMultiplyFn(1)(2)(4))