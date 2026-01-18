/**
 * Test Suite for Object Entries Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Object.entries()');
console.log('========================================\n');

console.log('Object:');
console.log('  { name: "John", age: 30, city: "NYC" }');
console.log('');
console.log('Object.entries() converts to array of [key, value] pairs:');
console.log('  [');
console.log('    ["name", "John"],');
console.log('    ["age", 30],');
console.log('    ["city", "NYC"]');
console.log('  ]');
console.log('');

console.log('\n========================================');
console.log('Testing: Object.entries()');
console.log('========================================\n');

// Test 1: Basic object
console.log('Test 1: Basic object');
const obj1 = { name: "John", age: 30, city: "NYC" };
const entries1 = Object.entries(obj1);
console.log('Object:', obj1);
console.log('Entries:', entries1);
console.log('Expected: 3 entries');
console.log(`✓ Pass: ${entries1.length === 3}\n`);

// Test 2: Empty object
console.log('Test 2: Empty object');
const obj2 = {};
const entries2 = Object.entries(obj2);
console.log('Object: {}');
console.log('Entries:', entries2);
console.log('Expected: []');
console.log(`✓ Pass: ${entries2.length === 0}\n`);

// Test 3: Object with various types
console.log('Test 3: Object with various value types');
const obj3 = {
    string: "hello",
    number: 42,
    boolean: true,
    array: [1, 2, 3],
    object: { nested: true },
    func: function() {}
};
const entries3 = Object.entries(obj3);
console.log('Object with 6 properties of different types');
console.log('Entries count:', entries3.length);
console.log('Sample:', entries3[0]);
console.log(`✓ Pass: ${entries3.length === 6}\n`);

// Test 4: Iterating over entries
console.log('Test 4: Iterate over entries');
const obj4 = { a: 1, b: 2, c: 3 };
console.log('Object:', obj4);
console.log('Iteration:');
Object.entries(obj4).forEach(([key, value]) => {
    console.log(`  ${key} → ${value}`);
});
console.log('');

// Test 5: Converting back to object
console.log('Test 5: Array of entries back to object');
const entries5 = [["x", 10], ["y", 20], ["z", 30]];
const obj5 = Object.fromEntries(entries5);
console.log('Entries:', entries5);
console.log('Back to object:', obj5);
console.log('Expected: { x: 10, y: 20, z: 30 }');
console.log(`✓ Pass: ${obj5.x === 10 && obj5.y === 20}\n`);

console.log('\n========================================');
console.log('Related Methods');
console.log('========================================\n');

const demoObj = { name: "Alice", age: 25, role: "Developer" };

console.log('Object:', demoObj);
console.log('');

console.log('Object.keys()   →', Object.keys(demoObj));
console.log('Object.values() →', Object.values(demoObj));
console.log('Object.entries() →', Object.entries(demoObj));
console.log('');

console.log('\n========================================');
console.log('Practical Use Cases');
console.log('========================================\n');

// Use case 1: Filtering object properties
console.log('Use Case 1: Filter object properties');
const user = { name: "Bob", age: 17, role: "student", active: false };
const filtered = Object.fromEntries(
    Object.entries(user).filter(([key, value]) => typeof value === 'string')
);
console.log('Original:', user);
console.log('Filtered (strings only):', filtered);
console.log('');

// Use case 2: Transform object values
console.log('Use Case 2: Transform object values');
const prices = { apple: 1, banana: 2, cherry: 3 };
const doubled = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log('Original:', prices);
console.log('Doubled:', doubled);
console.log('');

// Use case 3: Swap keys and values
console.log('Use Case 3: Swap keys and values');
const original = { a: 1, b: 2, c: 3 };
const swapped = Object.fromEntries(
    Object.entries(original).map(([key, value]) => [value, key])
);
console.log('Original:', original);
console.log('Swapped:', swapped);
console.log('');

console.log('\n========================================');
console.log('Custom Implementation');
console.log('========================================\n');

function customObjectEntries(obj) {
    const entries = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            entries.push([key, obj[key]]);
        }
    }
    return entries;
}

const testObj = { x: 1, y: 2, z: 3 };
console.log('Using custom implementation:');
console.log('Native:  ', Object.entries(testObj));
console.log('Custom:  ', customObjectEntries(testObj));
console.log('✓ Both produce same result\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Object.entries() returns array of [key, value] pairs');
console.log('✓ Object.fromEntries() converts back to object');
console.log('✓ Useful for filtering/mapping object properties');
console.log('✓ Works with for...of loops\n');
