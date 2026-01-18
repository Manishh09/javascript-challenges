/**
 * Test Suite for Reverse String Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: String Reversal');
console.log('========================================\n');

console.log('String: "Hello"');
console.log('');
console.log('  H   e   l   l   o');
console.log('  0   1   2   3   4   (indices)');
console.log('  ↓   ↓   ↓   ↓   ↓');
console.log('  o   l   l   e   H');
console.log('  4   3   2   1   0   (reversed)');
console.log('');
console.log('Result: "olleH"\n');

console.log('\n========================================');
console.log('Testing: Reverse String');
console.log('========================================\n');

// Test 1: Basic string
console.log('Test 1: Basic string');
const str1 = "hello";
const reversed1 = str1.split('').reverse().join('');
console.log(`Input:  "${str1}"`);
console.log(`Output: "${reversed1}"`);
console.log('Expected: "olleh"');
console.log(`✓ Pass: ${reversed1 === "olleh"}\n`);

// Test 2: String with spaces
console.log('Test 2: String with spaces');
const str2 = "hello world";
const reversed2 = str2.split('').reverse().join('');
console.log(`Input:  "${str2}"`);
console.log(`Output: "${reversed2}"`);
console.log('Expected: "dlrow olleh"');
console.log(`✓ Pass: ${reversed2 === "dlrow olleh"}\n`);

// Test 3: Single character
console.log('Test 3: Single character');
const str3 = "a";
const reversed3 = str3.split('').reverse().join('');
console.log(`Input:  "${str3}"`);
console.log(`Output: "${reversed3}"`);
console.log('Expected: "a"');
console.log(`✓ Pass: ${reversed3 === "a"}\n`);

// Test 4: Empty string
console.log('Test 4: Empty string');
const str4 = "";
const reversed4 = str4.split('').reverse().join('');
console.log(`Input:  ""`);
console.log(`Output: "${reversed4}"`);
console.log('Expected: ""');
console.log(`✓ Pass: ${reversed4 === ""}\n`);

// Test 5: Palindrome
console.log('Test 5: Palindrome');
const str5 = "racecar";
const reversed5 = str5.split('').reverse().join('');
console.log(`Input:  "${str5}"`);
console.log(`Output: "${reversed5}"`);
console.log('Expected: "racecar" (same as input)');
console.log(`✓ Pass: ${reversed5 === "racecar"}\n`);

// Test 6: String with special characters
console.log('Test 6: String with special characters');
const str6 = "Hello, World!";
const reversed6 = str6.split('').reverse().join('');
console.log(`Input:  "${str6}"`);
console.log(`Output: "${reversed6}"`);
console.log('Expected: "!dlroW ,olleH"\n');

// Test 7: String with numbers
console.log('Test 7: String with numbers');
const str7 = "abc123";
const reversed7 = str7.split('').reverse().join('');
console.log(`Input:  "${str7}"`);
console.log(`Output: "${reversed7}"`);
console.log('Expected: "321cba"');
console.log(`✓ Pass: ${reversed7 === "321cba"}\n`);

console.log('\n========================================');
console.log('Different Approaches');
console.log('========================================\n');

const testStr = "JavaScript";

console.log(`Test string: "${testStr}"\n`);

// Method 1: Built-in methods
console.log('Method 1: split().reverse().join()');
const method1 = testStr.split('').reverse().join('');
console.log(`  Result: "${method1}"`);
console.log('  Time: O(n), Space: O(n)\n');

// Method 2: Loop (reverse iteration)
console.log('Method 2: Reverse loop');
let method2 = '';
for (let i = testStr.length - 1; i >= 0; i--) {
    method2 += testStr[i];
}
console.log(`  Result: "${method2}"`);
console.log('  Time: O(n), Space: O(n)\n');

// Method 3: reduce
console.log('Method 3: Array.reduce()');
const method3 = testStr.split('').reduce((rev, char) => char + rev, '');
console.log(`  Result: "${method3}"`);
console.log('  Time: O(n), Space: O(n)\n');

// Method 4: Recursion
console.log('Method 4: Recursion');
function reverseRecursive(str) {
    if (str === '') return '';
    return reverseRecursive(str.substr(1)) + str[0];
}
const method4 = reverseRecursive(testStr);
console.log(`  Result: "${method4}"`);
console.log('  Time: O(n²), Space: O(n) - Not recommended\n');

console.log('All methods produce:', method1);
console.log(`✓ All match: ${method1 === method2 && method2 === method3 && method3 === method4}\n`);

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ split().reverse().join() is most concise');
console.log('✓ All approaches have O(n) time complexity');
console.log('✓ Strings are immutable in JavaScript');
console.log('✓ Must create new string for result\n');
