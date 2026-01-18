/**
 * Test Suite for Find Longest Word Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Testing: findLongestWord()');
console.log('========================================\n');

// Test 1: Basic sentence
console.log('Test 1: Basic sentence');
const result1 = findLongestWord("Hello, Javascript developers");
console.log(`Input:  "Hello, Javascript developers"`);
console.log(`Output: "${result1}"`);
console.log(`Expected: "developers"`);
console.log(`✓ Pass: ${result1 === "developers"}\n`);

// Test 2: Multiple long words
console.log('Test 2: Sentence with multiple long words');
const result2 = findLongestWord("The quick brown fox jumps");
console.log(`Input:  "The quick brown fox jumps"`);
console.log(`Output: "${result2}"`);
console.log(`Expected: "quick" or "brown" or "jumps" (all length 5)\n`);

// Test 3: Single word
console.log('Test 3: Single word');
const result3 = findLongestWord("Hello");
console.log(`Input:  "Hello"`);
console.log(`Output: "${result3}"`);
console.log(`Expected: "Hello"\n`);

// Test 4: Empty string
console.log('Test 4: Empty string');
const result4 = findLongestWord("");
console.log(`Input:  ""`);
console.log(`Output: "${result4}"`);
console.log(`Expected: Error message or empty\n`);

// Test 5: String with punctuation
console.log('Test 5: String with punctuation');
const result5 = findLongestWord("Programming! is, amazing.");
console.log(`Input:  "Programming! is, amazing."`);
console.log(`Output: "${result5}"`);
console.log(`Note: "Programming!" includes punctuation\n`);

// Test 6: Multiple spaces
console.log('Test 6: Multiple spaces between words');
const result6 = findLongestWord("This    has    extra    spaces");
console.log(`Input:  "This    has    extra    spaces"`);
console.log(`Output: "${result6}"`);
console.log(`Expected: "spaces" (length 6)\n`);

// Test 7: All equal length
console.log('Test 7: All words same length');
const result7 = findLongestWord("cat dog bat rat");
console.log(`Input:  "cat dog bat rat"`);
console.log(`Output: "${result7}"`);
console.log(`Expected: "cat" (first one found)\n`);

// Test 8: Numbers as words
console.log('Test 8: String with numbers');
const result8 = findLongestWord("Test123 is a verylongword");
console.log(`Input:  "Test123 is a verylongword"`);
console.log(`Output: "${result8}"`);
console.log(`Expected: "verylongword" (length 12)\n`);

// Test 9: Invalid input type
console.log('Test 9: Invalid input (number)');
const result9 = findLongestWord(12345);
console.log(`Input:  12345`);
console.log(`Output: "${result9}"`);
console.log(`Expected: "Provide input as a string type"\n`);

// Test 10: Invalid input (undefined)
console.log('Test 10: Invalid input (undefined)');
const result10 = findLongestWord(undefined);
console.log(`Input:  undefined`);
console.log(`Output: "${result10}"`);
console.log(`Expected: "Provide input as a string type"\n`);

console.log('\n========================================');
console.log('Edge Cases');
console.log('========================================\n');

// Test 11: Very long word
console.log('Test 11: Very long word');
const longSentence = "This is a supercalifragilisticexpialidocious word";
const result11 = findLongestWord(longSentence);
console.log(`Input:  "${longSentence}"`);
console.log(`Output: "${result11}"`);
console.log(`Expected: "supercalifragilisticexpialidocious" (length 34)\n`);

// Test 12: Special characters
console.log('Test 12: Special characters');
const result12 = findLongestWord("Hello @world #coding $money");
console.log(`Input:  "Hello @world #coding $money"`);
console.log(`Output: "${result12}"`);
console.log(`Note: Depends on how split handles special characters\n`);

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
