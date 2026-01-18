# Get Unique Objects

## 📋 Problem Statement

Remove duplicate objects from an array based on a specific property or the entire object structure.

```javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },  // Duplicate
];

Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```

## Solution

```javascript
function getUniqueByKey(arr, key) {
    const map = arr.reduce((acc, obj) => {
        if (!acc.has(obj[key])) {
            acc.set(obj[key], obj);
        }
        return acc;
    }, new Map());
    
    return Array.from(map.values());
}
```

**How it works:**

- Use Map with key as identifier
- First occurrence wins
- Efficient O(n) solution

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Using filter with findIndex</summary>

```javascript
function getUniqueByKey(arr, key) {
    return arr.filter((obj, index, self) =>
        index === self.findIndex(o => o[key] === obj[key])
    );
}
```

O(n²) time, O(n) space
</details>

<details>
<summary>Using Set with JSON.stringify</summary>

```javascript
function getUniqueObjects(arr) {
    const uniqueStrings = new Set(arr.map(obj => JSON.stringify(obj)));
    return Array.from(uniqueStrings).map(str => JSON.parse(str));
}
```

O(n) time, O(n) space - note: property order matters
</details>

<details>
<summary>Using for loop</summary>

```javascript
function getUniqueByKey(arr, key) {
    const seen = {};
    const unique = [];
    
    for (const obj of arr) {
        if (!seen[obj[key]]) {
            seen[obj[key]] = true;
            unique.push(obj);
        }
    }
    
    return unique;
}
```

O(n) time, O(n) space
</details>

## Edge Cases

```javascript
getUniqueByKey([], 'id')                           // []
getUniqueByKey([{id: 1}], 'id')                    // [{id: 1}]
getUniqueByKey([{id: 1}, {id: 1}, {id: 2}], 'id') // [{id: 1}, {id: 2}]
```

## Run Tests

```bash
node tests.js
```

        !self.slice(0, index).some(o => o[key] === obj[key])
    );
}

```

**How it works:**

- Check if key already seen in previous elements
- Keep only if not found before

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Set + JSON | O(n) | O(n) |
| filter + findIndex | O(n²) | O(n) |
| reduce + Map | O(n) | O(n) |
| for loop | O(n) | O(n) |
| some() | O(n²) | O(n) |

**Best Choice:** reduce() with Map - O(n) time, efficient

## Edge Cases

- Empty array: `[]` → `[]`
- No duplicates: Return original
- All duplicates: Return single object
- Different properties same key: First occurrence wins
- Null/undefined values: Handle appropriately
- Nested objects: Need deep comparison

## Interview Follow-ups

1. **What about multiple keys for uniqueness?**

   ```javascript
   function getUniqueByKeys(arr, keys) {
       const map = new Map();
       
       for (const obj of arr) {
           const key = keys.map(k => obj[k]).join('|');
           if (!map.has(key)) {
               map.set(key, obj);
           }
       }
       
       return Array.from(map.values());
   }
   
   // Usage
   getUniqueByKeys(users, ['firstName', 'lastName']);
   ```

1. **How to handle deep object comparison?**

   ```javascript
   function deepEqual(obj1, obj2) {
       return JSON.stringify(obj1) === JSON.stringify(obj2);
       // Or use lodash: _.isEqual(obj1, obj2)
   }
   
   function getUniqueDeep(arr) {
       return arr.filter((obj, index, self) =>
           index === self.findIndex(o => deepEqual(o, obj))
       );
   }
   ```

2. **What if you want last occurrence instead of first?**

   ```javascript
   function getUniqueLast(arr, key) {
       const map = new Map();
       
       // Iterate and overwrite (last wins)
       for (const obj of arr) {
           map.set(obj[key], obj);
       }
       
       return Array.from(map.values());
   }
   ```

3. **How to merge objects with same key?**

   ```javascript
   function mergeByKey(arr, key) {
       const map = new Map();
       
       for (const obj of arr) {
           if (map.has(obj[key])) {
               // Merge with existing
               map.set(obj[key], { ...map.get(obj[key]), ...obj });
           } else {
               map.set(obj[key], obj);
           }
       }
       
       return Array.from(map.values());
   }
   
   // Example:
   const items = [
       { id: 1, name: 'John', age: 30 },
       { id: 1, city: 'NYC' },
       { id: 2, name: 'Jane' }
   ];
   mergeByKey(items, 'id');
   // [{ id: 1, name: 'John', age: 30, city: 'NYC' }, { id: 2, name: 'Jane' }]
   ```

## Group By vs Unique

```javascript
// Get Unique - removes duplicates
function getUnique(arr, key) {
    // Returns one object per unique key value
}

// Group By - groups duplicates
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const keyValue = obj[key];
        if (!acc[keyValue]) acc[keyValue] = [];
        acc[keyValue].push(obj);
        return acc;
    }, {});
}

// Example:
const users = [
    { id: 1, role: 'admin' },
    { id: 2, role: 'user' },
    { id: 3, role: 'admin' }
];

getUnique(users, 'role');
// [{ id: 1, role: 'admin' }, { id: 2, role: 'user' }]

groupBy(users, 'role');
// {
//   admin: [{ id: 1, role: 'admin' }, { id: 3, role: 'admin' }],
//   user: [{ id: 2, role: 'user' }]
// }
```

## Visual Explanation

```
Original Array:
[
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },  ← Duplicate id: 1
  { id: 3, name: 'Bob' }
]

Using Map (key = 'id'):
  Map {
    1 → { id: 1, name: 'John' }  ← First occurrence stored
    2 → { id: 2, name: 'Jane' }
    3 → { id: 3, name: 'Bob' }
  }

Result (unique by id):
[
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
]
```

## Practical Applications

- Remove duplicate users/records
- Deduplicate API responses
- User preference merging
- Shopping cart items
- Database query results
- Event deduplication

## Performance Tips

```javascript
// For large arrays, Map-based is fastest
const LARGE_SIZE = 10000;
const largeArray = Array.from({ length: LARGE_SIZE }, (_, i) => ({
    id: Math.floor(Math.random() * 5000),
    name: `User${i}`
}));

console.time('Map-based');
getUniqueByKeyMap(largeArray, 'id');
console.timeEnd('Map-based');

console.time('filter-findIndex');
getUniqueByKeyFilter(largeArray, 'id');
console.timeEnd('filter-findIndex');

// Map-based is significantly faster!
```

## Related Challenges

- Group by property
- Find duplicates
- Merge objects
- Deep object comparison
- Array intersection/union

## Run Tests

```bash
node tests.js
```
