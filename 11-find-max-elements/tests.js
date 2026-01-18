/**
 * Test Suite for Find Max Elements Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Finding Max Elements');
console.log('========================================\n');

console.log('Array: [3, 7, 1, 9, 4, 2, 8]');
console.log('');
console.log('  3   7   1   9   4   2   8');
console.log('  ↓   ↓   ↓   ↓   ↓   ↓   ↓');
console.log('              ★ Max (9)');
console.log('          ★ 2nd (8)');
console.log('      ★ 3rd (7)');
console.log('');

console.log('\n========================================');
console.log('Testing: Find Maximum Element');
console.log('========================================\n');

// Test 1: Basic array
console.log('Test 1: Find maximum in basic array');
const arr1 = [3, 7, 1, 9, 4, 2, 8];
const max1 = Math.max(...arr1);
console.log('Array:', arr1);
console.log('Maximum:', max1);
console.log('Expected: 9');
console.log(`✓ Pass: ${max1 === 9}\n`);

// Test 2: Array with negative numbers
console.log('Test 2: Array with negative numbers');
const arr2 = [-5, -1, -10, -3, -7];
const max2 = Math.max(...arr2);
console.log('Array:', arr2);
console.log('Maximum:', max2);
console.log('Expected: -1');
console.log(`✓ Pass: ${max2 === -1}\n`);

// Test 3: Array with duplicates
console.log('Test 3: Array with duplicate max values');
const arr3 = [5, 10, 3, 10, 2, 10];
const max3 = Math.max(...arr3);
console.log('Array:', arr3);
console.log('Maximum:', max3);
console.log('Expected: 10\n');

// Test 4: Single element
console.log('Test 4: Single element array');
const arr4 = [42];
const max4 = Math.max(...arr4);
console.log('Array:', arr4);
console.log('Maximum:', max4);
console.log('Expected: 42');
console.log(`✓ Pass: ${max4 === 42}\n`);

console.log('\n========================================');
console.log('Testing: Find Second Maximum');
console.log('========================================\n');

function findSecondMax(arr) {
    const sorted = [...arr].sort((a, b) => b - a);
    // Remove duplicates and get second
    const unique = [...new Set(sorted)];
    return unique[1];
}

// Test 5: Second maximum
console.log('Test 5: Find second maximum');
const arr5 = [3, 7, 1, 9, 4, 2, 8];
const second5 = findSecondMax(arr5);
console.log('Array:', arr5);
console.log('Second Maximum:', second5);
console.log('Expected: 8');
console.log(`✓ Pass: ${second5 === 8}\n`);

// Test 6: With duplicates
console.log('Test 6: Second max with duplicates');
const arr6 = [10, 5, 10, 3, 8, 8];
const second6 = findSecondMax(arr6);
console.log('Array:', arr6);
console.log('Unique sorted: [10, 8, 5, 3]');
console.log('Second Maximum:', second6);
console.log('Expected: 8');
console.log(`✓ Pass: ${second6 === 8}\n`);

console.log('\n========================================');
console.log('Testing: Find Third Maximum');
console.log('========================================\n');

function findThirdMax(arr) {
    const sorted = [...arr].sort((a, b) => b - a);
    const unique = [...new Set(sorted)];
    return unique[2];
}

// Test 7: Third maximum
console.log('Test 7: Find third maximum');
const arr7 = [3, 7, 1, 9, 4, 2, 8];
const third7 = findThirdMax(arr7);
console.log('Array:', arr7);
console.log('Sorted unique: [9, 8, 7, 4, 3, 2, 1]');
console.log('Third Maximum:', third7);
console.log('Expected: 7');
console.log(`✓ Pass: ${third7 === 7}\n`);

// Test 8: Insufficient elements
console.log('Test 8: Array with less than 3 unique elements');
const arr8 = [5, 5, 3];
const third8 = findThirdMax(arr8);
console.log('Array:', arr8);
console.log('Unique: [5, 3]');
console.log('Third Maximum:', third8);
console.log('Expected: undefined (not enough unique elements)\n');

console.log('\n========================================');
console.log('Different Approaches');
console.log('========================================\n');

const testArr = [3, 7, 1, 9, 4, 2, 8];

console.log(`Test array: ${testArr}\n`);

// Method 1: Math.max
console.log('Method 1: Math.max(...arr)');
console.time('Math.max');
const method1 = Math.max(...testArr);
console.timeEnd('Math.max');
console.log(`Result: ${method1}\n`);

// Method 2: reduce
console.log('Method 2: Array.reduce()');
console.time('reduce');
const method2 = testArr.reduce((max, curr) => curr > max ? curr : max);
console.timeEnd('reduce');
console.log(`Result: ${method2}\n`);

// Method 3: sort
console.log('Method 3: Sort and pick last');
console.time('sort');
const method3 = [...testArr].sort((a, b) => a - b)[testArr.length - 1];
console.timeEnd('sort');
console.log(`Result: ${method3}\n`);

// Method 4: loop
console.log('Method 4: Simple loop');
console.time('loop');
let method4 = testArr[0];
for (let i = 1; i < testArr.length; i++) {
    if (testArr[i] > method4) method4 = testArr[i];
}
console.timeEnd('loop');
console.log(`Result: ${method4}\n`);

console.log('All methods found max:', method1);
console.log(`✓ All match: ${method1 === method2 && method2 === method3 && method3 === method4}\n`);

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌──────────────┬──────────┬──────────┐');
console.log('│ Method       │ Time     │ Space    │');
console.log('├──────────────┼──────────┼──────────┤');
console.log('│ Math.max     │ O(n)     │ O(1)     │');
console.log('│ reduce       │ O(n)     │ O(1)     │');
console.log('│ sort         │ O(n log n)│ O(n)    │');
console.log('│ loop         │ O(n)     │ O(1)     │');
console.log('└──────────────┴──────────┴──────────┘');
console.log('');
console.log('Best: reduce or loop for O(n) time, O(1) space\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Math.max(...arr) is most concise');
console.log('✓ reduce() is functional and clear');
console.log('✓ sort() is O(n log n) - avoid for just finding max');
console.log('✓ For second/third max, need to remove duplicates\n');
