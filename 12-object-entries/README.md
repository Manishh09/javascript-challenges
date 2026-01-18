# Object Entries

## 📋 Problem Statement

Understand Object.entries() to convert an object into an array of [key, value] pairs, and Object.fromEntries() to convert back.

```javascript
const obj = { name: "John", age: 30 };

Input:  obj
Output: [["name", "John"], ["age", 30]]
```

## Solution

```javascript
const obj = { name: "Alice", age: 25 };
const entries = Object.entries(obj);
// [["name", "Alice"], ["age", 25]]

const newObj = Object.fromEntries(entries);
// { name: "Alice", age: 25 }
```

**How it works:**
- Object.entries() converts object to [key, value] pairs
- Object.fromEntries() converts pairs back to object
- Useful for iteration and transformation

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Filter object properties</summary>

```javascript
const user = { name: "Bob", age: 17, role: "student" };

const filtered = Object.fromEntries(
    Object.entries(user).filter(([key, value]) => typeof value === 'string')
);
// { name: "Bob", role: "student" }
```
O(n) time, O(n) space
</details>

<details>
<summary>Transform object values</summary>

```javascript
const prices = { apple: 1, banana: 2 };

const doubled = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
// { apple: 2, banana: 4 }
```
O(n) time, O(n) space
</details>

<details>
<summary>Swap keys and values</summary>

```javascript
const obj = { a: "1", b: "2" };

const swapped = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
);
// { "1": "a", "2": "b" }
```
O(n) time, O(n) space
</details>

## Edge Cases

```javascript
Object.entries({})                    // []
Object.entries({ a: 1 })              // [["a", 1]]
Object.fromEntries([])                // {}
```

## Run Tests

```bash
node tests.js
```

```javascript
const original = { a: 1, b: 2, c: 3 };

const swapped = Object.fromEntries(
    Object.entries(original).map(([key, value]) => [value, key])
);
// { 1: "a", 2: "b", 3: "c" }
```

### 5. Merge Objects with Transformation

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = Object.fromEntries([
    ...Object.entries(obj1),
    ...Object.entries(obj2)
]);
// { a: 1, b: 2, c: 3, d: 4 }
```

### 6. Sort Object by Keys

```javascript
const unsorted = { c: 3, a: 1, b: 2 };

const sorted = Object.fromEntries(
    Object.entries(unsorted).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
);
// { a: 1, b: 2, c: 3 }
```

### 7. Sort Object by Values

```javascript
const scores = { Alice: 85, Bob: 92, Charlie: 78 };

const sortedByScore = Object.fromEntries(
    Object.entries(scores).sort(([, a], [, b]) => b - a)
);
// { Bob: 92, Alice: 85, Charlie: 78 }
```

## Custom Implementation

```javascript
// Polyfill for Object.entries()
if (!Object.entries) {
    Object.entries = function(obj) {
        const entries = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                entries.push([key, obj[key]]);
            }
        }
        return entries;
    };
}

// Polyfill for Object.fromEntries()
if (!Object.fromEntries) {
    Object.fromEntries = function(entries) {
        const obj = {};
        for (const [key, value] of entries) {
            obj[key] = value;
        }
        return obj;
    };
}
```

## Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Object.entries() | O(n) | O(n) |
| Object.keys() | O(n) | O(n) |
| Object.values() | O(n) | O(n) |
| Object.fromEntries() | O(n) | O(n) |

Where n = number of properties

## Edge Cases

- Empty object: `{}` → `[]`
- Nested objects: Only top-level properties converted
- Symbol keys: Not included in entries
- Inherited properties: Not included (only own properties)
- Non-enumerable properties: Not included

## Interview Follow-ups

1. **What about nested objects?**

   ```javascript
   function deepEntries(obj, prefix = '') {
       return Object.entries(obj).flatMap(([key, value]) => {
           const fullKey = prefix ? `${prefix}.${key}` : key;
           if (typeof value === 'object' && value !== null) {
               return deepEntries(value, fullKey);
           }
           return [[fullKey, value]];
       });
   }
   ```

2. **How to handle Symbol keys?**

   ```javascript
   const symbolKey = Symbol('id');
   const obj = { [symbolKey]: 123, name: "John" };
   
   // Regular entries (no symbols)
   Object.entries(obj);  // [["name", "John"]]
   
   // Get symbol keys
   Object.getOwnPropertySymbols(obj);  // [Symbol(id)]
   ```

3. **What about prototype properties?**

   ```javascript
   function getAllEntries(obj) {
       const entries = [];
       for (const key in obj) {
           // Includes inherited properties
           entries.push([key, obj[key]]);
       }
       return entries;
   }
   ```

4. **Can you create a Map from an object?**

   ```javascript
   const obj = { a: 1, b: 2 };
   const map = new Map(Object.entries(obj));
   ```

## Comparison Table

```javascript
const user = { name: "John", age: 30, city: "NYC" };

Object.keys(user);     // ["name", "age", "city"]
Object.values(user);   // ["John", 30, "NYC"]
Object.entries(user);  // [["name", "John"], ["age", 30], ["city", "NYC"]]
```

## Practical Applications

- Object transformation
- Data mapping
- Object filtering
- Key-value pair operations
- Creating Maps from objects
- Sorting objects
- Object cloning with modifications

## Related Challenges

- Object destructuring
- Deep object manipulation
- Object comparison
- Object serialization

## Run Tests

```bash
node tests.js
```
