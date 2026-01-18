# Find Maximum Elements

## 📋 Problem Statement

Given an array of numbers, find the maximum element, second maximum, or third maximum element.

```javascript
Input:  [3, 1, 4, 1, 5, 9, 2, 6, 5]

Max:           9
Second Max:    6
Third Max:     5
```

## Solution

```javascript
function findMax(arr) {
    return Math.max(...arr);
}
```

**How it works:**
- Spread operator unpacks array
- Math.max returns largest value

**Complexity:** O(n) time, O(1) space

## Alternative Approaches

<details>
<summary>Using reduce</summary>

```javascript
function findMax(arr) {
    return arr.reduce((max, current) => 
        current > max ? current : max
    );
}
```
O(n) time, O(1) space
</details>

<details>
<summary>Find second maximum</summary>

```javascript
function findSecondMax(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for (const num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    
    return secondMax;
}
```
O(n) time, O(1) space
</details>

<details>
<summary>Find third maximum</summary>

```javascript
function findThirdMax(arr) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    
    for (const num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num < first) {
            third = second;
            second = num;
        } else if (num > third && num < second) {
            third = num;
        }
    }
    
    return third;
}
```
O(n) time, O(1) space
</details>

## Edge Cases

```javascript
findMax([1])                    // 1
findMax([5, 5, 5])              // 5
findSecondMax([1, 2, 3])        // 2
findThirdMax([1, 2])            // -Infinity (not enough elements)
```

## Run Tests

```bash
node tests.js
```    for (const num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num < first) {
            third = second;
            second = num;
        } else if (num > third && num < second) {
            third = num;
        }
    }
    
    return third;
}
```

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Math.max() | O(n) | O(1) |
| reduce() | O(n) | O(1) |
| for loop | O(n) | O(1) |
| sort() based | O(n log n) | O(n) |
| Efficient tracking | O(n) | O(1) |

**Best Choice:**

- For max: `Math.max(...arr)` - simplest
- For second/third max: Efficient tracking - O(n) time

## Edge Cases

- Empty array: `[]` → Handle with default or error
- Single element: `[5]` → Max is 5, no second max
- Two elements: `[3, 5]` → Max is 5, second is 3, no third
- All same: `[5, 5, 5]` → Max is 5, no unique second
- Negative numbers: `[-1, -5, -3]` → Max is -1
- With duplicates: `[3, 3, 2, 2, 1]` → Max is 3

## Interview Follow-ups

1. **What if array has less than 3 unique elements?**

   ```javascript
   function findThirdMax(arr) {
       const unique = [...new Set(arr)].sort((a, b) => b - a);
       return unique.length >= 3 ? unique[2] : unique[unique.length - 1];
   }
   ```

2. **How to find nth maximum?**

   ```javascript
   function findNthMax(arr, n) {
       const unique = [...new Set(arr)].sort((a, b) => b - a);
       return unique[n - 1];
   }
   ```

3. **What about finding minimum instead?**

   ```javascript
   const min = Math.min(...arr);
   ```

4. **Can you find top K elements?**

   ```javascript
   function findTopK(arr, k) {
       return [...new Set(arr)].sort((a, b) => b - a).slice(0, k);
   }
   ```

## Finding Multiple Max Values

```javascript
function findTopThree(arr) {
    return [...new Set(arr)]
        .sort((a, b) => b - a)
        .slice(0, 3);
}

// Example: [3, 1, 4, 1, 5, 9, 2, 6, 5]
// Returns: [9, 6, 5]
```

## Efficient Algorithm Visualization

```
Array: [3, 7, 1, 5, 9, 2]

Finding max, second max, third max:

Initial:
  first:  -∞
  second: -∞
  third:  -∞

After 3:
  first:  3
  second: -∞
  third:  -∞

After 7:
  first:  7
  second: 3
  third:  -∞

After 1:
  first:  7
  second: 3
  third:  1

After 5:
  first:  7
  second: 5
  third:  3

After 9:
  first:  9
  second: 7
  third:  5

After 2:
  first:  9
  second: 7
  third:  5  (2 < 5, no change)

Result: Max=9, Second=7, Third=5
```

## Practical Applications

- Leaderboard rankings
- Top scorers
- Medal positions
- Statistical analysis
- Data analysis
- Sorting alternatives

## Related Challenges

- Find minimum element
- Find kth largest element
- Top K frequent elements
- Median finding
- Percentile calculations

## Run Tests

```bash
node tests.js
```
