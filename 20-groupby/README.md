# GroupBy

## 📋 Problem Statement

Group an array of objects by a specific property value.

```javascript
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

Input:  groupBy(users, 'age')
Output: {
  25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  30: [{ name: 'Bob', age: 30 }]
}
```

## Solution

```javascript
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const keyValue = obj[key];
        if (!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(obj);
        return acc;
    }, {});
}
```

**How it works:**
- Initialize empty object as accumulator
- For each object, get the key value
- Create array if key doesn't exist
- Push object to appropriate array

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Using forEach</summary>

```javascript
function groupBy(arr, key) {
    const grouped = {};
    
    arr.forEach(obj => {
        const keyValue = obj[key];
        if (!grouped[keyValue]) {
            grouped[keyValue] = [];
        }
        grouped[keyValue].push(obj);
    });
    
    return grouped;
}
```
O(n) time, O(n) space
</details>

<details>
<summary>Using for loop</summary>

```javascript
function groupBy(arr, key) {
    const grouped = {};
    
    for (const obj of arr) {
        const keyValue = obj[key];
        grouped[keyValue] = grouped[keyValue] || [];
        grouped[keyValue].push(obj);
    }
    
    return grouped;
}
```
O(n) time, O(n) space
</details>

<details>
<summary>Using Map</summary>

```javascript
function groupBy(arr, key) {
    const map = new Map();
    
    for (const obj of arr) {
        const keyValue = obj[key];
        if (!map.has(keyValue)) {
            map.set(keyValue, []);
        }
        map.get(keyValue).push(obj);
    }
    
    return Object.fromEntries(map);
}
```
O(n) time, O(n) space
</details>

## Edge Cases

```javascript
groupBy([], 'age')                           // {}
groupBy([{age: 25}], 'age')                  // { 25: [{age: 25}] }
groupBy([{age: 25}, {age: 25}], 'age')       // { 25: [{age: 25}, {age: 25}] }
```

## Run Tests

```bash
node tests.js
```    return map;
}

// Or convert to object
function groupBy(arr, key) {
    const map = groupByMap(arr, key);
    return Object.fromEntries(map);
}
```

### Approach 5: Using Function as Key

```javascript
function groupBy(arr, fn) {
    return arr.reduce((acc, obj) => {
        const key = typeof fn === 'function' ? fn(obj) : obj[fn];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

// Usage
groupBy(users, user => user.age > 25 ? 'senior' : 'junior');
```

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| reduce() | O(n) | O(n) |
| forEach() | O(n) | O(n) |
| for loop | O(n) | O(n) |
| Map-based | O(n) | O(n) |

All approaches have same complexity - choice is style preference

**Best Choice:** reduce() - functional, concise

## Edge Cases

- Empty array: `[]` → `{}`
- Single group: All objects have same key value
- Missing key: Objects without the key property
- Null/undefined values: Handle appropriately
- Non-primitive keys: Use Map instead of object

## Interview Follow-ups

1. **What if you want to group by multiple keys?**

   ```javascript
   function groupByMultiple(arr, keys) {
       return arr.reduce((acc, obj) => {
           const key = keys.map(k => obj[k]).join('_');
           if (!acc[key]) {
               acc[key] = [];
           }
           acc[key].push(obj);
           return acc;
       }, {});
   }
   
   groupByMultiple(users, ['age', 'role']);
   // { '25_admin': [...], '30_user': [...], '25_user': [...] }
   ```

2. **How to count occurrences instead of grouping objects?**

   ```javascript
   function countBy(arr, key) {
       return arr.reduce((acc, obj) => {
           const keyValue = obj[key];
           acc[keyValue] = (acc[keyValue] || 0) + 1;
           return acc;
       }, {});
   }
   
   countBy(users, 'role');
   // { admin: 1, user: 2 }
   ```

3. **What about nested grouping?**

   ```javascript
   function nestedGroupBy(arr, keys) {
       if (keys.length === 0) return arr;
       
       const [firstKey, ...restKeys] = keys;
       const grouped = groupBy(arr, firstKey);
       
       if (restKeys.length === 0) return grouped;
       
       return Object.fromEntries(
           Object.entries(grouped).map(([key, value]) => [
               key,
               nestedGroupBy(value, restKeys)
           ])
       );
   }
   
   nestedGroupBy(users, ['role', 'age']);
   // { admin: { 25: [...] }, user: { 25: [...], 30: [...] } }
   ```

4. **How to sort groups?**

   ```javascript
   function groupByAndSort(arr, key, sortFn) {
       const grouped = groupBy(arr, key);
       
       return Object.fromEntries(
           Object.entries(grouped)
               .sort(([keyA], [keyB]) => sortFn ? sortFn(keyA, keyB) : keyA.localeCompare(keyB))
       );
   }
   ```

## Real-World Examples

### Example 1: Group Products by Category

```javascript
const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 999 },
    { id: 2, name: 'Shirt', category: 'clothing', price: 29 },
    { id: 3, name: 'Phone', category: 'electronics', price: 699 },
    { id: 4, name: 'Jeans', category: 'clothing', price: 49 }
];

const byCategory = groupBy(products, 'category');
// {
//   electronics: [{ id: 1, ... }, { id: 3, ... }],
//   clothing: [{ id: 2, ... }, { id: 4, ... }]
// }
```

### Example 2: Group Transactions by Date

```javascript
const transactions = [
    { id: 1, date: '2024-01-15', amount: 100 },
    { id: 2, date: '2024-01-15', amount: 50 },
    { id: 3, date: '2024-01-16', amount: 75 }
];

const byDate = groupBy(transactions, 'date');
```

### Example 3: Group Students by Grade

```javascript
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

const byGrade = groupBy(students, student => {
    if (student.score >= 90) return 'A';
    if (student.score >= 80) return 'B';
    return 'C';
});
// { A: [Bob], B: [Alice], C: [Charlie] }
```

## Native Support (Modern JavaScript)

```javascript
// Object.groupBy (ES2024)
const grouped = Object.groupBy(users, user => user.role);

// Map.groupBy (ES2024)
const groupedMap = Map.groupBy(users, user => user.role);

// Note: Check browser support before using
```

## Aggregation After Grouping

```javascript
function groupAndAggregate(arr, key, aggFn) {
    const grouped = groupBy(arr, key);
    
    return Object.fromEntries(
        Object.entries(grouped).map(([key, group]) => [
            key,
            aggFn(group)
        ])
    );
}

// Example: Average age by role
const avgByRole = groupAndAggregate(
    users,
    'role',
    group => group.reduce((sum, u) => sum + u.age, 0) / group.length
);
```

## Practical Applications

- Data analysis and reporting
- Analytics dashboards
- Organizing search results
- E-commerce product filtering
- User management
- Transaction categorization
- Log file analysis

## Related Challenges

- Get unique objects
- Count occurrences
- Partition array
- Index by key
- Pivot table creation

## Run Tests

```bash
node tests.js
```
