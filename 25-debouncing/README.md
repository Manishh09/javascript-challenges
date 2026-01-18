# Debouncing

## 📋 Problem Statement Statement

Implement a debounce function that delays execution until after a specified wait time has elapsed since the last invocation.

**Debouncing** ensures that a function is executed only after the user has stopped performing a particular action for a specified duration.

**Visual Representation:**

```

User actions:    ↓  ↓  ↓  ↓  ↓          ↓  ↓  ↓
Time:           |-----|-----|-----|-----|-----|
Function calls:                     ✓         ✓
                    (wait 300ms after last action)
```

**Example:**

```javascript
User types:   a → ap → app
Function:     [wait 300ms] → execute('app')
```

## Solution

```javascript
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
```

**How it works:**
- Store timeout ID in closure
- Each call clears previous timeout
- Set new timeout to execute function
- Function executes only after delay with no new calls

**Complexity:** O(1) time, O(1) space

## Alternative Approaches

<details>
<summary>Debounce with leading edge</summary>

```javascript
function debounce(fn, delay, immediate = false) {
    let timeoutId;

    return function(...args) {
        const context = this;
        
        const later = () => {
            timeoutId = null;
            if (!immediate) fn.apply(context, args);
        };

        const callNow = immediate && !timeoutId;
        
        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, delay);
        
        if (callNow) fn.apply(context, args);
    }
}
```
Execute immediately on first call, then debounce
</details>

<details>
<summary>Debounce with cancel</summary>

```javascript
function debounce(fn, delay) {
    let timeoutId;

    const debounced = function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
    
    debounced.cancel = function() {
        clearTimeout(timeoutId);
    };
    
    return debounced;
}
```
Allows manual cancellation
</details>

## Edge Cases

```javascript
const debouncedFn = debounce(console.log, 300);

debouncedFn('a');   // Timer starts
debouncedFn('b');   // Timer resets
debouncedFn('c');   // Timer resets
// After 300ms: logs 'c'
```

## Run Tests

```bash
node tests.js
```

### Approach 3: Debounce with Cancel Method

```javascript
function debounce(fn, delay) {
    let timeoutId;

    const debounced = function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };

    debounced.cancel = function() {
        clearTimeout(timeoutId);
        timeoutId = null;
    };

    debounced.flush = function() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            fn.apply(this, arguments);
            timeoutId = null;
        }
    };

    return debounced;
}
```

**How it works:**

- Adds `cancel()` method to clear pending execution
- Adds `flush()` method to immediately execute pending call
- Useful for cleanup or manual control

### Approach 4: Promise-based Debounce

```javascript
function debounce(fn, delay) {
    let timeoutId;
    let latestResolve;
    let latestReject;

    return function(...args) {
        return new Promise((resolve, reject) => {
            // Cancel previous pending promise
            if (latestReject) {
                latestReject({ cancelled: true });
            }

            latestResolve = resolve;
            latestReject = reject;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                try {
                    const result = fn.apply(this, args);
                    latestResolve(result);
                } catch (error) {
                    latestReject(error);
                }
            }, delay);
        });
    };
}
```

**How it works:**

- Returns a Promise for async handling
- Resolves with function result
- Rejects previous promises when new call arrives

## Complexity Analysis

| Approach | Time Complexity | Space Complexity | Use Case |
|----------|----------------|------------------|----------|
| Basic Debounce | O(1) | O(1) | Simple scenarios |
| Leading Edge | O(1) | O(1) | Immediate first response |
| With Cancel | O(1) | O(1) | Need manual control |
| Promise-based | O(1) | O(1) | Async operations |

**Best Choice:**

- **Basic Debounce** for most use cases (search, validation)
- **Leading Edge** when immediate feedback needed (button clicks)
- **With Cancel** when cleanup required (component unmount)
- **Promise-based** for async workflows (API calls)

## Edge Cases

- **Empty function:** Should throw TypeError
- **Negative delay:** Should throw TypeError or default to 0
- **Multiple rapid calls:** Only last call should execute
- **Context preservation:** `this` should be preserved for object methods
- **Argument passing:** All arguments should be passed correctly
- **Component unmount:** Need to cancel pending calls to avoid memory leaks

## Interview Follow-ups

### 1. **What's the difference between debouncing and throttling?**

**Debouncing:**

- Executes function **after** activity stops
- Resets timer on every call
- Use case: Search input, form validation

**Throttling:**

- Executes function **at regular intervals**
- Ignores calls within interval
- Use case: Scroll events, resize handlers

```javascript
// Debounce: Executes once after activity stops
debouncedFn(); debouncedFn(); debouncedFn();
// Wait 300ms → executes once ✓

// Throttle: Executes at most once per interval
throttledFn(); throttledFn(); throttledFn();
// Executes first ✓, waits 300ms, executes again ✓
```

### 2. **How would you implement debounce with leading and trailing edge options?**

```javascript
function debounce(fn, delay, { leading = false, trailing = true } = {}) {
    let timeoutId;
    let lastArgs;

    return function(...args) {
        lastArgs = args;
        
        if (!timeoutId && leading) {
            fn.apply(this, args);
        }

        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            if (trailing && lastArgs) {
                fn.apply(this, lastArgs);
            }
            timeoutId = null;
            lastArgs = null;
        }, delay);
    };
}

// Usage:
const debouncedFn = debounce(fn, 300, { 
    leading: true,   // Execute immediately on first call
    trailing: true   // Execute after delay
});
```

### 3. **How do you cancel a debounced function?**

```javascript
function debounce(fn, delay) {
    let timeoutId;

    const debounced = function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };

    debounced.cancel = function() {
        clearTimeout(timeoutId);
    };

    return debounced;
}

// Usage in React component:
useEffect(() => {
    const debouncedSearch = debounce(searchAPI, 300);
    
    return () => {
        debouncedSearch.cancel(); // Cleanup on unmount
    };
}, []);
```

### 4. **How would you test a debounced function?**

```javascript
// Using Jest with fake timers
describe('debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('should delay execution', () => {
        const fn = jest.fn();
        const debounced = debounce(fn, 300);

        debounced();
        expect(fn).not.toHaveBeenCalled();

        jest.advanceTimersByTime(300);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test('should reset timer on multiple calls', () => {
        const fn = jest.fn();
        const debounced = debounce(fn, 300);

        debounced();
        jest.advanceTimersByTime(100);
        debounced();
        jest.advanceTimersByTime(100);
        debounced();

        expect(fn).not.toHaveBeenCalled();

        jest.advanceTimersByTime(300);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
```

### 5. **How does debouncing impact performance and user experience?**

**Performance Benefits:**

```javascript
// Without debounce: 10 API calls
input.addEventListener('keyup', (e) => {
    searchAPI(e.target.value); // Called on every keystroke
});

// With debounce: 1 API call
input.addEventListener('keyup', debounce((e) => {
    searchAPI(e.target.value); // Called once after typing stops
}, 300));
```

**Metrics:**

- Reduces API calls by 80-95%
- Decreases server load
- Improves response time
- Better battery life (mobile)

**UX Considerations:**

- 150-300ms: Good for search inputs
- 500-1000ms: Good for auto-save
- Too short: Doesn't help performance
- Too long: Feels sluggish

## Practical Applications

### 1. Search Input with Debouncing

```javascript
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

const searchAPI = async (query) => {
    if (!query) return;
    
    const response = await fetch(`/api/search?q=${query}`);
    const results = await response.json();
    resultsDiv.innerHTML = results.map(r => `<div>${r.title}</div>`).join('');
};

const debouncedSearch = debounce(searchAPI, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```

### 2. Window Resize Handler

```javascript
const updateLayout = () => {
    const width = window.innerWidth;
    console.log('Updating layout for width:', width);
    // Expensive layout calculations
};

const debouncedResize = debounce(updateLayout, 250);

window.addEventListener('resize', debouncedResize);
```

### 3. Auto-save Feature

```javascript
const editor = document.getElementById('editor');

const autoSave = async (content) => {
    await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log('Content saved!');
};

const debouncedAutoSave = debounce(autoSave, 1000);

editor.addEventListener('input', (e) => {
    debouncedAutoSave(e.target.value);
});
```

### 4. Form Validation

```javascript
const validateEmail = async (email) => {
    const response = await fetch(`/api/validate-email?email=${email}`);
    const { valid } = await response.json();
    
    const errorMsg = document.getElementById('email-error');
    errorMsg.textContent = valid ? '' : 'Email already exists';
};

const debouncedValidation = debounce(validateEmail, 500);

emailInput.addEventListener('input', (e) => {
    debouncedValidation(e.target.value);
});
```

### 5. React Hook for Debouncing

```javascript
import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return debouncedValue;
}

// Usage:
function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        if (debouncedSearchTerm) {
            searchAPI(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    return (
        <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
        />
    );
}
```

## Real-world Libraries

Popular libraries that use debouncing:

1. **Lodash** - `_.debounce(func, wait)`
2. **Underscore.js** - `_.debounce(function, wait)`
3. **RxJS** - `debounceTime(duration)` operator
4. **React** - Custom hooks or third-party libraries

## Related Challenges

- [26. Throttling](../26-throttling) - Execute at regular intervals
- [22. Memoization](../22-memoization) - Cache function results
- [10. API Calls](../10-api-calls) - Async operations

## Run Tests

```bash
node tests.js
```

## Key Takeaways

✓ **Debouncing delays execution** until activity stops  
✓ **Reduces unnecessary function calls** (API calls, expensive computations)  
✓ **Improves performance** and user experience  
✓ **Essential for search inputs**, form validation, auto-save  
✓ **Use leading edge** when immediate feedback is needed  
✓ **Always cancel on cleanup** to prevent memory leaks  
✓ **Choose appropriate delay** based on use case (150-1000ms)
