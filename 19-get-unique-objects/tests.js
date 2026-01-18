/**
 * Test Suite for Get Unique Objects Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Get Unique Objects');
console.log('========================================\n');

console.log('Problem: Remove duplicate objects from an array');
console.log('');
console.log('Input: [');
console.log('  { id: 1, name: "John" },');
console.log('  { id: 2, name: "Jane" },');
console.log('  { id: 1, name: "John" },  ← Duplicate!');
console.log('  { id: 3, name: "Bob" }');
console.log(']');
console.log('');
console.log('Output: [');
console.log('  { id: 1, name: "John" },');
console.log('  { id: 2, name: "Jane" },');
console.log('  { id: 3, name: "Bob" }');
console.log(']');
console.log('');

console.log('\n========================================');
console.log('Testing: Using Set with JSON.stringify');
console.log('========================================\n');

function uniqueObjectsSet(arr) {
    const uniqueStrings = new Set(arr.map(obj => JSON.stringify(obj)));
    return Array.from(uniqueStrings).map(str => JSON.parse(str));
}

// Test 1: Basic duplicate removal
console.log('Test 1: Remove duplicate objects');
const arr1 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Bob' }
];
const result1 = uniqueObjectsSet(arr1);
console.log('Input:', arr1);
console.log('Output:', result1);
console.log('Expected: 3 unique objects');
console.log(`✓ Pass: ${result1.length === 3}\n`);

console.log('\n========================================');
console.log('Testing: Using filter() with findIndex');
console.log('========================================\n');

function uniqueObjectsFilter(arr, key) {
    return arr.filter((obj, index, self) =>
        index === self.findIndex(o => o[key] === obj[key])
    );
}

// Test 2: Filter by unique key
console.log('Test 2: Filter by unique id');
const arr2 = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 1, name: 'Johnny', age: 28 },
    { id: 3, name: 'Bob', age: 35 }
];
const result2 = uniqueObjectsFilter(arr2, 'id');
console.log('Input:', arr2);
console.log('Filtering by: id');
console.log('Output:', result2);
console.log('Expected: 3 objects (first occurrence of each id)');
console.log(`✓ Pass: ${result2.length === 3 && result2[0].name === 'John'}\n`);

console.log('\n========================================');
console.log('Testing: Using reduce() with Map');
console.log('========================================\n');

function uniqueObjectsReduce(arr, key) {
    const map = arr.reduce((acc, obj) => {
        if (!acc.has(obj[key])) {
            acc.set(obj[key], obj);
        }
        return acc;
    }, new Map());
    
    return Array.from(map.values());
}

// Test 3: Using reduce with Map
console.log('Test 3: Reduce with Map');
const arr3 = [
    { email: 'john@test.com', name: 'John' },
    { email: 'jane@test.com', name: 'Jane' },
    { email: 'john@test.com', name: 'J. Doe' },
    { email: 'bob@test.com', name: 'Bob' }
];
const result3 = uniqueObjectsReduce(arr3, 'email');
console.log('Input:', arr3);
console.log('Filtering by: email');
console.log('Output:', result3);
console.log('Expected: 3 objects (unique emails)');
console.log(`✓ Pass: ${result3.length === 3}\n`);

console.log('\n========================================');
console.log('Testing: Manual loop (no Set)');
console.log('========================================\n');

function uniqueObjectsLoop(arr, key) {
    const unique = [];
    const seen = {};
    
    for (const obj of arr) {
        if (!seen[obj[key]]) {
            seen[obj[key]] = true;
            unique.push(obj);
        }
    }
    
    return unique;
}

// Test 4: Manual loop approach
console.log('Test 4: Manual loop without Set');
const arr4 = [
    { code: 'A1', product: 'Widget' },
    { code: 'B2', product: 'Gadget' },
    { code: 'A1', product: 'Widget Pro' },
    { code: 'C3', product: 'Tool' }
];
const result4 = uniqueObjectsLoop(arr4, 'code');
console.log('Input:', arr4);
console.log('Filtering by: code');
console.log('Output:', result4);
console.log('Expected: 3 objects (unique codes)');
console.log(`✓ Pass: ${result4.length === 3}\n`);

console.log('\n========================================');
console.log('Testing: Using some() method');
console.log('========================================\n');

function uniqueObjectsSome(arr, key) {
    return arr.filter((obj, index, self) => 
        !self.slice(0, index).some(o => o[key] === obj[key])
    );
}

// Test 5: Using some() method
console.log('Test 5: Using some() method');
const arr5 = [
    { userId: 101, status: 'active' },
    { userId: 102, status: 'inactive' },
    { userId: 101, status: 'pending' },
    { userId: 103, status: 'active' }
];
const result5 = uniqueObjectsSome(arr5, 'userId');
console.log('Input:', arr5);
console.log('Filtering by: userId');
console.log('Output:', result5);
console.log('Expected: 3 objects (unique userIds)');
console.log(`✓ Pass: ${result5.length === 3}\n`);

console.log('\n========================================');
console.log('Testing: Edge Cases');
console.log('========================================\n');

// Test 6: Empty array
console.log('Test 6: Empty array');
const arr6 = [];
const result6 = uniqueObjectsFilter(arr6, 'id');
console.log('Input: []');
console.log('Output:', result6);
console.log('Expected: []');
console.log(`✓ Pass: ${result6.length === 0}\n`);

// Test 7: No duplicates
console.log('Test 7: No duplicates');
const arr7 = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
];
const result7 = uniqueObjectsFilter(arr7, 'id');
console.log('Input:', arr7);
console.log('Output:', result7);
console.log('Expected: Same as input (all unique)');
console.log(`✓ Pass: ${result7.length === 3}\n`);

// Test 8: All duplicates
console.log('Test 8: All duplicates');
const arr8 = [
    { id: 1, name: 'Same' },
    { id: 1, name: 'Same' },
    { id: 1, name: 'Same' }
];
const result8 = uniqueObjectsFilter(arr8, 'id');
console.log('Input:', arr8);
console.log('Output:', result8);
console.log('Expected: 1 object');
console.log(`✓ Pass: ${result8.length === 1}\n`);

console.log('\n========================================');
console.log('Visual Comparison of Methods');
console.log('========================================\n');

const testData = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 1, value: 'c' },
    { id: 3, value: 'd' }
];

console.log('Test data:', testData);
console.log('');

console.log('Method 1: Set + JSON.stringify');
console.log('  Result:', uniqueObjectsSet(testData));

console.log('\nMethod 2: filter + findIndex');
console.log('  Result:', uniqueObjectsFilter(testData, 'id'));

console.log('\nMethod 3: reduce + Map');
console.log('  Result:', uniqueObjectsReduce(testData, 'id'));

console.log('\nMethod 4: Manual loop');
console.log('  Result:', uniqueObjectsLoop(testData, 'id'));

console.log('\nMethod 5: some()');
console.log('  Result:', uniqueObjectsSome(testData, 'id'));

console.log('');

console.log('\n========================================');
console.log('Performance Comparison');
console.log('========================================\n');

const largeArray = Array.from({ length: 1000 }, (_, i) => ({
    id: Math.floor(Math.random() * 500),
    name: `User${i}`,
    data: Math.random()
}));

console.log('Testing with 1000 objects (~500 unique):\n');

console.time('Set + JSON');
uniqueObjectsSet(largeArray);
console.timeEnd('Set + JSON');

console.time('filter + findIndex');
uniqueObjectsFilter(largeArray, 'id');
console.timeEnd('filter + findIndex');

console.time('reduce + Map');
uniqueObjectsReduce(largeArray, 'id');
console.timeEnd('reduce + Map');

console.time('Manual loop');
uniqueObjectsLoop(largeArray, 'id');
console.timeEnd('Manual loop');

console.log('\nNote: Map-based approaches are typically fastest\n');

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌──────────────────────┬──────────┬──────────┐');
console.log('│ Method               │ Time     │ Space    │');
console.log('├──────────────────────┼──────────┼──────────┤');
console.log('│ Set + JSON           │ O(n)     │ O(n)     │');
console.log('│ filter + findIndex   │ O(n²)    │ O(n)     │');
console.log('│ reduce + Map         │ O(n)     │ O(n)     │');
console.log('│ Manual loop          │ O(n)     │ O(n)     │');
console.log('│ some()               │ O(n²)    │ O(n)     │');
console.log('└──────────────────────┴──────────┴──────────┘');
console.log('');
console.log('Best: reduce + Map (O(n) time, clean code)\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Map-based approach is most efficient O(n)');
console.log('✓ filter + findIndex is clean but O(n²)');
console.log('✓ Specify which property defines uniqueness');
console.log('✓ Keep first occurrence by default\n');
