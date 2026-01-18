# Find Duplicates

## 📋 Problem Statement

Given an array of elements, find and return all duplicate elements (elements that appear more than once).

**Example:**

```javascript
Input:  [1, 2, 3, 2, 4, 3, 5]
Output: [2, 3]
```

## Solution

```javascript
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    
    return [...duplicates];
}
```

**How it works:**
- Track seen elements in one Set
- When element is already in `seen`, add to `duplicates`
- Return duplicates as array

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Using frequency map</summary>

```javascript
function findDuplicates(arr) {
    const frequency = {};
    
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    return Object.keys(frequency)
        .filter(key => frequency[key] > 1)
        .map(Number);
}
```
O(n) time, O(n) space
</details>

<details>
<summary>Using indexOf/lastIndexOf</summary>

```javascript
function findDuplicates(arr) {
    return arr.filter((item, index) => 
        arr.indexOf(item) !== arr.lastIndexOf(item) && 
        arr.indexOf(item) === index
    );
}
```
O(n²) time, O(1) space - slower but no extra space
</details>

## Edge Cases

```javascript
findDuplicates([])              // []
findDuplicates([1])             // []
findDuplicates([1, 1, 1])       // [1]
findDuplicates([1, 2, 3])       // []
```

## Run Tests

```bash
node tests.js
```
