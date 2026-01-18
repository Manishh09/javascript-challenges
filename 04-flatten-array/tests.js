/**
 * Test Suite for Flatten Array Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('ASCII Visualization');
console.log('========================================\n');

console.log('Input Array: [1, [2, [3, [4]], 5]]');
console.log('');
console.log('Structure:');
console.log('  Level 0:  [1, ─────────────────────]');
console.log('  Level 1:      [2, ──────────, 5]');
console.log('  Level 2:          [3, ────]');
console.log('  Level 3:              [4]');
console.log('');
console.log('Flattened: [1, 2, 3, 4, 5]');
console.log('');

console.log('\n========================================');
console.log('Testing: flattenUsingBuiltInFlat()');
console.log('========================================\n');

// Test 1: Basic nested array
console.log('Test 1: Basic nested array');
const test1 = flattenUsingBuiltInFlat([1, 2, [3, 4, [5, 6, [7, 8]]]], Infinity);
console.log('Input:  [1, 2, [3, 4, [5, 6, [7, 8]]]]');
console.log('Output:', test1);
console.log('Expected: [1, 2, 3, 4, 5, 6, 7, 8]');
console.log('');

// Test 2: Depth = 1
console.log('Test 2: Flatten with depth = 1');
const test2 = flattenUsingBuiltInFlat([1, 2, [3, 4, [5, 6]]], 1);
console.log('Input:  [1, 2, [3, 4, [5, 6]]]');
console.log('Output:', test2);
console.log('Expected: [1, 2, 3, 4, [5, 6]]');
console.log('');

// Test 3: Depth = 2
console.log('Test 3: Flatten with depth = 2');
const test3 = flattenUsingBuiltInFlat([1, 2, [3, 4, [5, 6, [7, 8]]]], 2);
console.log('Input:  [1, 2, [3, 4, [5, 6, [7, 8]]]]');
console.log('Output:', test3);
console.log('Expected: [1, 2, 3, 4, 5, 6, [7, 8]]');
console.log('');

// Test 4: Empty array
console.log('Test 4: Empty array');
const test4 = flattenUsingBuiltInFlat([]);
console.log('Input:  []');
console.log('Output:', test4);
console.log('Expected: undefined (no depth specified)');
console.log('');

// Test 5: Already flat array
console.log('Test 5: Already flat array');
const test5 = flattenUsingBuiltInFlat([1, 2, 3, 4, 5], Infinity);
console.log('Input:  [1, 2, 3, 4, 5]');
console.log('Output:', test5);
console.log('Expected: [1, 2, 3, 4, 5]');
console.log('');

console.log('\n========================================');
console.log('Testing: flattenUsingRecursion()');
console.log('========================================\n');

// Test 6: Basic nested array
console.log('Test 6: Basic nested array (recursion)');
const test6 = flattenUsingRecursion([1, 2, [3, 4, [5, 6, [7, 8]]]]);
console.log('Input:  [1, 2, [3, 4, [5, 6, [7, 8]]]]');
console.log('Output:', test6);
console.log('Expected: [1, 2, 3, 4, 5, 6, 7, 8]');
console.log('');

// Test 7: Deep nesting
console.log('Test 7: Very deep nesting');
const test7 = flattenUsingRecursion([1, [2, [3, [4, [5, [6, [7, [8]]]]]]]]);
console.log('Input:  [1, [2, [3, [4, [5, [6, [7, [8]]]]]]]]');
console.log('Output:', test7);
console.log('Expected: [1, 2, 3, 4, 5, 6, 7, 8]');
console.log('');

// Test 8: Mixed types
console.log('Test 8: Mixed types');
const test8 = flattenUsingRecursion([1, 'a', [2, 'b', [3, 'c']]]);
console.log('Input:  [1, "a", [2, "b", [3, "c"]]]');
console.log('Output:', test8);
console.log('Expected: [1, "a", 2, "b", 3, "c"]');
console.log('');

// Test 9: Empty nested arrays
console.log('Test 9: Empty nested arrays');
const test9 = flattenUsingRecursion([1, [], [2, [], [3]]]);
console.log('Input:  [1, [], [2, [], [3]]]');
console.log('Output:', test9);
console.log('Expected: [1, 2, 3]');
console.log('');

// Test 10: Array with null/undefined
console.log('Test 10: Array with null/undefined');
const test10 = flattenUsingRecursion([1, null, [2, undefined, [3]]]);
console.log('Input:  [1, null, [2, undefined, [3]]]');
console.log('Output:', test10);
console.log('Expected: [1, null, 2, undefined, 3]');
console.log('');

console.log('\n========================================');
console.log('Edge Cases & Performance');
console.log('========================================\n');

// Test 11: Large nested array
console.log('Test 11: Large nested array (performance test)');
const largeNested = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [8, [9, [10, 11]], 12],
    Array.from({ length: 100 }, (_, i) => i)
];
const startTime = Date.now();
const largeResult = flattenUsingRecursion(largeNested);
const endTime = Date.now();
console.log(`Elements in output: ${largeResult.length}`);
console.log(`Time taken: ${endTime - startTime}ms`);
console.log('');

// Test 12: Single element
console.log('Test 12: Single element array');
const test12 = flattenUsingRecursion([42]);
console.log('Input:  [42]');
console.log('Output:', test12);
console.log('Expected: [42]');
console.log('');

console.log('\n========================================');
console.log('Visual Comparison');
console.log('========================================\n');

const complexArray = [1, [2, 3], [[4, 5], 6], [[[7]]], 8];
console.log('Complex Input:', JSON.stringify(complexArray));
console.log('');
console.log('Flattening process:');
console.log('  Step 1: [1, [2, 3], [[4, 5], 6], [[[7]]], 8]');
console.log('  Step 2: [1, 2, 3, [[4, 5], 6], [[[7]]], 8]');
console.log('  Step 3: [1, 2, 3, [4, 5], 6, [[[7]]], 8]');
console.log('  Step 4: [1, 2, 3, 4, 5, 6, [[[7]]], 8]');
console.log('  Step 5: [1, 2, 3, 4, 5, 6, [[7]], 8]');
console.log('  Step 6: [1, 2, 3, 4, 5, 6, [7], 8]');
console.log('  Final:  [1, 2, 3, 4, 5, 6, 7, 8]');
console.log('');
console.log('Actual Output:', flattenUsingRecursion(complexArray));
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
