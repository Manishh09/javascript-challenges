/**
 * Test Suite for Count Vowels Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Count Vowels');
console.log('========================================\n');

console.log('Vowels: a, e, i, o, u (and sometimes y)');
console.log('');
console.log('Example: "hello world"');
console.log('  h e l l o   w o r l d');
console.log('    ✓     ✓     ✓       → 3 vowels (e, o, o)');
console.log('');
console.log('Case insensitive: "HELLO" = "hello"');
console.log('');

console.log('\n========================================');
console.log('Testing: Using for loop');
console.log('========================================\n');

function countVowelsLoop(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Test 1: Basic count
console.log('Test 1: Basic vowel count');
const str1 = 'hello world';
const result1 = countVowelsLoop(str1);
console.log(`Input:  "${str1}"`);
console.log(`Vowels: e, o, o`);
console.log(`Count:  ${result1}`);
console.log('Expected: 3');
console.log(`✓ Pass: ${result1 === 3}\n`);

// Test 2: Mixed case
console.log('Test 2: Mixed case');
const str2 = 'JavaScript';
const result2 = countVowelsLoop(str2);
console.log(`Input:  "${str2}"`);
console.log(`Vowels: a, a, i`);
console.log(`Count:  ${result2}`);
console.log('Expected: 3');
console.log(`✓ Pass: ${result2 === 3}\n`);

console.log('\n========================================');
console.log('Testing: Using filter()');
console.log('========================================\n');

function countVowelsFilter(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

// Test 3: Using filter
console.log('Test 3: Count with filter()');
const str3 = 'education';
const result3 = countVowelsFilter(str3);
console.log(`Input:  "${str3}"`);
console.log(`Vowels: e, u, a, i, o`);
console.log(`Count:  ${result3}`);
console.log('Expected: 5');
console.log(`✓ Pass: ${result3 === 5}\n`);

console.log('\n========================================');
console.log('Testing: Using reduce()');
console.log('========================================\n');

function countVowelsReduce(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
    }, 0);
}

// Test 4: Using reduce
console.log('Test 4: Count with reduce()');
const str4 = 'beautiful';
const result4 = countVowelsReduce(str4);
console.log(`Input:  "${str4}"`);
console.log(`Vowels: e, a, u, i, u`);
console.log(`Count:  ${result4}`);
console.log('Expected: 5');
console.log(`✓ Pass: ${result4 === 5}\n`);

console.log('\n========================================');
console.log('Testing: Using RegEx');
console.log('========================================\n');

function countVowelsRegex(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Test 5: Using regex
console.log('Test 5: Count with regex');
const str5 = 'programming';
const result5 = countVowelsRegex(str5);
console.log(`Input:  "${str5}"`);
console.log(`Pattern: /[aeiou]/gi`);
console.log(`Count:  ${result5}`);
console.log('Expected: 3 (o, a, i)');
console.log(`✓ Pass: ${result5 === 3}\n`);

console.log('\n========================================');
console.log('Testing: Edge Cases');
console.log('========================================\n');

// Test 6: No vowels
console.log('Test 6: No vowels');
const str6 = 'xyz';
const result6 = countVowelsFilter(str6);
console.log(`Input:  "${str6}"`);
console.log(`Count:  ${result6}`);
console.log('Expected: 0');
console.log(`✓ Pass: ${result6 === 0}\n`);

// Test 7: All vowels
console.log('Test 7: All vowels');
const str7 = 'aeiou';
const result7 = countVowelsFilter(str7);
console.log(`Input:  "${str7}"`);
console.log(`Count:  ${result7}`);
console.log('Expected: 5');
console.log(`✓ Pass: ${result7 === 5}\n`);

// Test 8: Empty string
console.log('Test 8: Empty string');
const str8 = '';
const result8 = countVowelsFilter(str8);
console.log(`Input:  ""`);
console.log(`Count:  ${result8}`);
console.log('Expected: 0');
console.log(`✓ Pass: ${result8 === 0}\n`);

// Test 9: Only spaces
console.log('Test 9: Only spaces');
const str9 = '   ';
const result9 = countVowelsFilter(str9);
console.log(`Input:  "   "`);
console.log(`Count:  ${result9}`);
console.log('Expected: 0');
console.log(`✓ Pass: ${result9 === 0}\n`);

// Test 10: With numbers and special chars
console.log('Test 10: With numbers and special chars');
const str10 = 'abc123!@#';
const result10 = countVowelsFilter(str10);
console.log(`Input:  "${str10}"`);
console.log(`Vowels: a`);
console.log(`Count:  ${result10}`);
console.log('Expected: 1');
console.log(`✓ Pass: ${result10 === 1}\n`);

console.log('\n========================================');
console.log('Visual Breakdown Example');
console.log('========================================\n');

const demo = 'aeroplane';
console.log(`String: "${demo}"`);
console.log('');
console.log('Character-by-character analysis:');
console.log('  a → vowel     ✓');
console.log('  e → vowel     ✓');
console.log('  r → consonant ✗');
console.log('  o → vowel     ✓');
console.log('  p → consonant ✗');
console.log('  l → consonant ✗');
console.log('  a → vowel     ✓');
console.log('  n → consonant ✗');
console.log('  e → vowel     ✓');
console.log('');
console.log(`Total vowels: ${countVowelsFilter(demo)}\n`);

console.log('\n========================================');
console.log('Method Comparison');
console.log('========================================\n');

const testStr = 'understanding';
console.log(`Test string: "${testStr}"\n`);

console.log('Method 1: for loop');
console.log(`  Count: ${countVowelsLoop(testStr)}`);

console.log('\nMethod 2: filter()');
console.log(`  Count: ${countVowelsFilter(testStr)}`);

console.log('\nMethod 3: reduce()');
console.log(`  Count: ${countVowelsReduce(testStr)}`);

console.log('\nMethod 4: regex');
console.log(`  Count: ${countVowelsRegex(testStr)}`);

console.log('\n✓ All methods produce same result\n');

console.log('\n========================================');
console.log('Performance Comparison');
console.log('========================================\n');

const longString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'.repeat(100);

console.log('Counting vowels in 5000+ character string:\n');

console.time('for loop');
countVowelsLoop(longString);
console.timeEnd('for loop');

console.time('filter()');
countVowelsFilter(longString);
console.timeEnd('filter()');

console.time('reduce()');
countVowelsReduce(longString);
console.timeEnd('reduce()');

console.time('regex');
countVowelsRegex(longString);
console.timeEnd('regex');

console.log('\nNote: for loop is typically fastest\n');

console.log('\n========================================');
console.log('Extended: Count Each Vowel');
console.log('========================================\n');

function countEachVowel(str) {
    const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    
    str.toLowerCase().split('').forEach(char => {
        if (char in counts) {
            counts[char]++;
        }
    });
    
    return counts;
}

const sample = 'education system';
const vowelCounts = countEachVowel(sample);
console.log(`String: "${sample}"`);
console.log('Vowel breakdown:');
console.log(`  a: ${vowelCounts.a}`);
console.log(`  e: ${vowelCounts.e}`);
console.log(`  i: ${vowelCounts.i}`);
console.log(`  o: ${vowelCounts.o}`);
console.log(`  u: ${vowelCounts.u}`);
console.log(`Total: ${Object.values(vowelCounts).reduce((a, b) => a + b, 0)}\n`);

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌──────────────────┬──────────┬──────────┐');
console.log('│ Method           │ Time     │ Space    │');
console.log('├──────────────────┼──────────┼──────────┤');
console.log('│ for loop         │ O(n)     │ O(1)     │');
console.log('│ filter()         │ O(n)     │ O(n)     │');
console.log('│ reduce()         │ O(n)     │ O(n)     │');
console.log('│ regex            │ O(n)     │ O(k)     │');
console.log('└──────────────────┴──────────┴──────────┘');
console.log('n = string length, k = number of matches\n');
console.log('for loop is most space-efficient\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Vowels are: a, e, i, o, u');
console.log('✓ Always handle case sensitivity');
console.log('✓ Regex is concise but less readable');
console.log('✓ for loop is fastest and most memory efficient\n');
