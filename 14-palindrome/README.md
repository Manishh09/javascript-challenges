# Palindrome Check

## 📋 Problem Statement

Determine if a given string or number reads the same forwards and backwards, ignoring spaces, punctuation, and case.

```javascript
Input:  "racecar"
Output: true

Input:  12321
Output: true
```

## Solution

```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
```

**How it works:**
- Clean string (lowercase, remove non-alphanumeric)
- Reverse and compare with original

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Two pointers</summary>

```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    
    return true;
}
```
O(n) time, O(n) space - more efficient (no reversed copy)
</details>

<details>
<summary>Number palindrome</summary>

```javascript
function isNumberPalindrome(num) {
    if (num < 0) return false;
    
    const str = num.toString();
    return str === str.split('').reverse().join('');
}
```
O(n) time, O(n) space
</details>

<details>
<summary>Number palindrome without string</summary>

```javascript
function isNumberPalindrome(num) {
    if (num < 0) return false;
    
    let reversed = 0, original = num;
    
    while (original > 0) {
        reversed = reversed * 10 + original % 10;
        original = Math.floor(original / 10);
    }
    
    return num === reversed;
}
```
O(n) time, O(1) space
</details>

## Edge Cases

```javascript
isPalindrome("")                              // true
isPalindrome("a")                             // true
isPalindrome("A man, a plan, a canal: Panama") // true
isNumberPalindrome(-121)                      // false (negative)
```

## Run Tests

```bash
node tests.js
```

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Reverse & Compare | O(n) | O(n) |
| Two Pointers | O(n) | O(1) |
| Recursion | O(n) | O(n) call stack |
| Number (optimized) | O(log n) | O(1) |

**Best Choice:** Two pointers - O(n) time, O(1) space

## Edge Cases

- Empty string: `""` → true (by convention)
- Single character: `"a"` → true
- Spaces only: `"   "` → true (after cleaning)
- Special chars: `"a!b@a"` → true (after removing)
- Case sensitivity: `"Aa"` → true (case insensitive)
- Number zero: `0` → true
- Negative numbers: `-121` → false

## Interview Follow-ups

1. **What about Unicode/emojis?**

   ```javascript
   function isPalindromeUnicode(str) {
       // Use Array.from or spread to handle Unicode properly
       const chars = [...str.toLowerCase()];
       let left = 0, right = chars.length - 1;
       
       while (left < right) {
           if (chars[left] !== chars[right]) return false;
           left++;
           right--;
       }
       return true;
   }
   ```

2. **Can you check for palindrome substring?**

   ```javascript
   function longestPalindrome(str) {
       let longest = '';
       
       for (let i = 0; i < str.length; i++) {
           // Check odd-length palindromes
           let palindrome = expandAroundCenter(str, i, i);
           if (palindrome.length > longest.length) {
               longest = palindrome;
           }
           
           // Check even-length palindromes
           palindrome = expandAroundCenter(str, i, i + 1);
           if (palindrome.length > longest.length) {
               longest = palindrome;
           }
       }
       
       return longest;
   }
   
   function expandAroundCenter(str, left, right) {
       while (left >= 0 && right < str.length && str[left] === str[right]) {
           left--;
           right++;
       }
       return str.slice(left + 1, right);
   }
   ```

3. **What if you can remove one character?**

   ```javascript
   function validPalindromeII(str) {
       let left = 0, right = str.length - 1;
       
       while (left < right) {
           if (str[left] !== str[right]) {
               // Try removing either left or right character
               return isPalindromeRange(str, left + 1, right) || 
                      isPalindromeRange(str, left, right - 1);
           }
           left++;
           right--;
       }
       
       return true;
   }
   
   function isPalindromeRange(str, left, right) {
       while (left < right) {
           if (str[left] !== str[right]) return false;
           left++;
           right--;
       }
       return true;
   }
   ```

4. **How to generate all palindromic substrings?**

   ```javascript
   function allPalindromes(str) {
       const palindromes = new Set();
       
       for (let i = 0; i < str.length; i++) {
           // Odd length
           expand(str, i, i, palindromes);
           // Even length
           expand(str, i, i + 1, palindromes);
       }
       
       return [...palindromes];
   }
   
   function expand(str, left, right, set) {
       while (left >= 0 && right < str.length && str[left] === str[right]) {
           set.add(str.slice(left, right + 1));
           left--;
           right++;
       }
   }
   ```

## Visual Explanation

```
String: "racecar"

Two-pointer check:
  r a c e c a r
  ↑           ↑  → Match!
    ↓       ↓    → Match!
      ↓   ↓      → Match!
        ↓        → Middle (done)

Result: PALINDROME ✓

String: "hello"
  h e l l o
  ↑       ↑  → h ≠ o → NOT PALINDROME ✗
```

## Famous Palindromes

- "A man, a plan, a canal: Panama"
- "Was it a car or a cat I saw?"
- "Madam, I'm Adam"
- "Never odd or even"
- "Do geese see God?"

## Palindrome Numbers

```javascript
// First 10 palindrome numbers:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// Two-digit:
11, 22, 33, 44, 55, 66, 77, 88, 99

// Three-digit:
101, 111, 121, 131, 141, ...
```

## Practical Applications

- Data validation
- Pattern matching
- DNA sequence analysis
- License plate validation
- Cryptography
- Interview questions

## Related Challenges

- Longest palindromic substring
- Palindrome permutation
- Palindrome partitioning
- Valid palindrome II
- Palindrome linked list

## Run Tests

```bash
node tests.js
```
