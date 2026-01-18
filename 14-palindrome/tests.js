/**
 * Test Suite for Palindrome Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Palindromes');
console.log('========================================\n');

console.log('Palindrome = reads same forwards and backwards');
console.log('');
console.log('String: "racecar"');
console.log('  r a c e c a r');
console.log('  ← ← ← ← → → →');
console.log('  ✓ Same both ways!');
console.log('');
console.log('Number: 12321');
console.log('  1 2 3 2 1');
console.log('  ← ← ← → →');
console.log('  ✓ Same both ways!');
console.log('');

console.log('\n========================================');
console.log('Testing: String Palindromes');
console.log('========================================\n');

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Test 1: Simple palindrome
console.log('Test 1: Simple palindrome');
const str1 = "racecar";
const result1 = isPalindrome(str1);
console.log(`Input:  "${str1}"`);
console.log(`Result: ${result1}`);
console.log('Expected: true');
console.log(`✓ Pass: ${result1 === true}\n`);

// Test 2: Not a palindrome
console.log('Test 2: Not a palindrome');
const str2 = "hello";
const result2 = isPalindrome(str2);
console.log(`Input:  "${str2}"`);
console.log(`Result: ${result2}`);
console.log('Expected: false');
console.log(`✓ Pass: ${result2 === false}\n`);

// Test 3: Single character
console.log('Test 3: Single character');
const str3 = "a";
const result3 = isPalindrome(str3);
console.log(`Input:  "${str3}"`);
console.log(`Result: ${result3}`);
console.log('Expected: true');
console.log(`✓ Pass: ${result3 === true}\n`);

// Test 4: Empty string
console.log('Test 4: Empty string');
const str4 = "";
const result4 = isPalindrome(str4);
console.log(`Input:  ""`);
console.log(`Result: ${result4}`);
console.log('Expected: true (empty is palindrome)');
console.log(`✓ Pass: ${result4 === true}\n`);

// Test 5: With spaces and punctuation
console.log('Test 5: With spaces and punctuation');
const str5 = "A man, a plan, a canal: Panama";
const result5 = isPalindrome(str5);
console.log(`Input:  "${str5}"`);
console.log('Cleaned: "amanaplanacanalpanama"');
console.log(`Result: ${result5}`);
console.log('Expected: true');
console.log(`✓ Pass: ${result5 === true}\n`);

// Test 6: Mixed case
console.log('Test 6: Mixed case');
const str6 = "RaceCar";
const result6 = isPalindrome(str6);
console.log(`Input:  "${str6}"`);
console.log(`Result: ${result6}`);
console.log('Expected: true (case insensitive)');
console.log(`✓ Pass: ${result6 === true}\n`);

console.log('\n========================================');
console.log('Testing: Number Palindromes');
console.log('========================================\n');

function isNumberPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// Test 7: Palindrome number
console.log('Test 7: Palindrome number');
const num7 = 12321;
const result7 = isNumberPalindrome(num7);
console.log(`Input:  ${num7}`);
console.log(`Result: ${result7}`);
console.log('Expected: true');
console.log(`✓ Pass: ${result7 === true}\n`);

// Test 8: Not palindrome number
console.log('Test 8: Not palindrome number');
const num8 = 12345;
const result8 = isNumberPalindrome(num8);
console.log(`Input:  ${num8}`);
console.log(`Result: ${result8}`);
console.log('Expected: false');
console.log(`✓ Pass: ${result8 === false}\n`);

// Test 9: Single digit
console.log('Test 9: Single digit number');
const num9 = 7;
const result9 = isNumberPalindrome(num9);
console.log(`Input:  ${num9}`);
console.log(`Result: ${result9}`);
console.log('Expected: true');
console.log(`✓ Pass: ${result9 === true}\n`);

// Test 10: Negative number
console.log('Test 10: Negative number');
const num10 = -121;
const result10 = isNumberPalindrome(num10);
console.log(`Input:  ${num10}`);
console.log(`Result: ${result10}`);
console.log('Expected: false (negative sign makes it false)');
console.log(`✓ Pass: ${result10 === false}\n`);

console.log('\n========================================');
console.log('Different Approaches');
console.log('========================================\n');

const testStr = "racecar";
console.log(`Test string: "${testStr}"\n`);

// Method 1: Reverse and compare
console.log('Method 1: Reverse and compare');
const method1 = testStr === testStr.split('').reverse().join('');
console.log(`  Result: ${method1}`);

// Method 2: Two pointers
console.log('\nMethod 2: Two pointers');
function twoPointerPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
const method2 = twoPointerPalindrome(testStr);
console.log(`  Result: ${method2}`);

// Method 3: Compare with reversed half
console.log('\nMethod 3: Compare halves');
function halfPalindrome(str) {
    const mid = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, mid);
    const secondHalf = str.slice(str.length - mid).split('').reverse().join('');
    return firstHalf === secondHalf;
}
const method3 = halfPalindrome(testStr);
console.log(`  Result: ${method3}`);

console.log(`\n✓ All methods agree: ${method1 === method2 && method2 === method3}\n`);

console.log('\n========================================');
console.log('Common Palindrome Examples');
console.log('========================================\n');

const palindromes = [
    "radar",
    "level",
    "civic",
    "madam",
    "noon",
    "12321",
    "Was it a car or a cat I saw?",
    "No lemon, no melon"
];

console.log('Testing famous palindromes:');
palindromes.forEach(p => {
    const result = isPalindrome(p);
    console.log(`  "${p}" → ${result ? '✓' : '✗'}`);
});
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Palindrome reads same forwards and backwards');
console.log('✓ Often need to clean input (case, spaces, punctuation)');
console.log('✓ Two-pointer approach is space-efficient O(1)');
console.log('✓ Reverse comparison is simplest O(n) space\n');
