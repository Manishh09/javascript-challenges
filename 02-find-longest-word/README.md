# Find Longest Word

## 📋 Problem Statement

Given a string of words, find and return the longest word. If multiple words have the same maximum length, return the first one.

```javascript
Input:  "The quick brown fox jumps"
Output: "quick"
```

## Solution

```javascript
function findLongestWord(str) {
    return str.split(' ').reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}
```

**How it works:**
- Split string into array of words
- Use reduce to compare each word with current longest
- Return word with maximum length

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>Using for loop</summary>

```javascript
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = '';
    
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}
```
O(n) time, O(n) space
</details>

<details>
<summary>Using sort</summary>

```javascript
function findLongestWord(str) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0];
}
```
O(n log n) time, O(n) space - slower due to sorting
</details>

## Edge Cases

```javascript
findLongestWord("")                 // ""
findLongestWord("hello")            // "hello"
findLongestWord("hi bye")           // "hi" (first one)
```

## Run Tests

```bash
node tests.js
```

3. **Can you return the length instead of the word?**

   ```javascript
   function longestWordLength(str) {
       return Math.max(...str.split(' ').map(w => w.length));
   }
   ```

4. **How would you handle case sensitivity?**
   - Convert to same case before comparison if needed

## Related Challenges

- Find shortest word
- Find word at specific position
- Count words in string
- Find average word length

## Run Tests

```bash
node tests.js
```
