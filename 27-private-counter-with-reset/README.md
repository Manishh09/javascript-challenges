# Clousures

## Problem Statement

Design a counter utility using closures that:

- Supports increment

- Supports reset

- Provides read-only access to current value

- Prevents direct state mutation.

## Example Usage

```javascript
const counter = createCounter();
counter.increment(); // Increases count by 1
console.log(counter.value); // Outputs: 1
counter.increment(); // Increases count by 1
console.log(counter.value); // Outputs: 2

counter.reset(); // Resets count to 0
console.log(counter.value); // Outputs: 0
counter.increment(); // Increases count by 1
console.log(counter.value); // Outputs: 1      
```
