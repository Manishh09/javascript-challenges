# Currying Challenge

## 📋 Problem Statement

**Currying** is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument at a time.

## What is Currying?

Currying breaks down a function that takes multiple arguments into a series of functions that each take one argument and return another function, until all arguments have been provided.

### Visual Representation

```
Normal Function:              Curried Function:
add(a, b, c)                 add(a)(b)(c)
     ↓                            ↓
   result                   a → b → c → result
```

### Example

```javascript
// Normal function
function sum(a, b, c) {
    return a + b + c;
}
sum(1, 2, 3); // 6

// Curried function
const curriedSum = (a) => (b) => (c) => a + b + c;
curriedSum(1)(2)(3); // 6

// Partial application
const addOne = curriedSum(1);        // returns function
const addOneAndTwo = addOne(2);      // returns function
const result = addOneAndTwo(3);      // 6
```

## Key Concepts

### 1. **Closure**

- Each inner function has access to variables in its outer scope
- Values are "remembered" through closure when inner functions are returned

### 2. **Partial Application**

- You can create specialized functions by pre-filling some arguments
- Makes code more reusable and composable

### 3. **Function Composition**

- Curried functions are easier to compose together
- Enables building complex operations from simple ones

## Real-World Use Cases

### 1. **Configuration Functions**

```javascript
const makeRequest = (baseURL) => (endpoint) => (params) => {
    return fetch(`${baseURL}${endpoint}?${new URLSearchParams(params)}`);
};

const apiRequest = makeRequest('https://api.example.com');
const userRequest = apiRequest('/users');
userRequest({ id: 1 }); // GET https://api.example.com/users?id=1
```

### 2. **Event Handlers**

```javascript
const handleEvent = (eventType) => (selector) => (callback) => {
    document.querySelector(selector).addEventListener(eventType, callback);
};

const onClick = handleEvent('click');
onClick('.button')(() => console.log('Clicked!'));
```

### 3. **Validation Functions**

```javascript
const validate = (regex) => (message) => (value) => {
    return regex.test(value) ? { valid: true } : { valid: false, message };
};

const emailValidator = validate(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)('Invalid email');
emailValidator('test@example.com'); // { valid: true }
```

## Files in This Challenge

| File | Description | Complexity |
|------|-------------|------------|
| `currying.js` | Basic currying examples | Beginner |
| `currying-1.js` | Running total with closure | Beginner |
| `currying-2.js` | Advanced currying patterns | Intermediate |
| `currying.md` | Detailed explanation | Reference |

## Interview Questions

### Common Questions

1. **Q: What is the difference between currying and partial application?**
   - A: Currying always returns unary functions (one argument), while partial application can fix any number of arguments

2. **Q: What are the benefits of currying?**
   - A: Reusability, testability, composition, and creating specialized functions from general ones

3. **Q: When should you use currying?**
   - A: When you need partial application, function composition, or want to create a family of related functions

4. **Q: What are the downsides?**
   - A: Can be harder to read, slight performance overhead, and doesn't work well with variadic functions

## Follow-Up Challenges

1. Implement a generic `curry()` function that works with any function
2. Create an `uncurry()` function that converts a curried function back to normal
3. Implement currying with support for multiple arguments at once
4. Build a real-world application using curried functions

## Time Complexity

- **Currying overhead**: O(1) per function call
- **Total complexity**: Same as the original function

## Space Complexity

- **Space**: O(n) where n is the number of nested closures

## Related Concepts

- **Closures**: How currying maintains access to outer variables
- **Higher-Order Functions**: Functions that return functions
- **Function Composition**: Combining curried functions
- **Partial Application**: Pre-filling arguments

## Best Practices

✅ **DO:**

- Use currying for configuration functions
- Create reusable utility functions
- Compose curried functions for complex logic
- Document the expected argument order

❌ **DON'T:**

- Over-curry simple functions
- Use when argument order frequently changes
- Apply to performance-critical code without testing
- Forget that it creates many function objects

## Resources

- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Functional Programming in JavaScript](https://www.manning.com/books/functional-programming-in-javascript)
- Understanding currying and partial application patterns
