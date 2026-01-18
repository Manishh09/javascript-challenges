# Count Vowels

## 📋 Problem Statement

Count the number of vowels (a, e, i, o, u) in a given string, case-insensitive.

```javascript
Input:  "hello world"
Output: 3  // e, o, o
```

## Solution

```javascript
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
```

**How it works:**
- Use regex to match vowels
- `g` flag for global search
- `i` flag for case-insensitive
- Return match count

**Complexity:** O(n) time, O(1) space

## Alternative Approaches

<details>
<summary>Using for loop</summary>

```javascript
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}
```
O(n) time, O(1) space
</details>

<details>
<summary>Using filter</summary>

```javascript
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase()
        .split('')
        .filter(char => vowels.includes(char))
        .length;
}
```
O(n) time, O(n) space
</details>

<details>
<summary>Using reduce</summary>

```javascript
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
    }, 0);
}
```
O(n) time, O(n) space
</details>

## Edge Cases

```javascript
countVowels("")               // 0
countVowels("xyz")            // 0
countVowels("aeiou")          // 5
countVowels("JavaScript")     // 3
```

## Run Tests

```bash
node tests.js
```    while (i < str.length) {
        let j = 0;
        while (j < vowels.length) {
            if (str[i] === vowels[j]) {
                count++;
                break;
            }
            j++;
        }
        i++;
    }
    
    return count;
}
```

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| for loop | O(n) | O(1) |
| filter() | O(n) | O(n) |
| reduce() | O(n) | O(n) |
| RegEx | O(n) | O(k) matches |
| Manual | O(n) | O(1) |

**Best Choice:** for loop - fastest and most space-efficient

## Edge Cases

- Empty string: `""` → `0`
- No vowels: `"xyz"` → `0`
- All vowels: `"aeiou"` → `5`
- Mixed case: `"AEIOUaeiou"` → `10`
- With spaces: `"hello world"` → `3`
- With numbers: `"abc123"` → `1`
- Special characters: `"!@#$%"` → `0`

## Interview Follow-ups

1. **How to count each vowel separately?**

   ```javascript
   function countEachVowel(str) {
       const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
       
       str.toLowerCase().split('').forEach(char => {
           if (char in counts) {
               counts[char]++;
           }
       });
       
       return counts;
   }
   
   countEachVowel("hello world");
   // { a: 0, e: 1, i: 0, o: 2, u: 0 }
   ```

2. **What if 'y' is sometimes a vowel?**

   ```javascript
   function countVowelsWithY(str) {
       // 'y' is vowel if not at start and after consonant
       const vowels = 'aeiou';
       let count = 0;
       
       for (let i = 0; i < str.length; i++) {
           const char = str[i].toLowerCase();
           
           if (vowels.includes(char)) {
               count++;
           } else if (char === 'y' && i > 0 && !vowels.includes(str[i-1].toLowerCase())) {
               count++;  // 'y' acting as vowel
           }
       }
       
       return count;
   }
   ```

3. **How to find vowel positions?**

   ```javascript
   function findVowelPositions(str) {
       const vowels = 'aeiouAEIOU';
       const positions = [];
       
       for (let i = 0; i < str.length; i++) {
           if (vowels.includes(str[i])) {
               positions.push({ char: str[i], index: i });
           }
       }
       
       return positions;
   }
   
   findVowelPositions("hello");
   // [{ char: 'e', index: 1 }, { char: 'o', index: 4 }]
   ```

4. **What about removing vowels?**

   ```javascript
   function removeVowels(str) {
       return str.replace(/[aeiou]/gi, '');
   }
   
   removeVowels("hello world");  // "hll wrld"
   ```

## Visual Explanation

```
String: "hello world"

Character by character:
  h → consonant
  e → vowel     ✓ (count = 1)
  l → consonant
  l → consonant
  o → vowel     ✓ (count = 2)
    → space (skip)
  w → consonant
  o → vowel     ✓ (count = 3)
  r → consonant
  l → consonant
  d → consonant

Total vowels: 3
```

## Vowel Information

### English Vowels

```
a, e, i, o, u

Sometimes: y
- "gym" - y is vowel
- "yes" - y is consonant
```

### Vowel Distribution

```javascript
// Typical English text has ~40% vowels
function calculateVowelPercentage(str) {
    const letters = str.replace(/[^a-zA-Z]/g, '');
    const vowelCount = countVowels(letters);
    return (vowelCount / letters.length * 100).toFixed(2) + '%';
}
```

## Performance Comparison

```javascript
const longText = "Lorem ipsum dolor sit amet ".repeat(1000);

console.time('for loop');
countVowelsLoop(longText);
console.timeEnd('for loop');

console.time('filter');
countVowelsFilter(longText);
console.timeEnd('filter');

console.time('reduce');
countVowelsReduce(longText);
console.timeEnd('reduce');

console.time('regex');
countVowelsRegex(longText);
console.timeEnd('regex');

// for loop is typically fastest
```

## Variations

### Count Consonants

```javascript
function countConsonants(str) {
    const letters = str.replace(/[^a-zA-Z]/g, '');
    const vowels = countVowels(letters);
    return letters.length - vowels;
}
```

### Find Longest Vowel Sequence

```javascript
function longestVowelSequence(str) {
    const vowels = 'aeiouAEIOU';
    let maxLen = 0;
    let currentLen = 0;
    
    for (const char of str) {
        if (vowels.includes(char)) {
            currentLen++;
            maxLen = Math.max(maxLen, currentLen);
        } else {
            currentLen = 0;
        }
    }
    
    return maxLen;
}

longestVowelSequence("beautiful");  // 4 ("eaui")
```

### Check if String has all Vowels

```javascript
function hasAllVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    
    return vowels.every(vowel => lowerStr.includes(vowel));
}

hasAllVowels("education");  // true
hasAllVowels("hello");      // false
```

## Practical Applications

- Text analysis
- Readability scoring
- Pronunciation difficulty
- Language detection
- Password strength (vowel ratio)
- Linguistic research
- Speech synthesis

## Related Challenges

- Count consonants
- Remove vowels
- Replace vowels
- Find longest word with most vowels
- Pig Latin translation

## Run Tests

```bash
node tests.js
```
