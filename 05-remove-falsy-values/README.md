# Remove Falsy Values

## 📋 Problem Statement

Given an array, remove all falsy values and return a new array containing only truthy values.

Falsy values in JavaScript: `false`, `0`, `""`, `null`, `undefined`, `NaN`

```javascript
Input:  [0, 1, false, 2, "", 3, null, undefined, NaN, 4]
Output: [1, 2, 3, 4]
```

## Solution

```javascript
function removeFalsy(arr) {
    return arr.filter(Boolean);
}
```

**How it works:**

- Boolean constructor acts as a function
- When passed to filter, it converts each element to boolean
- Only truthy values pass through

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Using filter with callback</summary>

```javascript
function removeFalsy(arr) {
    return arr.filter(item => item);
}
```

O(n) time, O(n) space - implicit boolean conversion
</details>

<details>
<summary>Using for loop</summary>

```javascript
function removeFalsy(arr) {
    const result = [];
    
    for (const item of arr) {
        if (item) {
            result.push(item);
        }
    }
    
    return result;
}
```

O(n) time, O(n) space
</details>

<details>
<summary>Using reduce</summary>

```javascript
function removeFalsy(arr) {
    return arr.reduce((acc, item) => {
        if (item) acc.push(item);
        return acc;
    }, []);
}
```

O(n) time, O(n) space
</details>

## Edge Cases

```javascript
removeFalsy([])                          // []
removeFalsy([false, null, undefined])    // []
removeFalsy([1, 2, 3])                   // [1, 2, 3]
removeFalsy([0, "", NaN])                // []
```

## Run Tests

```bash
node tests.js
```

```javascript
false       // Boolean false
0           // Number zero
""          // Empty string
null        // Null
undefined   // Undefined
NaN         // Not a Number
```

### Truthy Values (Everything else)

```javascript
true
1, 42, -5   // Non-zero numbers
"hello"     // Non-empty strings
[], {}      // Objects and arrays (even empty ones!)
function(){} // Functions
```

## Edge Cases

- Empty array: `[]` → `[]`
- All falsy: `[0, false, null]` → `[]`
- All truthy: `[1, 2, 3]` → `[1, 2, 3]`
- Mixed types: `[0, "0", false, "false"]` → `["0", "false"]`
- Empty objects/arrays: `[{}, []]` → `[{}, []]` (they're truthy!)

## Interview Follow-ups

1. **Why are empty arrays and objects truthy?**
   - Objects (including arrays) are always truthy in JavaScript
   - Only primitive values can be falsy

2. **How to remove only specific falsy values?**

   ```javascript
   // Remove only null and undefined
   arr.filter(item => item !== null && item !== undefined);
   
   // Remove only 0
   arr.filter(item => item !== 0);
   ```

3. **What's the difference between == false and !value?**

   ```javascript
   [] == false  // true (type coercion)
   ![]          // false ([] is truthy)
   ```

4. **Can you do this in-place?**
   - Not recommended (arrays should be immutable)
   - Better to return new array

## Practical Applications

- Clean user input
- Filter survey responses
- Remove empty form fields
- Sanitize API data
- Prepare data for validation

## Related Challenges

- Remove null values only
- Remove undefined values
- Compact arrays
- Filter by type

## Run Tests

```bash
node tests.js
```
