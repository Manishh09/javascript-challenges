# Extract Values by Type

## 📋 Problem Statement

Given an array of mixed data types, extract and return only values of a specific type.

```javascript
Input:  [1, "hello", true, 2, "world", false, 3]
Type:   "number"
Output: [1, 2, 3]
```

## Solution

```javascript
function extractByType(arr, type) {
    return arr.filter(item => typeof item === type);
}
```

**How it works:**

- Use typeof operator to check type
- Filter returns only matching types
- Works for: string, number, boolean, undefined, function, symbol

**Complexity:** O(n) time, O(k) space

## Alternative Approaches

<details>
<summary>Using reduce</summary>

```javascript
function extractByType(arr, type) {
    return arr.reduce((acc, item) => {
        if (typeof item === type) acc.push(item);
        return acc;
    }, []);
}
```

O(n) time, O(k) space
</details>

<details>
<summary>Extract specific types</summary>

```javascript
// Extract only numbers
function extractNumbers(arr) {
    return arr.filter(item => typeof item === 'number' && !isNaN(item));
}

// Extract only arrays
function extractArrays(arr) {
    return arr.filter(item => Array.isArray(item));
}
```

O(n) time, O(k) space
</details>

## Edge Cases

```javascript
extractByType([], "number")                    // []
extractByType([1, "2", 3], "number")          // [1, 3]
extractByType([null, {}, []], "object")       // [null, {}, []] (typeof quirk)
```

## Run Tests

```bash
node tests.js
```

- Empty array: `[]` → `[]`
- No matches: `[1, 2, 3]` with type "string" → `[]`
- All match: `[1, 2, 3]` with type "number" → `[1, 2, 3]`
- NaN: `typeof NaN === "number"` → `true`
- null: `typeof null === "object"` → `true`
- Arrays: `typeof [] === "object"` → `true`

## Interview Follow-ups

1. **How to distinguish between arrays and objects?**

   ```javascript
   Array.isArray(value)  // Best way
   value instanceof Array
   Object.prototype.toString.call(value) === '[object Array]'
   ```

2. **How to handle null?**

   ```javascript
   function extractObjects(arr) {
       return arr.filter(item => 
           typeof item === 'object' && 
           item !== null && 
           !Array.isArray(item)
       );
   }
   ```

3. **What about checking for NaN?**

   ```javascript
   function extractValidNumbers(arr) {
       return arr.filter(item => 
           typeof item === 'number' && !isNaN(item)
       );
   }
   ```

4. **Can you group by type instead?**

   ```javascript
   function groupByType(arr) {
       return arr.reduce((acc, item) => {
           const type = typeof item;
           if (!acc[type]) acc[type] = [];
           acc[type].push(item);
           return acc;
       }, {});
   }
   ```

## Advanced Type Checking

```javascript
// More precise type checking
function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    return typeof value;
}

function extractByPreciseType(arr, type) {
    return arr.filter(item => getType(item) === type);
}
```

## Practical Applications

- Data validation
- API response filtering
- Type-specific processing
- Form data sanitization
- Schema validation

## Related Challenges

- Group values by type
- Validate data types
- Type conversion
- Type guards in TypeScript

## Run Tests

```bash
node tests.js
```
