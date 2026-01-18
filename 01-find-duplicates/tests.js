/**
 * Test Suite for Find Duplicates Challenge
 * 
 * Run this file: node tests.js
 */

// Import functions (assuming they're exported or defined here)
// For now, copy the functions or run this file with them included

/**
 * Test Helper Function
 */
function runTest(testName, actual, expected) {
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(`${passed ? '✓' : '✗'} ${testName}`);
    if (!passed) {
        console.log(`  Expected: ${JSON.stringify(expected)}`);
        console.log(`  Actual: ${JSON.stringify(actual)}`);
    }
    return passed;
}

console.log('\n========================================');
console.log('Testing: containsDuplicates()');
console.log('========================================\n');

// Test 1: Array with duplicates
runTest(
    'Should return true for array with duplicates',
    containsDuplicates([1, 2, 3, 1, 1, 1]),
    true
);

// Test 2: Array without duplicates
runTest(
    'Should return false for array without duplicates',
    containsDuplicates([1, 2, 3, 4, 5]),
    false
);

// Test 3: Empty array
runTest(
    'Should return false for empty array',
    containsDuplicates([]),
    false
);

// Test 4: Single element
runTest(
    'Should return false for single element',
    containsDuplicates([1]),
    false
);

// Test 5: All duplicates
runTest(
    'Should return true when all elements are same',
    containsDuplicates([5, 5, 5, 5]),
    true
);

// Test 6: String duplicates
runTest(
    'Should handle string duplicates',
    containsDuplicates(['a', 'b', 'c', 'a']),
    true
);

// Test 7: Mixed types
runTest(
    'Should handle mixed types',
    containsDuplicates([1, '1', 2, 2]),
    true
);

// Test 8: Null and undefined
runTest(
    'Should handle null values',
    containsDuplicates([null, null, undefined]),
    true
);

console.log('\n========================================');
console.log('Testing: findDuplicates()');
console.log('========================================\n');

// Test 9: Find duplicate elements
console.log('Test: Find duplicate elements [1, 2, 3, 1, 1, 1]');
const result1 = findDuplicates([1, 2, 3, 1, 1, 1]);
console.log('Result:', result1);
console.log('Duplicates found:', result1.duplicates);

// Test 10: No duplicates
console.log('\nTest: No duplicates [1, 2, 3, 4, 5]');
const result2 = findDuplicates([1, 2, 3, 4, 5]);
console.log('Result:', result2);
console.log('Duplicates found:', result2.duplicates);

// Test 11: Empty array
console.log('\nTest: Empty array []');
const result3 = findDuplicates([]);
console.log('Result:', result3);
console.log('Duplicates found:', result3.duplicates);

// Test 12: Multiple duplicates
console.log('\nTest: Multiple different duplicates [1, 2, 2, 3, 3, 3]');
const result4 = findDuplicates([1, 2, 2, 3, 3, 3]);
console.log('Result:', result4);
console.log('Duplicates found:', result4.duplicates);

// Test 13: String duplicates
console.log('\nTest: String duplicates ["a", "b", "a", "c", "b"]');
const result5 = findDuplicates(["a", "b", "a", "c", "b"]);
console.log('Result:', result5);
console.log('Duplicates found:', result5.duplicates);

console.log('\n========================================');
console.log('Edge Cases');
console.log('========================================\n');

// Test 14: Large array
console.log('Test: Large array with 1000 elements');
const largeArray = Array.from({ length: 1000 }, (_, i) => i % 100);
const startTime = Date.now();
const largeResult = containsDuplicates(largeArray);
const endTime = Date.now();
console.log(`Result: ${largeResult} (Time: ${endTime - startTime}ms)`);

// Test 15: Objects (by reference)
console.log('\nTest: Object duplicates (by reference)');
const obj1 = { id: 1 };
const obj2 = { id: 1 };
console.log('Same reference:', containsDuplicates([obj1, obj1]));
console.log('Different reference (same value):', containsDuplicates([obj1, obj2]));

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
