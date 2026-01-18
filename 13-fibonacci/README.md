# Fibonacci Sequence

## 📋 Problem Statement

Generate the Fibonacci sequence where each number is the sum of the two preceding ones, starting from 0 and 1.

Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

```javascript
Input:  10
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

## Solution

```javascript
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fib = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib;
}
```

**How it works:**
- Start with [0, 1]
- Each next number is sum of previous two
- Build array iteratively

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Recursive (inefficient)</summary>

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
O(2^n) time - exponential! Not recommended
</details>

<details>
<summary>Memoized recursion</summary>

```javascript
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
```
O(n) time, O(n) space - much better
</details>

<details>
<summary>Space-optimized</summary>

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}
```
O(n) time, O(1) space
</details>

## Edge Cases

```javascript
fibonacci(0)   // []
fibonacci(1)   // [0]
fibonacci(5)   // [0, 1, 1, 2, 3]
```

## Run Tests

```bash
node tests.js
```
        prev = curr;
        curr = next;
    }
    
    return curr;
}
```

**How it works:**

- Only keep last two numbers
- O(1) space instead of O(n)

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Iterative | O(n) | O(n) |
| Naive Recursion | O(2ⁿ) | O(n) call stack |
| Memoized Recursion | O(n) | O(n) |
| Dynamic Programming | O(n) | O(n) |
| Space-Optimized | O(n) | O(1) |

**Best Choice:** Space-optimized iterative - O(n) time, O(1) space

## Recursion Tree (Naive Approach)

```
fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1) → 1
│   │   │   └── fib(0) → 0
│   │   └── fib(1) → 1
│   └── fib(2)
│       ├── fib(1) → 1
│       └── fib(0) → 0
└── fib(3)
    ├── fib(2)
    │   ├── fib(1) → 1
    │   └── fib(0) → 0
    └── fib(1) → 1

Note: fib(3), fib(2) calculated multiple times!
```

## Fibonacci Properties

- **Golden Ratio:** As n increases, F(n+1)/F(n) approaches φ (phi) ≈ 1.618
- **Every 3rd number is even**
- **Every 4th number is divisible by 3**
- **Sum of first n Fibonacci numbers:** F(n+2) - 1

## Edge Cases

- n = 0: [0] or 0
- n = 1: [0, 1] or 1
- n < 0: Handle as error or empty array
- Large n: Numbers grow very quickly (use BigInt for n > 78)

## Interview Follow-ups

1. **What if n is very large (> 1000)?**

   ```javascript
   // Use BigInt for large numbers
   function fibonacciBigInt(n) {
       if (n <= 1) return BigInt(n);
       let prev = 0n, curr = 1n;
       for (let i = 2; i <= n; i++) {
           [prev, curr] = [curr, prev + curr];
       }
       return curr;
   }
   ```

2. **Can you check if a number is a Fibonacci number?**

   ```javascript
   function isFibonacci(num) {
       // A number is Fibonacci if one of (5*n² + 4) or (5*n² - 4) is a perfect square
       const isPerfectSquare = (x) => {
           const s = Math.sqrt(x);
           return s === Math.floor(s);
       };
       return isPerfectSquare(5 * num * num + 4) || 
              isPerfectSquare(5 * num * num - 4);
   }
   ```

3. **How would you find Fibonacci in O(log n)?**
   - Use matrix exponentiation
   - Advanced technique, rarely needed

4. **What about negative indices?**

   ```javascript
   // F(-n) = (-1)^(n+1) * F(n)
   function fibonacciNegative(n) {
       if (n >= 0) return fibonacci(n);
       const posN = Math.abs(n);
       const result = fibonacci(posN);
       return posN % 2 === 0 ? -result : result;
   }
   ```

## Real-World Applications

- Nature (flower petals, pine cones, shells)
- Art and architecture (golden ratio)
- Financial trading (Fibonacci retracement)
- Computer algorithms
- Biological systems
- Music composition

## Sequence Visualization

```
Position: 0  1  2  3  4  5  6   7   8   9   10
Value:    0  1  1  2  3  5  8  13  21  34  55

Pattern:
  0 + 1 = 1
  1 + 1 = 2
  1 + 2 = 3
  2 + 3 = 5
  3 + 5 = 8
  5 + 8 = 13
  ...
```

## Related Challenges

- Tribonacci sequence
- Climbing stairs problem
- Lucas numbers
- Pisano period
- Zeckendorf's theorem

## Run Tests

```bash
node tests.js
```
