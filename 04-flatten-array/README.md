# Flatten Array Challenge

## 📋 Problem Statement Statement

Given a multi-dimensional (nested) array, flatten it into a single-dimensional array. The flattening can be done to a specific depth or completely (infinite depth).

## What is Array Flattening?

Array flattening is the process of converting a nested array structure into a single-level array by recursively extracting all elements.

### Visual Representation

```
Input:  [1, [2, [3, [4]], 5]]

Structure:
  Level 0:  [1, ─────────────────────]
  Level 1:      [2, ──────────, 5]
  Level 2:          [3, ────]
  Level 3:              [4]

Output: [1, 2, 3, 4, 5]
```

## Examples

```javascript
const nested = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// Flatten depth = 1
flattenUsingBuiltInFlat(nested, 1);
// Output: [1, 2, 3, 4, [5, 6, [7, 8]]]

// Flatten depth = 2
flattenUsingBuiltInFlat(nested, 2);
// Output: [1, 2, 3, 4, 5, 6, [7, 8]]

// Flatten completely (depth = Infinity)
flattenUsingBuiltInFlat(nested, Infinity);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

## Approaches

### 1. Built-in `flat()` Method

**Pros:**
- Simple one-liner
- Native performance
- Depth control

**Cons:**
- Requires ES2019+
- Less control over logic
- Can't customize behavior

```javascript
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]
```

### 2. Recursive with `reduce()`

**Pros:**
- Works in older environments
- Full control over logic
- Educational value

**Cons:**
- Stack overflow risk with deep nesting
- Slightly slower than native

```javascript
function flatten(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
}
```

### 3. Iterative with Stack

**Pros:**
- No recursion depth limit
- Predictable memory usage

**Cons:**
- More complex implementation
- Requires manual stack management

## Complexity Analysis

| Approach | Time | Space | Notes |
|----------|------|-------|-------|
| Built-in flat() | O(n) | O(n) | n = total elements |
| Recursive | O(n) | O(d) | d = max depth (call stack) |
| Iterative | O(n) | O(n) | Stack storage |

## Interview Questions

### Q1: What's the time complexity of flattening?
**A:** O(n) where n is the total number of elements across all levels. Each element is visited once.

### Q2: What's the maximum depth JavaScript recursion can handle?
**A:** Typically around 10,000-15,000 calls, varies by browser/environment. Use iterative approach for very deep nesting.

### Q3: How does `flat()` handle empty slots (sparse arrays)?
**A:** The built-in `flat()` removes empty slots:
```javascript
[1, , 3].flat(); // [1, 3]
```

### Q4: Can you flatten objects with nested arrays?
**A:** Yes, but requires custom logic to traverse object properties:
```javascript
const obj = { a: [1, [2]], b: { c: [3, [4]] } };
// Need recursive function to handle both objects and arrays
```

### Q5: What if the array contains other data types?
**A:** Non-array elements are kept as-is. Only arrays are flattened.

## Edge Cases to Handle

```javascript
// Empty array
flatten([]);  // []

// Already flat
flatten([1, 2, 3]);  // [1, 2, 3]

// Empty nested arrays
flatten([1, [], [2, [], [3]]]);  // [1, 2, 3]

// Mixed types
flatten([1, 'a', [2, 'b', [3, 'c']]]);  // [1, 'a', 2, 'b', 3, 'c']

// Null/undefined
flatten([1, null, [2, undefined, [3]]]);  // [1, null, 2, undefined, 3]
```

## Real-World Applications

1. **Data Processing**: Flatten nested API responses
2. **Tree Traversal**: Convert tree structures to lists
3. **CSV Export**: Flatten nested data for tabular format
4. **Search Operations**: Easier to search flat arrays
5. **Database Queries**: Flatten join results

## Files in This Challenge

| File | Description | Approach |
|------|-------------|----------|
| `flatten-array.js` | Main implementations | Built-in + Recursive |
| `flatten-array-using-spread.js` | Using spread operator | Iterative |
| `flatten-array-using-forloop.js` | Traditional loops | Iterative |
| `notes.md` | Explanation | Documentation |
| `tests.js` | Comprehensive tests | Testing |

## Performance Tips

✅ **DO:**
- Use built-in `flat()` for modern environments
- Consider max depth when choosing approach
- Handle edge cases (empty arrays, null values)
- Test with realistic data sizes

❌ **DON'T:**
- Use recursion for very deep nesting (>1000 levels)
- Forget to handle non-array elements
- Mutate the original array
- Assume all elements are arrays

## Related Challenges

- **Array Manipulation**: map, filter, reduce
- **Recursion**: Fibonacci, factorial
- **Tree Traversal**: DFS, BFS

## Benchmark Example

```javascript
const deeply Nested = [[[[[[[[[[[1, 2]]]]]]]]]]];

// Built-in (fastest)
console.time('flat');
deeplyNested.flat(Infinity);
console.timeEnd('flat');  // ~0.1ms

// Recursive (moderate)
console.time('recursive');
flattenRecursive(deeplyNested);
console.timeEnd('recursive');  // ~0.3ms
```

## Further Learning

- [MDN: Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- Understanding recursion and call stack
- Tree data structures and traversal
- Functional programming with reduce
