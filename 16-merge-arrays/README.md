# Merge Arrays

## 📋 Problem Statement

Combine two or more arrays into a single array.

```javascript
Input:  [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
```

## Solution

```javascript
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
```

**How it works:**
- Spread operator unpacks arrays
- Creates new array with all elements
- Modern, clean syntax

**Complexity:** O(n + m) time, O(n + m) space

## Alternative Approaches

<details>
<summary>Using concat</summary>

```javascript
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Multiple arrays
const merged = arr1.concat(arr2, arr3, arr4);
```
O(n + m) time, O(n + m) space
</details>

<details>
<summary>Merge with unique values</summary>

```javascript
function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
```
O(n + m) time, O(n + m) space
</details>

<details>
<summary>Merge sorted arrays</summary>

```javascript
function mergeSorted(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);
    
    return result;
}
```
O(n + m) time, O(n + m) space - efficient for sorted arrays
</details>

## Edge Cases

```javascript
mergeArrays([], [])               // []
mergeArrays([1], [2])             // [1, 2]
mergeUnique([1, 2], [2, 3])       // [1, 2, 3]
```

## Run Tests

```bash
node tests.js
```

```javascript
function mergeMultiple(...arrays) {
    return arrays.reduce((acc, arr) => acc.concat(arr), []);
}

// Usage
mergeMultiple([1, 2], [3, 4], [5, 6]);  // [1, 2, 3, 4, 5, 6]
```

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Spread operator | O(n + m) | O(n + m) |
| concat() | O(n + m) | O(n + m) |
| Merge sorted | O(n + m) | O(n + m) |
| Merge unique | O(n + m) | O(n + m) |
| Multiple arrays | O(total elements) | O(total elements) |

Where n, m are array lengths

**Best Choice:**

- Simple merge: Spread operator (modern, clean)
- Sorted arrays: Two-pointer merge (maintains order)
- Remove duplicates: Set-based approach

## Edge Cases

- Empty arrays: `[] + [1, 2]` → `[1, 2]`
- Both empty: `[] + []` → `[]`
- Different types: `[1, 2] + ["a", "b"]` → `[1, 2, "a", "b"]`
- Nested arrays: Need flatten if required
- Duplicates: Handle with Set if needed

## Interview Follow-ups

1. **How to merge n sorted arrays?**

   ```javascript
   function mergeKSortedArrays(arrays) {
       // Using min heap for efficient merging
       // Or simple approach:
       return arrays.flat().sort((a, b) => a - b);
       
       // Efficient approach:
       while (arrays.length > 1) {
           const merged = [];
           for (let i = 0; i < arrays.length; i += 2) {
               if (i + 1 < arrays.length) {
                   merged.push(mergeSortedArrays(arrays[i], arrays[i + 1]));
               } else {
                   merged.push(arrays[i]);
               }
           }
           arrays = merged;
       }
       return arrays[0];
   }
   ```

2. **What about merging objects arrays by key?**

   ```javascript
   function mergeArraysByKey(arr1, arr2, key) {
       const map = new Map();
       
       [...arr1, ...arr2].forEach(item => {
           map.set(item[key], item);
       });
       
       return Array.from(map.values());
   }
   
   // Example:
   const users1 = [{ id: 1, name: 'John' }];
   const users2 = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane' }];
   mergeArraysByKey(users1, users2, 'id');
   // [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane' }]
   ```

3. **How to merge and sort in one operation?**

   ```javascript
   function mergeAndSort(arr1, arr2) {
       return [...arr1, ...arr2].sort((a, b) => a - b);
   }
   
   // But for sorted arrays, merge is O(n+m) vs sort is O((n+m)log(n+m))
   // So use two-pointer merge for better performance!
   ```

4. **In-place merge (modify first array)?**

   ```javascript
   function mergeInPlace(arr1, arr2) {
       arr1.push(...arr2);
       return arr1;
   }
   
   // Or
   Array.prototype.push.apply(arr1, arr2);
   ```

## Performance Comparison

```javascript
const large1 = Array.from({ length: 10000 }, (_, i) => i);
const large2 = Array.from({ length: 10000 }, (_, i) => i + 10000);

console.time('Spread');
const a = [...large1, ...large2];
console.timeEnd('Spread');

console.time('concat');
const b = large1.concat(large2);
console.timeEnd('concat');

console.time('push with spread');
const c = [...large1];
c.push(...large2);
console.timeEnd('push with spread');

// Spread and concat are typically fastest
```

## Advanced Merging Scenarios

### Merge with Custom Comparator

```javascript
function mergeWithComparator(arr1, arr2, compareFn) {
    return [...arr1, ...arr2].sort(compareFn);
}

// Example: Merge users by age
const users1 = [{ name: 'John', age: 30 }];
const users2 = [{ name: 'Jane', age: 25 }];
mergeWithComparator(users1, users2, (a, b) => a.age - b.age);
```

### Merge and Group By

```javascript
function mergeAndGroup(arr1, arr2, key) {
    const merged = [...arr1, ...arr2];
    return merged.reduce((acc, item) => {
        const groupKey = item[key];
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
        return acc;
    }, {});
}
```

### Interleave Arrays

```javascript
function interleave(arr1, arr2) {
    const result = [];
    const maxLen = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLen; i++) {
        if (i < arr1.length) result.push(arr1[i]);
        if (i < arr2.length) result.push(arr2[i]);
    }
    
    return result;
}

interleave([1, 2, 3], ['a', 'b', 'c']);
// [1, 'a', 2, 'b', 3, 'c']
```

## Practical Applications

- Data aggregation
- Merging API responses
- Combining user preferences
- Merge sort algorithm
- Database result combining
- Stream merging

## Related Challenges

- Intersection of arrays
- Union of arrays
- Difference of arrays
- Flatten nested arrays
- Zip arrays

## Run Tests

```bash
node tests.js
```
