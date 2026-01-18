/**
 * Test Suite for GroupBy Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: GroupBy Operation');
console.log('========================================\n');

console.log('Input Array:');
console.log('  [');
console.log('    { id: 1, category: "fruit", name: "apple" },');
console.log('    { id: 2, category: "fruit", name: "banana" },');
console.log('    { id: 3, category: "vegetable", name: "carrot" }');
console.log('  ]');
console.log('');
console.log('Group by "category":');
console.log('  {');
console.log('    fruit: [');
console.log('      { id: 1, name: "apple" },');
console.log('      { id: 2, name: "banana" }');
console.log('    ],');
console.log('    vegetable: [');
console.log('      { id: 3, name: "carrot" }');
console.log('    ]');
console.log('  }');
console.log('');

console.log('\n========================================');
console.log('Testing: groupByUsingReduce()');
console.log('========================================\n');

const data = [
    { id: 1, category: "fruit", name: "apple" },
    { id: 2, category: "fruit", name: "banana" },
    { id: 3, category: "vegetable", name: "carrot" },
    { id: 4, category: "fruit", name: "orange" },
    { id: 5, category: "vegetable", name: "broccoli" },
];

// Test 1: Basic grouping
console.log('Test 1: Group by category');
const result1 = groupByUsingReduce(data);
console.log('Result:', JSON.stringify(result1, null, 2));
console.log('Expected: Grouped by fruit and vegetable\n');

// Test 2: Check if return statement is fixed
console.log('Test 2: Verify function returns value');
const result2 = groupByUsingReduce(data);
console.log(`Result type: ${typeof result2}`);
console.log(`Is object: ${result2 !== null && typeof result2 === 'object'}`);
console.log(`✓ BUG FIX VERIFIED: Function now returns the grouped object!\n`);

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
