/**
 * Test Suite for Remove Falsy Values Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Falsy Values');
console.log('========================================\n');

console.log('JavaScript Falsy Values:');
console.log('  false     - Boolean false');
console.log('  0         - Number zero');
console.log('  -0        - Negative zero');
console.log('  ""        - Empty string');
console.log('  null      - Null value');
console.log('  undefined - Undefined value');
console.log('  NaN       - Not a Number');
console.log('');
console.log('All other values are TRUTHY!\n');

console.log('\n========================================');
console.log('Testing: Remove Falsy Values');
console.log('========================================\n');

// Test 1: Mixed falsy and truthy values
console.log('Test 1: Mixed array');
const arr1 = [0, 1, false, 2, '', 3, null, 4, undefined, 5, NaN];
const result1 = arr1.filter(Boolean);
console.log('Input: ', arr1);
console.log('Output:', result1);
console.log('Expected: [1, 2, 3, 4, 5]');
console.log(`✓ Pass: ${JSON.stringify(result1) === JSON.stringify([1, 2, 3, 4, 5])}\n`);

// Test 2: All falsy values
console.log('Test 2: All falsy values');
const arr2 = [false, 0, '', null, undefined, NaN];
const result2 = arr2.filter(Boolean);
console.log('Input: ', arr2);
console.log('Output:', result2);
console.log('Expected: []');
console.log(`✓ Pass: ${result2.length === 0}\n`);

// Test 3: All truthy values
console.log('Test 3: All truthy values');
const arr3 = [1, 'hello', true, {}, [], 42];
const result3 = arr3.filter(Boolean);
console.log('Input: ', arr3);
console.log('Output:', result3);
console.log('Expected: Same as input');
console.log(`✓ Pass: ${result3.length === 6}\n`);

// Test 4: Empty array
console.log('Test 4: Empty array');
const arr4 = [];
const result4 = arr4.filter(Boolean);
console.log('Input: ', arr4);
console.log('Output:', result4);
console.log('Expected: []');
console.log(`✓ Pass: ${result4.length === 0}\n`);

// Test 5: Strings with spaces
console.log('Test 5: String edge cases');
const arr5 = ['', ' ', '  ', 'text', null];
const result5 = arr5.filter(Boolean);
console.log('Input: ', arr5);
console.log('Output:', result5);
console.log('Expected: [" ", "  ", "text"] (spaces are truthy!)');
console.log(`✓ Pass: ${result5.length === 3}\n`);

// Test 6: Numbers including zero
console.log('Test 6: Number edge cases');
const arr6 = [0, -0, 0.0, 1, -1, 0.5, -0.5];
const result6 = arr6.filter(Boolean);
console.log('Input: ', arr6);
console.log('Output:', result6);
console.log('Expected: [1, -1, 0.5, -0.5] (0 and -0 are falsy)\n');

// Test 7: Objects and arrays
console.log('Test 7: Objects and arrays (always truthy)');
const arr7 = [{}, [], { empty: undefined }, [null], false];
const result7 = arr7.filter(Boolean);
console.log('Input: ', '[{}, [], { empty: undefined }, [null], false]');
console.log('Output: First 4 items (objects/arrays are truthy)');
console.log(`✓ Pass: ${result7.length === 4}\n`);

console.log('\n========================================');
console.log('Different Approaches');
console.log('========================================\n');

console.log('Method 1: Using filter with Boolean');
const method1 = [0, 1, false, 2, '', 3].filter(Boolean);
console.log('  arr.filter(Boolean)');
console.log('  Result:', method1);

console.log('\nMethod 2: Using filter with arrow function');
const method2 = [0, 1, false, 2, '', 3].filter(x => x);
console.log('  arr.filter(x => x)');
console.log('  Result:', method2);

console.log('\nMethod 3: Using filter with explicit check');
const method3 = [0, 1, false, 2, '', 3].filter(x => Boolean(x));
console.log('  arr.filter(x => Boolean(x))');
console.log('  Result:', method3);

console.log('\nAll three methods produce the same result!\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Boolean() converts any value to true/false');
console.log('✓ 7 falsy values in JavaScript');
console.log('✓ Empty objects/arrays are truthy');
console.log('✓ String with spaces is truthy\n');
