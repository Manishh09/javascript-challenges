# Increment and Reset Counter

## 📋 Problem Statement

Create a counter function that increments on each call and can be reset to zero.

```javascript
const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // 0
counter.increment(); // 1
```

## Solution

```javascript
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            return ++count;
        },
        reset: function() {
            count = 0;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
```

**How it works:**

- `count` is private variable in closure
- Methods have access to count
- Cannot be modified from outside

**Complexity:** O(1) time, O(1) space

## Alternative Approaches

<details>
<summary>Using class</summary>

```javascript
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        return ++this.count;
    }
    
    reset() {
        this.count = 0;
        return this.count;
    }
}

const counter = new Counter();
```

O(1) time, O(1) space
</details>

<details>
<summary>Using private fields (ES2022)</summary>

```javascript
class Counter {
    #count = 0;
    
    increment() {
        return ++this.#count;
    }
    
    reset() {
        this.#count = 0;
        return this.#count;
    }
}
```

O(1) time, O(1) space - truly private
</details>

## Edge Cases

```javascript
const c = createCounter();
c.increment();  // 1
c.increment();  // 2
c.reset();      // 0
c.getCount();   // 0
```

## Run Tests

```bash
node tests.js
```

- `#count` is truly private
- Cannot be accessed outside class
- Modern JavaScript feature

### Approach 4: Function with Properties

```javascript
function counter() {
    if (!counter.count) {
        counter.count = 0;
    }
    return ++counter.count;
}

counter.reset = function() {
    counter.count = 0;
    return counter.count;
};
```

**How it works:**

- Store count on function object itself
- Less encapsulated but simple

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Closure | O(1) per operation | O(1) |
| Class | O(1) per operation | O(1) |
| Private Fields | O(1) per operation | O(1) |
| Function Properties | O(1) per operation | O(1) |

**Best Choice:** Closure or Class with private fields (best encapsulation)

## Features to Add

### Extended Counter

```javascript
function createAdvancedCounter(initialValue = 0, step = 1) {
    let count = initialValue;
    
    return {
        increment: () => count += step,
        decrement: () => count -= step,
        reset: () => count = initialValue,
        setValue: (value) => count = value,
        getCount: () => count
    };
}
```

### Multiple Counters

```javascript
const createCounterFactory = () => {
    const counters = new Map();
    
    return {
        create: (id) => {
            counters.set(id, 0);
        },
        increment: (id) => {
            const current = counters.get(id) || 0;
            counters.set(id, current + 1);
            return counters.get(id);
        },
        reset: (id) => {
            counters.set(id, 0);
        },
        getAll: () => Object.fromEntries(counters)
    };
};
```

## Edge Cases

- Multiple increment calls
- Reset without increment
- Getting count without incrementing
- Negative counts (if decrement added)
- Concurrent access (in async scenarios)

## Interview Follow-ups

1. **How would you make it thread-safe?**
   - In JavaScript (single-threaded), not typically needed
   - In other contexts: use locks/mutexes

2. **Can you add decrement functionality?**

   ```javascript
   decrement: function() {
       return --count;
   }
   ```

3. **How to set initial value?**

   ```javascript
   function createCounter(initial = 0) {
       let count = initial;
       // ... rest of implementation
   }
   ```

4. **What about min/max limits?**

   ```javascript
   increment: function() {
       if (count < maxValue) {
           return ++count;
       }
       return count;
   }
   ```

## Closure Concept

```javascript
// Closure allows inner function to access outer scope
function outer() {
    let privateVar = 0;  // Private to outer scope
    
    return function inner() {
        privateVar++;    // Can access privateVar
        return privateVar;
    };
}

const counter = outer();
counter();  // 1
counter();  // 2
// privateVar is not accessible here!
```

## Practical Applications

- Click counters
- Page visit tracking
- Rate limiting
- Event counting
- Inventory management
- Score keeping

## Related Challenges

- Rate limiter
- Debounce/throttle counters
- State management
- Event emitters

## Run Tests

```bash
node tests.js
```
