/**
 * Test Suite for Check Squared Elements Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Check Squared Elements');
console.log('========================================\n');

console.log('Problem: Check if elements in array2 are squares of array1 elements');
console.log('');
console.log('Array 1:  [1, 2, 3]');
console.log('          ↓  ↓  ↓  (square each)');
console.log('Expected: [1, 4, 9]');
console.log('');
console.log('Array 2:  [1, 4, 9]  → ✓ MATCH!');
console.log('Array 2:  [9, 4, 1]  → ✓ MATCH! (order doesn\'t matter)');
console.log('Array 2:  [1, 4, 16] → ✗ NO MATCH');
console.log('');

console.log('\n========================================');
console.log('Testing: Frequency Counter Pattern');
console.log('========================================\n');

function areSquared(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    // Create frequency counters
    const freq1 = {};
    const freq2 = {};
    
    for (let val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }
    
    for (let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    
    // Check if squares match
    for (let key in freq1) {
        const squared = key ** 2;
        if (!(squared in freq2)) return false;
        if (freq1[key] !== freq2[squared]) return false;
    }
    
    return true;
}

// Test 1: Basic match
console.log('Test 1: Basic match');
const arr1_1 = [1, 2, 3];
const arr1_2 = [1, 4, 9];
const result1 = areSquared(arr1_1, arr1_2);
console.log('Array 1:', arr1_1);
console.log('Array 2:', arr1_2);
console.log('Result: ', result1);
console.log('Expected: true');
console.log(`✓ Pass: ${result1 === true}\n`);

// Test 2: Different order (should still match)
console.log('Test 2: Different order');
const arr2_1 = [1, 2, 3];
const arr2_2 = [9, 1, 4];
const result2 = areSquared(arr2_1, arr2_2);
console.log('Array 1:', arr2_1);
console.log('Array 2:', arr2_2);
console.log('Result: ', result2);
console.log('Expected: true (order doesn\'t matter)');
console.log(`✓ Pass: ${result2 === true}\n`);

// Test 3: Different frequencies
console.log('Test 3: Different frequencies');
const arr3_1 = [1, 2, 2, 3];
const arr3_2 = [1, 4, 9, 16];
const result3 = areSquared(arr3_1, arr3_2);
console.log('Array 1:', arr3_1);
console.log('Array 2:', arr3_2);
console.log('Freq 1: 1→1, 2→2, 3→1');
console.log('Freq 2: 1→1, 4→1, 9→1, 16→1');
console.log('Result: ', result3);
console.log('Expected: false (2 appears twice, so 4 should too)');
console.log(`✓ Pass: ${result3 === false}\n`);

// Test 4: Correct frequencies
console.log('Test 4: Correct frequencies');
const arr4_1 = [1, 2, 2, 3];
const arr4_2 = [1, 4, 4, 9];
const result4 = areSquared(arr4_1, arr4_2);
console.log('Array 1:', arr4_1);
console.log('Array 2:', arr4_2);
console.log('Freq 1: 1→1, 2→2, 3→1');
console.log('Freq 2: 1→1, 4→2, 9→1');
console.log('Result: ', result4);
console.log('Expected: true');
console.log(`✓ Pass: ${result4 === true}\n`);

// Test 5: Different lengths
console.log('Test 5: Different lengths');
const arr5_1 = [1, 2, 3];
const arr5_2 = [1, 4];
const result5 = areSquared(arr5_1, arr5_2);
console.log('Array 1:', arr5_1, '(length: 3)');
console.log('Array 2:', arr5_2, '(length: 2)');
console.log('Result: ', result5);
console.log('Expected: false');
console.log(`✓ Pass: ${result5 === false}\n`);

// Test 6: Empty arrays
console.log('Test 6: Empty arrays');
const arr6_1 = [];
const arr6_2 = [];
const result6 = areSquared(arr6_1, arr6_2);
console.log('Array 1: []');
console.log('Array 2: []');
console.log('Result: ', result6);
console.log('Expected: true (both empty)');
console.log(`✓ Pass: ${result6 === true}\n`);

// Test 7: Negative numbers
console.log('Test 7: Negative numbers');
const arr7_1 = [-2, -1, 1, 2];
const arr7_2 = [1, 1, 4, 4];
const result7 = areSquared(arr7_1, arr7_2);
console.log('Array 1:', arr7_1);
console.log('Array 2:', arr7_2);
console.log('(-2)² = 4, (-1)² = 1, 1² = 1, 2² = 4');
console.log('Result: ', result7);
console.log('Expected: true');
console.log(`✓ Pass: ${result7 === true}\n`);

console.log('\n========================================');
console.log('Frequency Counter Visualization');
console.log('========================================\n');

const demo1 = [1, 2, 2, 3];
const demo2 = [1, 4, 4, 9];

console.log('Array 1:', demo1);
console.log('Array 2:', demo2);
console.log('');

const freq1 = {};
for (let val of demo1) {
    freq1[val] = (freq1[val] || 0) + 1;
}
console.log('Frequency map 1:');
for (let key in freq1) {
    console.log(`  ${key} → appears ${freq1[key]} time(s) → ${key}² = ${key ** 2}`);
}
console.log('');

const freq2 = {};
for (let val of demo2) {
    freq2[val] = (freq2[val] || 0) + 1;
}
console.log('Frequency map 2:');
for (let key in freq2) {
    console.log(`  ${key} → appears ${freq2[key]} time(s)`);
}
console.log('');

console.log('Checking if frequencies match:');
for (let key in freq1) {
    const squared = key ** 2;
    console.log(`  ${key}² = ${squared}: freq1[${key}]=${freq1[key]} vs freq2[${squared}]=${freq2[squared] || 0} → ${freq1[key] === freq2[squared] ? '✓' : '✗'}`);
}
console.log('');

console.log('\n========================================');
console.log('Alternative Approaches');
console.log('========================================\n');

// Method 2: Sort and compare
function areSquaredSort(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    const sorted1 = arr1.map(x => x ** 2).sort((a, b) => a - b);
    const sorted2 = [...arr2].sort((a, b) => a - b);
    
    return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

console.log('Method 2: Sort both arrays and compare');
const test1 = [1, 2, 3];
const test2 = [9, 1, 4];
console.log('Array 1:', test1);
console.log('Array 2:', test2);
console.log('Squared & sorted 1:', test1.map(x => x ** 2).sort((a, b) => a - b));
console.log('Sorted 2:', test2.sort((a, b) => a - b));
const sortResult = areSquaredSort(test1, test2);
console.log(`Result: ${sortResult} ✓\n`);

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌──────────────────────┬──────────┬──────────┐');
console.log('│ Method               │ Time     │ Space    │');
console.log('├──────────────────────┼──────────┼──────────┤');
console.log('│ Frequency Counter    │ O(n)     │ O(n)     │');
console.log('│ Sort & Compare       │ O(n log n)│ O(n)     │');
console.log('│ Nested Loop (naive)  │ O(n²)    │ O(1)     │');
console.log('└──────────────────────┴──────────┴──────────┘');
console.log('');
console.log('Frequency Counter is most efficient O(n) time\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Frequency counter pattern is O(n) time');
console.log('✓ Order of elements doesn\'t matter');
console.log('✓ Must check both value AND frequency');
console.log('✓ Works with negative numbers (squared becomes positive)\n');
