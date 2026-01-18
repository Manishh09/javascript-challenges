/**
 * Test Suite for Form a String Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Form a String');
console.log('========================================\n');

console.log('Problem: Build strings character by character');
console.log('');
console.log('Example: Form "hello" from characters');
console.log('  Step 1: "" → "h"');
console.log('  Step 2: "h" → "he"');
console.log('  Step 3: "he" → "hel"');
console.log('  Step 4: "hel" → "hell"');
console.log('  Step 5: "hell" → "hello"');
console.log('');
console.log('Common operations:');
console.log('  • Concatenate strings');
console.log('  • Join array of characters');
console.log('  • Build without built-in methods');
console.log('');

console.log('\n========================================');
console.log('Testing: String Formation Methods');
console.log('========================================\n');

// Test 1: Using built-in join()
console.log('Test 1: Using array join()');
const chars1 = ['h', 'e', 'l', 'l', 'o'];
const str1 = chars1.join('');
console.log('Characters:', chars1);
console.log('Result:    ', str1);
console.log('Expected:   "hello"');
console.log(`✓ Pass: ${str1 === 'hello'}\n`);

// Test 2: Using concatenation operator
console.log('Test 2: Using concatenation (+)');
const chars2 = ['w', 'o', 'r', 'l', 'd'];
let str2 = '';
for (let char of chars2) {
    str2 += char;
}
console.log('Characters:', chars2);
console.log('Result:    ', str2);
console.log('Expected:   "world"');
console.log(`✓ Pass: ${str2 === 'world'}\n`);

// Test 3: Manual implementation without built-in methods
console.log('Test 3: Without built-in methods (manual loop)');

function formStringManual(chars) {
    let result = '';
    let i = 0;
    
    while (i < chars.length) {
        // Concatenate character by character
        result = result + chars[i];
        i++;
    }
    
    return result;
}

const chars3 = ['t', 'e', 's', 't'];
const str3 = formStringManual(chars3);
console.log('Characters:', chars3);
console.log('Result:    ', str3);
console.log('Expected:   "test"');
console.log(`✓ Pass: ${str3 === 'test'}\n`);

// Test 4: Using reduce
console.log('Test 4: Using reduce()');
const chars4 = ['c', 'o', 'd', 'e'];
const str4 = chars4.reduce((acc, char) => acc + char, '');
console.log('Characters:', chars4);
console.log('Result:    ', str4);
console.log('Expected:   "code"');
console.log(`✓ Pass: ${str4 === 'code'}\n`);

console.log('\n========================================');
console.log('Testing: Edge Cases');
console.log('========================================\n');

// Test 5: Empty array
console.log('Test 5: Empty array');
const chars5 = [];
const str5 = chars5.join('');
console.log('Characters:', chars5);
console.log('Result:    ', `"${str5}"`);
console.log('Expected:   ""');
console.log(`✓ Pass: ${str5 === ''}\n`);

// Test 6: Single character
console.log('Test 6: Single character');
const chars6 = ['a'];
const str6 = chars6.join('');
console.log('Characters:', chars6);
console.log('Result:    ', str6);
console.log('Expected:   "a"');
console.log(`✓ Pass: ${str6 === 'a'}\n`);

// Test 7: Special characters
console.log('Test 7: Special characters');
const chars7 = ['!', '@', '#', '$'];
const str7 = chars7.join('');
console.log('Characters:', chars7);
console.log('Result:    ', str7);
console.log('Expected:   "!@#$"');
console.log(`✓ Pass: ${str7 === '!@#$'}\n`);

// Test 8: With spaces
console.log('Test 8: With spaces');
const chars8 = ['h', 'i', ' ', 'y', 'o', 'u'];
const str8 = chars8.join('');
console.log('Characters:', chars8);
console.log('Result:    ', `"${str8}"`);
console.log('Expected:   "hi you"');
console.log(`✓ Pass: ${str8 === 'hi you'}\n`);

console.log('\n========================================');
console.log('Advanced: Form Strings from Various Inputs');
console.log('========================================\n');

// Test 9: From string (split and join)
console.log('Test 9: Reverse string using split-join');
const original = "hello";
const reversed = original.split('').reverse().join('');
console.log('Original:  ', original);
console.log('Process:    split → reverse → join');
console.log('Reversed:  ', reversed);
console.log('Expected:   "olleh"');
console.log(`✓ Pass: ${reversed === 'olleh'}\n`);

// Test 10: From numbers
console.log('Test 10: Form string from numbers');
const numbers = [1, 2, 3, 4, 5];
const numString = numbers.join('');
console.log('Numbers:', numbers);
console.log('Result: ', numString);
console.log('Type:   ', typeof numString);
console.log('Expected: "12345" (string)');
console.log(`✓ Pass: ${numString === '12345' && typeof numString === 'string'}\n`);

console.log('\n========================================');
console.log('Performance Comparison');
console.log('========================================\n');

const largeArray = Array.from({ length: 10000 }, (_, i) => String.fromCharCode(97 + (i % 26)));

console.log('Forming string from 10,000 characters:\n');

console.time('Method 1: join()');
const result1 = largeArray.join('');
console.timeEnd('Method 1: join()');

console.time('Method 2: + operator');
let result2 = '';
for (let char of largeArray) {
    result2 += char;
}
console.timeEnd('Method 2: + operator');

console.time('Method 3: reduce()');
const result3 = largeArray.reduce((acc, char) => acc + char, '');
console.timeEnd('Method 3: reduce()');

console.log('\nNote: join() is typically fastest\n');

console.log('\n========================================');
console.log('Step-by-Step Formation Example');
console.log('========================================\n');

const steps = ['J', 'S'];
console.log('Building string step by step:\n');

let building = '';
for (let i = 0; i < steps.length; i++) {
    building += steps[i];
    console.log(`Step ${i + 1}: "${building}"`);
}
console.log('');

console.log('\n========================================');
console.log('Practical Applications');
console.log('========================================\n');

// Use case 1: Build initials
console.log('Use Case 1: Build initials');
const fullName = ['John', 'Doe', 'Smith'];
const initials = fullName.map(name => name[0]).join('.');
console.log('Name:     ', fullName.join(' '));
console.log('Initials: ', initials);
console.log('');

// Use case 2: Build URL
console.log('Use Case 2: Build URL from parts');
const urlParts = ['https://', 'www.', 'example', '.com'];
const url = urlParts.join('');
console.log('Parts:', urlParts);
console.log('URL:  ', url);
console.log('');

// Use case 3: Build CSV row
console.log('Use Case 3: Build CSV row');
const csvData = ['John', '30', 'Engineer'];
const csvRow = csvData.join(',');
console.log('Data:', csvData);
console.log('CSV: ', csvRow);
console.log('');

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌──────────────────┬──────────┬──────────┐');
console.log('│ Method           │ Time     │ Space    │');
console.log('├──────────────────┼──────────┼──────────┤');
console.log('│ join()           │ O(n)     │ O(n)     │');
console.log('│ + operator       │ O(n²)*   │ O(n)     │');
console.log('│ reduce()         │ O(n²)*   │ O(n)     │');
console.log('└──────────────────┴──────────┴──────────┘');
console.log('* Creates new string each iteration (immutable)\n');
console.log('join() is preferred for performance\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ join() is fastest and cleanest method');
console.log('✓ + operator is simple but slower for large strings');
console.log('✓ Strings are immutable in JavaScript');
console.log('✓ Array.join() creates single concatenated result\n');
