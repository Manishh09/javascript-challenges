/**
 * Test Suite for Extract Values by Type Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Type Checking');
console.log('========================================\n');

console.log('JavaScript Types:');
console.log('  Primitives:');
console.log('    - string');
console.log('    - number');
console.log('    - boolean');
console.log('    - undefined');
console.log('    - null (special case: typeof null === "object")');
console.log('    - symbol');
console.log('    - bigint');
console.log('');
console.log('  Objects:');
console.log('    - object');
console.log('    - array (typeof [] === "object")');
console.log('    - function');
console.log('');

console.log('\n========================================');
console.log('Testing: Extract Values by Type');
console.log('========================================\n');

const mixedArray = [
    1, 
    'hello', 
    true, 
    42, 
    'world', 
    false, 
    null, 
    undefined, 
    {name: 'John'}, 
    [1, 2, 3],
    () => {},
    Symbol('test')
];

console.log('Test Array:', mixedArray);
console.log('');

// Test 1: Extract numbers
console.log('Test 1: Extract numbers');
const numbers = mixedArray.filter(item => typeof item === 'number');
console.log('Filter: typeof === "number"');
console.log('Output:', numbers);
console.log('Expected: [1, 42]');
console.log(`✓ Pass: ${numbers.length === 2}\n`);

// Test 2: Extract strings
console.log('Test 2: Extract strings');
const strings = mixedArray.filter(item => typeof item === 'string');
console.log('Filter: typeof === "string"');
console.log('Output:', strings);
console.log('Expected: ["hello", "world"]');
console.log(`✓ Pass: ${strings.length === 2}\n`);

// Test 3: Extract booleans
console.log('Test 3: Extract booleans');
const booleans = mixedArray.filter(item => typeof item === 'boolean');
console.log('Filter: typeof === "boolean"');
console.log('Output:', booleans);
console.log('Expected: [true, false]');
console.log(`✓ Pass: ${booleans.length === 2}\n`);

// Test 4: Extract objects (excluding null)
console.log('Test 4: Extract objects (excluding null and arrays)');
const objects = mixedArray.filter(item => 
    typeof item === 'object' && 
    item !== null && 
    !Array.isArray(item)
);
console.log('Filter: typeof === "object" && not null && not array');
console.log('Output:', objects);
console.log('Expected: [{name: "John"}]');
console.log(`✓ Pass: ${objects.length === 1}\n`);

// Test 5: Extract arrays
console.log('Test 5: Extract arrays');
const arrays = mixedArray.filter(item => Array.isArray(item));
console.log('Filter: Array.isArray()');
console.log('Output:', arrays);
console.log('Expected: [[1, 2, 3]]');
console.log(`✓ Pass: ${arrays.length === 1}\n`);

// Test 6: Extract functions
console.log('Test 6: Extract functions');
const functions = mixedArray.filter(item => typeof item === 'function');
console.log('Filter: typeof === "function"');
console.log('Output:', functions.length, 'function(s)');
console.log('Expected: 1 function');
console.log(`✓ Pass: ${functions.length === 1}\n`);

// Test 7: Extract undefined
console.log('Test 7: Extract undefined');
const undefineds = mixedArray.filter(item => typeof item === 'undefined');
console.log('Filter: typeof === "undefined"');
console.log('Output:', undefineds);
console.log('Expected: [undefined]');
console.log(`✓ Pass: ${undefineds.length === 1}\n`);

// Test 8: Extract null (special case)
console.log('Test 8: Extract null (special handling)');
const nulls = mixedArray.filter(item => item === null);
console.log('Filter: item === null');
console.log('Output:', nulls);
console.log('Expected: [null]');
console.log('Note: typeof null === "object" (JavaScript quirk!)');
console.log(`✓ Pass: ${nulls.length === 1}\n`);

console.log('\n========================================');
console.log('Type Checking Helpers');
console.log('========================================\n');

function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

console.log('Custom getType() function:');
mixedArray.slice(0, 5).forEach(item => {
    console.log(`  ${JSON.stringify(item)} → ${getType(item)}`);
});
console.log('');

console.log('\n========================================');
console.log('Group by Type');
console.log('========================================\n');

function groupByType(arr) {
    return arr.reduce((groups, item) => {
        const type = getType(item);
        if (!groups[type]) groups[type] = [];
        groups[type].push(item);
        return groups;
    }, {});
}

const grouped = groupByType(mixedArray);
console.log('Grouped by type:');
Object.entries(grouped).forEach(([type, values]) => {
    console.log(`  ${type}: ${values.length} item(s)`);
});
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Use typeof for primitive types');
console.log('✓ Use Array.isArray() for arrays');
console.log('✓ Check null explicitly (typeof null === "object")');
console.log('✓ Functions have typeof "function"\n');
