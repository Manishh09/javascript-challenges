# Reverse String

## 📋 Problem Statement

Given a string, return a new string with characters in reverse order.

```javascript
Input:  "hello"
Output: "olleh"
```

## Solution

```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```

**How it works:**

- `split('')` converts string to array of characters
- `reverse()` reverses the array
- `join('')` joins back into string

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Using for loop</summary>

```javascript
function reverseString(str) {
    let reversed = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}
```

O(n) time, O(n) space
</details>

<details>
<summary>Using reduce</summary>

```javascript
function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
```

O(n) time, O(n) space
</details>

<details>
<summary>Using recursion</summary>

```javascript
function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.slice(1)) + str[0];
}
```

O(n) time, O(n) space (call stack)
</details>

## Edge Cases

```javascript
reverseString("")           // ""
reverseString("a")          // "a"
reverseString("hello")      // "olleh"
```

## Run Tests

```bash
node tests.js
```

## Edge Cases

- Empty string: `""` → `""`
- Single character: `"a"` → `"a"`
- Palindrome: `"racecar"` → `"racecar"`
- With spaces: `"hello world"` → `"dlrow olleh"`
- Special characters: `"a!b@c#"` → `"#c@b!a"`
- Unicode: `"👋🌍"` → May need special handling

## Interview Follow-ups

1. **Can you reverse only words but keep word order?**

   ```javascript
   function reverseWords(str) {
       return str.split(' ').map(reverseString).join(' ');
   }
   // "hello world" → "olleh dlrow"
   ```

2. **Can you reverse word order but keep words intact?**

   ```javascript
   function reverseWordOrder(str) {
       return str.split(' ').reverse().join(' ');
   }
   // "hello world" → "world hello"
   ```

3. **How would you reverse in-place (no extra space)?**
   - Not possible in JavaScript (strings are immutable)
   - In languages with mutable strings: two-pointer swap

4. **What about Unicode/emoji?**

   ```javascript
   // For proper Unicode handling
   function reverseUnicode(str) {
       return [...str].reverse().join('');
   }
   ```

## Performance Considerations

```javascript
// For very long strings
const longString = "a".repeat(1000000);

// Fastest: split-reverse-join (native methods)
console.time('split-reverse-join');
longString.split('').reverse().join('');
console.timeEnd('split-reverse-join');

// Slower: string concatenation (creates new string each time)
console.time('for loop');
let result = '';
for (let i = longString.length - 1; i >= 0; i--) {
    result += longString[i];
}
console.timeEnd('for loop');
```

## Related Challenges

- Check if string is palindrome
- Reverse words in sentence
- Reverse array
- Rotate string
- String permutations

## Run Tests

```bash
node tests.js
```
