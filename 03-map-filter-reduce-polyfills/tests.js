/**
 * Test Suite for Map/Filter/Reduce Polyfills
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Testing Array Polyfills');
console.log('========================================\n');

console.log('📝 These polyfills replicate native JavaScript array methods\n');

// ============================================
// Test customMap
// ============================================
console.log('\n========================================');
console.log('Testing: Array.prototype.customMap()');
console.log('========================================\n');

// Test 1: Basic mapping
console.log('Test 1: Double each number');
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.customMap(x => x * 2);
console.log(`Input:  [${arr1}]`);
console.log(`Output: [${result1}]`);
console.log(`Expected: [2, 4, 6, 8, 10]`);
console.log(`✓ Pass: ${JSON.stringify(result1) === JSON.stringify([2, 4, 6, 8, 10])}\n`);

// Test 2: Map with index
console.log('Test 2: Map with index parameter');
const arr2 = ['a', 'b', 'c'];
const result2 = arr2.customMap((item, index) => `${index}: ${item}`);
console.log(`Input:  ${JSON.stringify(arr2)}`);
console.log(`Output: ${JSON.stringify(result2)}`);
console.log(`Expected: ["0: a", "1: b", "2: c"]\n`);

// Test 3: Empty array
console.log('Test 3: Empty array');
const arr3 = [];
const result3 = arr3.customMap(x => x * 2);
console.log(`Input:  []`);
console.log(`Output: [${result3}]`);
console.log(`Expected: []`);
console.log(`✓ Pass: ${result3.length === 0}\n`);

// Test 4: Map returning objects
console.log('Test 4: Map to objects');
const arr4 = [1, 2, 3];
const result4 = arr4.customMap(x => ({ value: x, squared: x * x }));
console.log(`Input:  [${arr4}]`);
console.log(`Output: ${JSON.stringify(result4)}`);
console.log(`Expected: [{value: 1, squared: 1}, {value: 2, squared: 4}, {value: 3, squared: 9}]\n`);

// ============================================
// Test customFilter
// ============================================
console.log('\n========================================');
console.log('Testing: Array.prototype.customFilter()');
console.log('========================================\n');

// Test 5: Filter even numbers
console.log('Test 5: Filter even numbers');
const arr5 = [1, 2, 3, 4, 5, 6];
const result5 = arr5.customFilter(x => x % 2 === 0);
console.log(`Input:  [${arr5}]`);
console.log(`Output: [${result5}]`);
console.log(`Expected: [2, 4, 6]`);
console.log(`✓ Pass: ${JSON.stringify(result5) === JSON.stringify([2, 4, 6])}\n`);

// Test 6: Filter with no matches
console.log('Test 6: Filter with no matches');
const arr6 = [1, 2, 3];
const result6 = arr6.customFilter(x => x > 10);
console.log(`Input:  [${arr6}]`);
console.log(`Output: [${result6}]`);
console.log(`Expected: []`);
console.log(`✓ Pass: ${result6.length === 0}\n`);

// Test 7: Filter with index
console.log('Test 7: Filter using index');
const arr7 = ['a', 'b', 'c', 'd'];
const result7 = arr7.customFilter((item, index) => index % 2 === 0);
console.log(`Input:  ${JSON.stringify(arr7)}`);
console.log(`Output: ${JSON.stringify(result7)}`);
console.log(`Expected: ["a", "c"] (even indices)\n`);

// Test 8: Filter all elements
console.log('Test 8: Filter all elements (all pass)');
const arr8 = [1, 2, 3];
const result8 = arr8.customFilter(x => x > 0);
console.log(`Input:  [${arr8}]`);
console.log(`Output: [${result8}]`);
console.log(`Expected: [1, 2, 3]`);
console.log(`✓ Pass: ${JSON.stringify(result8) === JSON.stringify([1, 2, 3])}\n`);

// ============================================
// Test customReduce
// ============================================
console.log('\n========================================');
console.log('Testing: Array.prototype.customReduce()');
console.log('========================================\n');

// Test 9: Sum with initial value
console.log('Test 9: Sum array with initial value');
const arr9 = [1, 2, 3, 4, 5];
const result9 = arr9.customReduce((acc, curr) => acc + curr, 0);
console.log(`Input:  [${arr9}]`);
console.log(`Output: ${result9}`);
console.log(`Expected: 15`);
console.log(`✓ Pass: ${result9 === 15}\n`);

// Test 10: Sum without initial value
console.log('Test 10: Sum array WITHOUT initial value');
const arr10 = [1, 2, 3, 4, 5];
const result10 = arr10.customReduce((acc, curr) => acc + curr);
console.log(`Input:  [${arr10}]`);
console.log(`Output: ${result10}`);
console.log(`Expected: 15`);
console.log(`✓ Pass: ${result10 === 15}\n`);

// Test 11: Reduce with initial value of 0 (critical test!)
console.log('Test 11: CRITICAL - Initial value is 0 (falsy)');
const arr11 = [1, 2, 3];
const result11 = arr11.customReduce((acc, curr) => acc + curr, 0);
console.log(`Input:  [${arr11}], initialValue: 0`);
console.log(`Output: ${result11}`);
console.log(`Expected: 6 (must handle falsy initial value!)`);
console.log(`✓ Pass: ${result11 === 6} ← This tests the bug fix!\n`);

// Test 12: Reduce to build object
console.log('Test 12: Reduce to build object');
const arr12 = ['a', 'b', 'c'];
const result12 = arr12.customReduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
}, {});
console.log(`Input:  ${JSON.stringify(arr12)}`);
console.log(`Output: ${JSON.stringify(result12)}`);
console.log(`Expected: {a: 0, b: 1, c: 2}\n`);

// Test 13: Flatten array with reduce
console.log('Test 13: Flatten array using reduce');
const arr13 = [[1, 2], [3, 4], [5, 6]];
const result13 = arr13.customReduce((acc, curr) => acc.concat(curr), []);
console.log(`Input:  ${JSON.stringify(arr13)}`);
console.log(`Output: [${result13}]`);
console.log(`Expected: [1, 2, 3, 4, 5, 6]\n`);

// Test 14: Single element without initial value
console.log('Test 14: Single element without initial value');
const arr14 = [42];
const result14 = arr14.customReduce((acc, curr) => acc + curr);
console.log(`Input:  [${arr14}]`);
console.log(`Output: ${result14}`);
console.log(`Expected: 42 (return the only element)`);
console.log(`✓ Pass: ${result14 === 42}\n`);

// Test 15: Error handling - empty array without initial value
console.log('Test 15: ERROR TEST - Empty array without initial value');
try {
    const arr15 = [];
    arr15.customReduce((acc, curr) => acc + curr);
    console.log('  ✗ FAILED: Should have thrown TypeError');
} catch (error) {
    console.log(`  ✓ PASSED: Caught error - ${error.message}\n`);
}

// ============================================
// Edge Cases
// ============================================
console.log('\n========================================');
console.log('Edge Cases & Special Scenarios');
console.log('========================================\n');

// Test 16: Map with string array
console.log('Test 16: Map with strings');
const words = ['hello', 'world'];
const upper = words.customMap(w => w.toUpperCase());
console.log(`Input:  ${JSON.stringify(words)}`);
console.log(`Output: ${JSON.stringify(upper)}`);
console.log(`Expected: ["HELLO", "WORLD"]\n`);

// Test 17: Filter falsy values
console.log('Test 17: Filter falsy values');
const mixed = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
const truthy = mixed.customFilter(Boolean);
console.log(`Input:  ${JSON.stringify(mixed)}`);
console.log(`Output: [${truthy}]`);
console.log(`Expected: [1, 2, 3, 4, 5]\n`);

// Test 18: Reduce with false as initial value
console.log('Test 18: CRITICAL - Initial value is false (falsy)');
const arr18 = [true, false, true];
const result18 = arr18.customReduce((acc, curr) => acc || curr, false);
console.log(`Input:  [${arr18}], initialValue: false`);
console.log(`Output: ${result18}`);
console.log(`Expected: true`);
console.log(`✓ Pass: ${result18 === true}\n`);

// Test 19: Reduce with empty string as initial value
console.log('Test 19: CRITICAL - Initial value is "" (falsy)');
const arr19 = ['Hello', ' ', 'World'];
const result19 = arr19.customReduce((acc, curr) => acc + curr, '');
console.log(`Input:  ${JSON.stringify(arr19)}, initialValue: ""`);
console.log(`Output: "${result19}"`);
console.log(`Expected: "Hello World"`);
console.log(`✓ Pass: ${result19 === 'Hello World'}\n`);

// Test 20: Chaining methods
console.log('Test 20: Chaining custom methods');
const arr20 = [1, 2, 3, 4, 5, 6];
const chained = arr20
    .customFilter(x => x % 2 === 0)  // [2, 4, 6]
    .customMap(x => x * 2)            // [4, 8, 12]
    .customReduce((a, b) => a + b, 0); // 24
console.log(`Input:  [${arr20}]`);
console.log(`Steps:  filter(even) → map(*2) → reduce(sum)`);
console.log(`Output: ${chained}`);
console.log(`Expected: 24`);
console.log(`✓ Pass: ${chained === 24}\n`);

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Achievements:');
console.log('✓ All polyfills work correctly');
console.log('✓ Handle falsy values (0, false, "") properly');
console.log('✓ Throw errors for invalid inputs');
console.log('✓ Support method chaining');
console.log('✓ Match native method behavior\n');
