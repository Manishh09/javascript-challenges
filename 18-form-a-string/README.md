# Form a String

## 📋 Problem Statement

Build strings from individual characters or combine multiple strings.

```javascript
Input:  ['h', 'e', 'l', 'l', 'o']
Output: "hello"
```

## Solution

```javascript
function formString(chars) {
    return chars.join('');
}
```

**How it works:**

- Most efficient method
- Joins array elements with empty string
- Native implementation optimized

**Complexity:** O(n) time, O(n) space

## Alternative Approaches

<details>
<summary>String concatenation</summary>

```javascript
function formString(chars) {
    let result = '';
    
    for (const char of chars) {
        result += char;
    }
    
    return result;
}
```

O(n) time, O(n) space - less efficient (strings are immutable)
</details>

<details>
<summary>Using reduce</summary>

```javascript
function formString(chars) {
    return chars.reduce((acc, char) => acc + char, '');
}
```

O(n) time, O(n) space
</details>

<details>
<summary>Template literals</summary>

```javascript
function buildGreeting(name, greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}
```

O(n) time, O(n) space
</details>

## Edge Cases

```javascript
formString([])                    // ""
formString(['a'])                 // "a"
formString(['h', 'i'])            // "hi"
```

## Run Tests

```bash
node tests.js
```

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| join() | O(n) | O(n) |
| Concatenation (+) | O(n²)* | O(n) |
| reduce() | O(n²)* | O(n) |
| Template Literals | O(n) | O(n) |
| Manual loop | O(n²)* | O(n) |

\* Each concatenation creates new string (immutable)

**Best Choice:** `join()` - fastest and most idiomatic

## String Immutability

JavaScript strings are **immutable**:

```javascript
// Each += creates a NEW string
let str = '';
str += 'a';  // Creates new string "a"
str += 'b';  // Creates new string "ab"
str += 'c';  // Creates new string "abc"

// This is why join() is faster - single operation
['a', 'b', 'c'].join('');  // One string creation
```

## Edge Cases

- Empty array: `[]` → `""`
- Single character: `['a']` → `"a"`
- Special characters: `['!', '@', '#']` → `"!@#"`
- Numbers: `[1, 2, 3]` → `"123"`
- Mixed types: `[1, 'a', true]` → `"1atrue"`
- Unicode/Emoji: `['👋', '🌍']` → `"👋🌍"`

## Interview Follow-ups

1. **How to reverse a string while forming it?**

   ```javascript
   function reverseForm(chars) {
       return chars.reverse().join('');
   }
   
   // Or without mutating
   function reverseFormSafe(chars) {
       return [...chars].reverse().join('');
   }
   ```

2. **Form string with delimiter?**

   ```javascript
   function formWithDelimiter(chars, delimiter = '-') {
       return chars.join(delimiter);
   }
   
   formWithDelimiter(['h', 'e', 'l', 'l', 'o'], '-');  // "h-e-l-l-o"
   ```

3. **What about StringBuilder pattern for large strings?**

   ```javascript
   // JavaScript doesn't have StringBuilder, but can use array
   class StringBuilder {
       constructor() {
           this.parts = [];
       }
       
       append(str) {
           this.parts.push(str);
           return this;  // For chaining
       }
       
       toString() {
           return this.parts.join('');
       }
   }
   
   const sb = new StringBuilder();
   sb.append('Hello').append(' ').append('World');
   console.log(sb.toString());  // "Hello World"
   ```

4. **How to form from different sources?**

   ```javascript
   // From string (split and rejoin)
   const str = "hello";
   const chars = str.split('');
   const reformed = chars.join('');
   
   // From char codes
   const codes = [72, 101, 108, 108, 111];
   const fromCodes = String.fromCharCode(...codes);  // "Hello"
   
   // From code points (Unicode)
   const codePoints = [0x1F44B, 0x1F30D];  // 👋🌍
   const fromCodePoints = String.fromCodePoint(...codePoints);
   ```

## Performance Comparison

```javascript
const chars = Array.from({ length: 10000 }, (_, i) => 
    String.fromCharCode(97 + (i % 26))
);

console.time('join');
chars.join('');
console.timeEnd('join');

console.time('concatenation');
let str = '';
for (const char of chars) {
    str += char;
}
console.timeEnd('concatenation');

console.time('reduce');
chars.reduce((acc, char) => acc + char, '');
console.timeEnd('reduce');

// join() is significantly faster!
```

## String Building Patterns

### Pattern 1: Build CSV

```javascript
function buildCSV(rows) {
    return rows.map(row => row.join(',')).join('\n');
}

const data = [
    ['Name', 'Age', 'City'],
    ['John', '30', 'NYC'],
    ['Jane', '25', 'LA']
];
buildCSV(data);
// "Name,Age,City\nJohn,30,NYC\nJane,25,LA"
```

### Pattern 2: Build URL

```javascript
function buildURL(base, params) {
    const query = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    return `${base}?${query}`;
}

buildURL('https://api.example.com/search', { q: 'hello world', limit: 10 });
// "https://api.example.com/search?q=hello%20world&limit=10"
```

### Pattern 3: Build HTML

```javascript
function buildList(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

buildList(['Apple', 'Banana', 'Cherry']);
// "<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>"
```

### Pattern 4: Build SQL

```javascript
function buildInsert(table, data) {
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data)
        .map(v => typeof v === 'string' ? `'${v}'` : v)
        .join(', ');
    return `INSERT INTO ${table} (${columns}) VALUES (${values})`;
}

buildInsert('users', { name: 'John', age: 30, active: true });
// "INSERT INTO users (name, age, active) VALUES ('John', 30, true)"
```

## Practical Applications

- String manipulation
- Data serialization (CSV, JSON)
- URL building
- HTML generation
- Template rendering
- Log formatting
- Report generation

## Related Challenges

- Reverse string
- String compression
- String permutations
- Anagram generation
- String parsing

## Run Tests

```bash
node tests.js
```
