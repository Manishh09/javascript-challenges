# Memoization

## 📋 Problem Statement

Implement a memoization function that caches results of expensive function calls. When called with the same arguments again, return the cached result instead of recomputing.

## What is Memoization?

Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. It's a specific form of caching applied to function outputs.

### Visual Representation

```
Without Memoization:
  add(2, 3) → Compute: 2 + 3 = 5
  add(2, 3) → Compute: 2 + 3 = 5  (redundant!)
  add(2, 3) → Compute: 2 + 3 = 5  (redundant!)

With Memoization:
  add(2, 3) → Compute: 2 + 3 = 5 → Store in cache {"2,3": 5}
  add(2, 3) → Cache Hit! → Return 5  (instant!)
  add(2, 3) → Cache Hit! → Return 5  (instant!)
```

```javascript
const add = (x, y) => {
  console.log('Computing...');
  return x + y;
}

const memoizedAdd = memoize(add);

Input:  memoizedAdd(2, 3)  // First call
Output: "Computing..." 5

Input:  memoizedAdd(2, 3)  // Second call
Output: 5  // From cache, no "Computing..." log
```

## Solution

```javascript
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = args.join(',');

        if (key in cache) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}
```

**How it works:**
- Create cache object to store results
- Use arguments as cache key (joined as string)
- If key exists in cache, return cached result
- Otherwise, compute, cache, and return result

**Complexity:** O(1) time (cache lookup), O(k) space (k = unique calls)

## Alternative Approaches

<details>
<summary>Using Map (with this context support)</summary>

```javascript
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = args.join(',');
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);  // Preserves 'this'
        cache.set(key, result);
        return result;
    }
}
```

O(1) time, O(k) space - preserves `this` context
</details>

<details>
<summary>Using JSON.stringify for complex arguments</summary>

```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            return cache[key];
        }
        
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}
```

O(1) time, O(k) space - works with objects/arrays
</details>

<details>
<summary>With cache size limit</summary>

```javascript
function memoize(fn, maxSize = 100) {
    const cache = new Map();
    
    return function(...args) {
        const key = args.join(',');
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        if (cache.size >= maxSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);  // Remove oldest entry
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}
```

O(1) time, O(k) space - prevents unlimited memory growth
</details>

## Edge Cases

```javascript
const fn = (x, y) => x + y;
const memoFn = memoize(fn);

memoFn(2, 3);          // 5 (computed)
memoFn(2, 3);          // 5 (cached)
memoFn(3, 2);          // 5 (computed - different arg order)
memoFn.cache = {};     // Cache is private - can't access

// With object methods
const obj = {
    value: 42,
    compute: memoize(function(x) {
        return this.value + x;  // Needs proper 'this' binding
    })
}
```

## Run Tests

```bash
node tests.js
memoize(add)(2, 3)       // 5 (computed)
memoize(add)(2, 3)       // 5 (cached)
memoize(add)(3, 2)       // 5 (computed - different order)
memoize(() => {})        // Works with any function