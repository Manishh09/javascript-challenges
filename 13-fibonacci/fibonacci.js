/**
 * ============================================================================
 * PROBLEM: Generate Fibonacci Sequence
 * ============================================================================
 * 
 * DESCRIPTION:
 * The Fibonacci sequence is a series where each number is the sum of the two
 * preceding ones. Starting from 0 and 1, the sequence goes: 0, 1, 1, 2, 3, 5, 8...
 * 
 * VISUAL REPRESENTATION:
 * 
 *     Index:  0  1  2  3  4  5  6   7   8   9
 *     Value:  0  1  1  2  3  5  8  13  21  34
 *             │  │  └──┴─ Sum of previous two
 *             │  └─────── Second number
 *             └────────── First number
 * 
 *     Pattern: F(n) = F(n-1) + F(n-2)
 *              F(0) = 0, F(1) = 1
 * 
 * EXAMPLES:
 * Input:  n = 5
 * Output: [0, 1, 1, 2, 3]
 * 
 * Input:  n = 8
 * Output: [0, 1, 1, 2, 3, 5, 8, 13]
 * 
 * Input:  n = 0
 * Output: []
 * 
 * APPROACHES:
 * 1. Iterative - O(n) time, O(n) space for array
 * 2. Recursive - O(2^n) time without memoization
 * 3. Recursive + Memoization - O(n) time, O(n) space
 * 4. Space-optimized - O(n) time, O(1) space (just return nth number)
 * 
 * FOLLOW-UP QUESTIONS:
 * Q1: What's the time complexity of naive recursion?
 * A: O(2^n) - each call makes two more calls (exponential!)
 * 
 * Q2: How can we optimize recursive approach?
 * A: Use memoization to cache computed values
 * 
 * Q3: How to find just the nth Fibonacci number (not the series)?
 * A: Track only last two numbers, O(1) space
 * 
 * Q4: What are real-world applications?
 * A: Nature patterns (petals, shells), algorithms, trading analysis
 * ============================================================================
 */

/**
 * Generates a Fibonacci series of length `n`.
 *
 * @param {number} n - The length of the Fibonacci series to generate.
 * @returns {number[]} An array containing the Fibonacci series of length `n`.
 * 
 * Time Complexity: O(n) - single pass through numbers
 * Space Complexity: O(n) - storing all Fibonacci numbers
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
