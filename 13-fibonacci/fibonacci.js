/**
 * Generates a Fibonacci series of length `n`.
 *
 * @param {number} n - The length of the Fibonacci series to generate.
 * @returns {number[]} An array containing the Fibonacci series of length `n`.
 */
function generateFibonacciSeries(n) {
  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  const fibSeq = [0, 1];

  for (let i = 2; i < n; i++) {
    const res = fibSeq[i - 1] + fibSeq[i - 2];

    fibSeq.push(res);
  }

  return fibSeq;
}

console.log(generateFibonacciSeries(5))

// method 2

function fibonacci(n) {

  // handle edge cases

  if(n <= 0) return [0];

  if(n === 1) return [1];

  // pre-allocate array elements

  const arr = new Array(n);
  
  // assign first two elements at 0, 1 indices of `arr`

  arr[0] = 0;
  
  arr[1] = 1;
  
  // declare prev, current variables ; assign prev with 0, and current with 1
  
  let prev = 0;
  
  let current = 1;

  // iterate from index 2 to n
  
  for (let i = 2; i < n; i++) {
    
    arr[i] = prev + current; // assign first sum of prev and current to arr[i]
    
    prev = current;         // assign current to prev
    
    current = arr[i];       // assign arr[i] to current
    
  }
  
  return arr;
  
  
}

console.log(fibonacci(5))
