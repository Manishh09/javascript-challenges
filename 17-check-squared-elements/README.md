# Check Squared Elements

## 📋 Problem Statement

Given two arrays, check if every element in the second array is the square of an element in the first array, with the same frequency.

```javascript
Input:  arr1 = [1, 2, 3], arr2 = [1, 4, 9]
Output: true  // 1²=1, 2²=4, 3²=9
```

## Solution

```javascript
function areSquared(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const freq1 = {};
    const freq2 = {};
    
    for (const num of arr1) {
        freq1[num] = (freq1[num] || 0) + 1;
    }
    
    for (const num of arr2) {
        freq2[num] = (freq2[num] || 0) + 1;
    }
    
    for (const key in freq1) {
        const squared = key ** 2;
        if (!(squared in freq2)) return false;
        if (freq1[key] !== freq2[squared]) return false;
    }
    
    return true;
}
```

**How it works:**
- Count frequency of each element in both arrays
- For each element in arr1, check if its square exists in arr2
- Verify frequencies match

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Sort and compare</summary>

```javascript
function areSquared(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const squared = arr1.map(x => x ** 2).sort((a, b) => a - b);
    const sorted2 = [...arr2].sort((a, b) => a - b);
    
    return JSON.stringify(squared) === JSON.stringify(sorted2);
}
```
O(n log n) time, O(n) space
</details>

<details>
<summary>Using Map</summary>

```javascript
function areSquared(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const freqMap = new Map();
    
    for (const num of arr1) {
        const squared = num ** 2;
        freqMap.set(squared, (freqMap.get(squared) || 0) + 1);
    }
    
    for (const num of arr2) {
        if (!freqMap.has(num) || freqMap.get(num) === 0) {
            return false;
        }
        freqMap.set(num, freqMap.get(num) - 1);
    }
    
    return true;
}
```
O(n) time, O(n) space
</details>

## Edge Cases

```javascript
areSquared([], [])                     // true
areSquared([1, 2], [1, 4])             // true
areSquared([1, 2, 2], [1, 4, 4])       // true
areSquared([1, 2], [1, 5])             // false
```

## Run Tests

```bash
node tests.js
```

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Frequency Counter | O(n) | O(n) |
| Sort & Compare | O(n log n) | O(n) |
| Map-based | O(n) | O(n) |

**Best Choice:** Frequency Counter - O(n) time, clean implementation

## Edge Cases

- Empty arrays: `[], []` → `true`
- Different lengths: `[1, 2], [1]` → `false`
- Negative numbers: `[-2, 2]` → `[4, 4]` → `true`
- Zero: `[0, 1]` → `[0, 1]` → `true`
- Duplicates: `[2, 2, 3]` → `[4, 4, 9]` → `true`
- Wrong frequency: `[1, 1]` → `[1]` → `false`

## Interview Follow-ups

1. **What if order matters?**

   ```javascript
   function areSquaredSameOrder(arr1, arr2) {
       if (arr1.length !== arr2.length) return false;
       
       for (let i = 0; i < arr1.length; i++) {
           if (arr1[i] ** 2 !== arr2[i]) return false;
       }
       
       return true;
   }
   ```

2. **What about cubic or nth power?**

   ```javascript
   function arePowered(arr1, arr2, power) {
       if (arr1.length !== arr2.length) return false;
       
       const freq1 = {};
       const freq2 = {};
       
       for (const num of arr1) {
           const powered = num ** power;
           freq1[powered] = (freq1[powered] || 0) + 1;
       }
       
       for (const num of arr2) {
           freq2[num] = (freq2[num] || 0) + 1;
       }
       
       return JSON.stringify(freq1) === JSON.stringify(freq2);
   }
   ```

3. **How to handle floating point precision?**

   ```javascript
   function areSquaredFloat(arr1, arr2, epsilon = 1e-10) {
       if (arr1.length !== arr2.length) return false;
       
       const sorted1 = arr1.map(x => x ** 2).sort((a, b) => a - b);
       const sorted2 = [...arr2].sort((a, b) => a - b);
       
       for (let i = 0; i < sorted1.length; i++) {
           if (Math.abs(sorted1[i] - sorted2[i]) > epsilon) {
               return false;
           }
       }
       
       return true;
   }
   ```

4. **What if you need to return the mapping?**

   ```javascript
   function getSquaredMapping(arr1, arr2) {
       if (arr1.length !== arr2.length) return null;
       
       const mapping = {};
       const used = new Set();
       
       for (const num of arr1) {
           const squared = num ** 2;
           const index = arr2.findIndex((val, idx) => 
               val === squared && !used.has(idx)
           );
           
           if (index === -1) return null;
           
           mapping[num] = squared;
           used.add(index);
       }
       
       return mapping;
   }
   ```

## Visual Explanation

```
Array 1:  [1, 2, 2, 3]
          ↓  ↓  ↓  ↓  (square each)
Expected: [1, 4, 4, 9]

Frequency Map for Array 1:
  1 → 1² = 1  (appears 1 time)
  2 → 2² = 4  (appears 2 times)
  3 → 3² = 9  (appears 1 time)

Array 2:  [9, 4, 1, 4]

Frequency Map for Array 2:
  1 → appears 1 time ✓
  4 → appears 2 times ✓
  9 → appears 1 time ✓

Result: MATCH! ✓
```

## Frequency Counter Pattern

This pattern is useful for many problems:

- Anagram detection
- Finding duplicates
- Subarray problems
- Two-sum variations

```javascript
// General template
function compareWithFrequency(arr1, arr2, transformFn) {
    if (arr1.length !== arr2.length) return false;
    
    const freq1 = {};
    const freq2 = {};
    
    for (const val of arr1) {
        const transformed = transformFn(val);
        freq1[transformed] = (freq1[transformed] || 0) + 1;
    }
    
    for (const val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    
    for (const key in freq1) {
        if (freq1[key] !== freq2[key]) return false;
    }
    
    return true;
}

// Usage
areSquared = (arr1, arr2) => compareWithFrequency(arr1, arr2, x => x ** 2);
```

## Practical Applications

- Data validation
- Test cases for mathematical functions
- Verifying transformations
- Quality assurance
- Algorithm verification

## Related Challenges

- Valid anagram
- Same frequency
- Isomorphic strings
- Group anagrams
- Find all anagrams

## Run Tests

```bash
node tests.js
```
