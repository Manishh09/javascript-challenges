# Array Polyfills Challenge

## 📋 Problem Statement Statement

Implement custom versions of JavaScript's built-in array methods (`map`, `filter`, `reduce`) to understand how they work internally. These polyfills replicate the behavior of native array methods.

## What are Polyfills?

A **polyfill** is code that provides modern functionality to older browsers/environments that don't natively support it. Writing polyfills helps you deeply understand how methods work.

## Methods to Implement

### 1. Array.prototype.map()

**Purpose**: Transforms each element in an array and returns a new array.

```javascript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

**Signature**:
```javascript
array.map(callback(element, index, array), thisArg)
```

### 2. Array.prototype.filter()

**Purpose**: Returns a new array with elements that pass a test.

```javascript
[1, 2, 3, 4].filter(x => x > 2); // [3, 4]
```

**Signature**:
```javascript
array.filter(callback(element, index, array), thisArg)
```

### 3. Array.prototype.reduce()

**Purpose**: Reduces an array to a single value by applying a function.

```javascript
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0); // 10
```

**Signature**:
```javascript
array.reduce(callback(accumulator, element, index, array), initialValue)
```

## Key Concepts

### 1. **Prototype Chain**
- Methods added to `Array.prototype` are available on all arrays
- Use `this` to reference the array being operated on

### 2. **Callback Parameters**
All three methods receive:
- `element`: Current element being processed
- `index`: Index of current element
- `array`: The array being operated on

### 3. **this Context**
- Callbacks can have a custom `this` value (optional `thisArg`)
- Arrow functions don't respect `thisArg`

## Important Edge Cases

### Map & Filter:
- ✅ Empty arrays → return empty arrays
- ✅ Sparse arrays → skip empty slots
- ✅ `this` context preservation

### Reduce:
- ✅ **No initial value + empty array** → throw `TypeError`
- ✅ **No initial value + 1 element** → return that element
- ✅ **No initial value** → use first element, start at index 1
- ✅ **Falsy values (0, false, "")** → must handle correctly

## Common Mistakes

❌ **Wrong**:
```javascript
Array.prototype.customReduce = function(cb, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        // BUG: This fails when acc is 0, false, or ""
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}
```

✅ **Correct**:
```javascript
Array.prototype.customReduce = function(cb, initialValue) {
    let acc = initialValue;
    let startIndex = 0;
    
    if (initialValue === undefined) {
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        acc = this[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}
```

## Interview Questions

### Q1: Why use `call` or `apply` with polyfills?
**A:** To ensure the callback receives the correct `this` context when `thisArg` is provided.

### Q2: What happens if you call `reduce()` on an empty array with no initial value?
**A:** It throws a `TypeError: Reduce of empty array with no initial value`

### Q3: How do native methods handle sparse arrays?
**A:** They skip empty slots entirely (holes in arrays).

### Q4: What's the difference between `map()` and `forEach()`?
**A:** 
- `map()` returns a new array
- `forEach()` returns `undefined` and is used for side effects

### Q5: Can you modify the original array inside the callback?
**A:** Yes, but it's not recommended and can lead to unexpected behavior.

## Complexity Analysis

| Method | Time | Space | Notes |
|--------|------|-------|-------|
| `map` | O(n) | O(n) | Creates new array |
| `filter` | O(n) | O(n) | Size ≤ original |
| `reduce` | O(n) | O(1) | Single value (usually) |

## Real-World Applications

### Map:
- Transform API response data
- Extract specific properties from objects
- Convert data types

### Filter:
- Search/query operations
- Validation results
- Remove invalid data

### Reduce:
- Calculate sums, products, averages
- Group data
- Flatten arrays
- Build objects from arrays

## Testing Your Implementation

```javascript
// Test with edge cases
[].customMap(x => x * 2);              // []
[1, 2, 3].customFilter(x => x > 5);    // []
[0, 1, 2].customReduce((a, b) => a + b, 0); // 3 (handles 0!)

// Test error handling
[].customReduce((a, b) => a + b);      // Should throw TypeError

// Test sparse arrays
[1, , 3].customMap(x => x * 2);        // Should skip empty slot
```

## Files in This Challenge

| File | Description |
|------|-------------|
| `map-filter-reduce-polyfills.js` | Custom implementations of all three methods |

## Best Practices

✅ **DO:**
- Check for `undefined` explicitly, not truthiness
- Handle empty arrays
- Preserve array length semantics
- Match native method behavior exactly

❌ **DON'T:**
- Use `if (acc)` to check initialization (fails for falsy values)
- Forget to throw errors for invalid inputs
- Modify the original array
- Assume non-sparse arrays

## Related Challenges

- **09-increment-and-reset**: Closures and state
- **Array methods**: forEach, find, findIndex, some, every
- **Advanced polyfills**: Promise, bind, call, apply

## Further Learning

- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- Understanding JavaScript prototype chain
