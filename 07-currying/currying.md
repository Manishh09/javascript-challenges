### Currying

- Definition:
- It is a functional programming technique
- It's the process of converting a function that takes multiple arguments into a sequence of functions that each take one argument at a time
- when you curry a function, it returns a new function for each argument until all arguments are provided.
- The key concept here is closure - each inner function has access to the variables in its outer scope.

- Example:
  ```javascript
    // Normal function
    function sum(a, b) {
        return a + b;
    }

    // Curried function
    const curriedSum = (a) => (b) => (c) => a + b + c;
```

- So:

  - The innermost function can access 'a' and 'b' even though they were passed to the outer functions
  - The values of 'a' and 'b' are "remembered" through closure when the inner functions are returned
  - This makes currying powerful for creating reusable, specialized functions while maintaining flexibility in how you use them.
