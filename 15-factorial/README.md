# Factorial

## 📋 Problem Statement

Calculate the factorial of a number n, which is the product of all positive integers less than or equal to n.

Formula: n! = n × (n-1) × (n-2) × ... × 2 × 1

```javascript
Input:  5
Output: 120  // 5 × 4 × 3 × 2 × 1
```

## Solution

```javascript
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
```

**How it works:**

- Start with result = 1
- Multiply by each number from 2 to n
- Return accumulated product

**Complexity:** O(n) time, O(1) space

## Alternative Approaches

<details>
<summary>Recursive</summary>

```javascript
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    return n * factorial(n - 1);
}
```

O(n) time, O(n) space (call stack)
</details>

<details>
<summary>Tail recursion</summary>

```javascript
function factorial(n, accumulator = 1) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return accumulator;
    
    return factorial(n - 1, n * accumulator);
}
```

O(n) time, O(n) space (or O(1) with tail-call optimization)
</details>

<details>
<summary>Using reduce</summary>

```javascript
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    return Array.from({ length: n }, (_, i) => i + 1)
        .reduce((acc, val) => acc * val, 1);
}
```

O(n) time, O(n) space
</details>

## Edge Cases

```javascript
factorial(0)   // 1 (by definition)
factorial(1)   // 1
factorial(-5)  // undefined (not defined for negatives)
factorial(5)   // 120
```

## Run Tests

```bash
node tests.js
```

## Factorial Values

```
n   | n!
----|-------------
0   | 1
1   | 1
2   | 2
3   | 6
4   | 24
5   | 120
6   | 720
7   | 5,040
8   | 40,320
9   | 362,880
10  | 3,628,800
15  | 1,307,674,368,000
20  | 2,432,902,008,176,640,000
```

**Note:** Factorial grows extremely fast!

## Edge Cases

- n = 0: Returns 1 (by definition)
- n = 1: Returns 1
- n < 0: Undefined (factorial not defined for negatives)
- Large n (> 170): Returns Infinity in JavaScript (exceeds Number.MAX_VALUE)

## Interview Follow-ups

1. **How to handle large numbers (n > 170)?**

   ```javascript
   function factorialBigInt(n) {
       if (n < 0) return undefined;
       if (n === 0 || n === 1) return 1n;
       
       let result = 1n;
       for (let i = 2n; i <= BigInt(n); i++) {
           result *= i;
       }
       
       return result;
   }
   
   factorialBigInt(100);  // 93326215443944152681699238856266700490715968264381621468592963895217...
   ```

2. **What about computing factorials for multiple numbers efficiently?**

   ```javascript
   // Precompute and cache factorials
   class FactorialCache {
       constructor() {
           this.cache = [1, 1];  // 0! and 1!
       }
       
       get(n) {
           if (n < this.cache.length) {
               return this.cache[n];
           }
           
           for (let i = this.cache.length; i <= n; i++) {
               this.cache[i] = this.cache[i - 1] * i;
           }
           
           return this.cache[n];
       }
   }
   ```

3. **How to calculate factorial modulo m?**

   ```javascript
   function factorialMod(n, m) {
       if (n < 0) return undefined;
       
       let result = 1;
       for (let i = 2; i <= n; i++) {
           result = (result * i) % m;
       }
       
       return result;
   }
   ```

4. **What's the relationship with permutations and combinations?**

   ```javascript
   // Permutations: nPr = n! / (n-r)!
   function permutations(n, r) {
       return factorial(n) / factorial(n - r);
   }
   
   // Combinations: nCr = n! / (r! × (n-r)!)
   function combinations(n, r) {
       return factorial(n) / (factorial(r) * factorial(n - r));
   }
   ```

## Visual Explanation

```
5! calculation:

Iterative:
  result = 1
  result = 1 × 2 = 2
  result = 2 × 3 = 6
  result = 6 × 4 = 24
  result = 24 × 5 = 120

Recursive:
  5! = 5 × 4!
     = 5 × (4 × 3!)
     = 5 × (4 × (3 × 2!))
     = 5 × (4 × (3 × (2 × 1!)))
     = 5 × (4 × (3 × (2 × 1)))
     = 5 × (4 × (3 × 2))
     = 5 × (4 × 6)
     = 5 × 24
     = 120
```

## Practical Applications

### Mathematics

- Permutations and combinations
- Probability calculations
- Taylor series expansions
- Binomial theorem

### Computer Science

- Algorithm analysis (counting operations)
- Combinatorial problems
- Graph theory
- Discrete mathematics

### Real-World Examples

```javascript
// How many ways to arrange n books?
const arrangements = factorial(5);  // 120 ways for 5 books

// How many ways to choose r items from n items?
function choose(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

choose(10, 3);  // 120 ways to choose 3 items from 10
```

## Optimization Tips

```javascript
// For very large n, use Stirling's approximation
function stirlingApproximation(n) {
    // n! ≈ √(2πn) × (n/e)^n
    return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
}

stirlingApproximation(100);  // Very close to actual factorial(100)
```

## Related Challenges

- Double factorial (n!!)
- Subfactorial (!n)
- Trailing zeros in factorial
- Permutations
- Combinations

## Run Tests

```bash
node tests.js
```
