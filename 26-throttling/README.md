# Throttling

## 📋 Problem Statement

Implement a throttle function that ensures a callback is called at most once in a specified time period, regardless of how many times it's invoked.

**Throttling** guarantees that a function executes at regular intervals, no matter how frequently it's called.

**Visual Representation:**

```
User actions:    ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓
Time:           |-----------|-----------|-----|
Function calls: ✓           ✓           ✓
                (execute every 2000ms interval)
```

**Example:**
```javascript
User scrolls:  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
Time:         |-----|-----|-----|
Function:     ✓     ✓     ✓
              (execute every 2000ms)
```

## Solution

```javascript
function throttle(fn, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();
        
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    }
}
```

**How it works:**
- Track timestamp of last execution
- On each call, check time elapsed
- Execute only if delay has passed
- Update last call timestamp

**Complexity:** O(1) time, O(1) space

## Alternative Approaches

<details>
<summary>Throttle with leading and trailing edge</summary>

```javascript
function throttle(fn, delay, { leading = true, trailing = false } = {}) {
    let timeoutId;
    let lastArgs;
    let lastCallTime = 0;

    return function(...args) {
        const now = Date.now();
        
        if (!lastCallTime && !leading) {
            lastCallTime = now;
        }

        const remaining = delay - (now - lastCallTime);

        if (remaining <= 0) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastCallTime = now;
            fn.apply(this, args);
            lastArgs = null;
        } else if (!timeoutId && trailing) {
            lastArgs = args;
            timeoutId = setTimeout(() => {
                lastCallTime = leading ? Date.now() : 0;
                timeoutId = null;
                fn.apply(this, lastArgs);
                lastArgs = null;
            }, remaining);
        }
    }
}
```
Control leading/trailing execution
</details>

<details>
<summary>Throttle with cancel</summary>

```javascript
function throttle(fn, delay) {
    let lastCall = 0;
    let timeoutId;

    const throttled = function(...args) {
        const now = Date.now();
        
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
    
    throttled.cancel = function() {
        clearTimeout(timeoutId);
        lastCall = 0;
    };
    
    return throttled;
}
```
Allows manual reset
</details>

## Edge Cases

```javascript
const throttledFn = throttle(console.log, 2000);

throttledFn('a'); // t=0ms    → Executes
throttledFn('b'); // t=500ms  → Ignored
throttledFn('c'); // t=1000ms → Ignored
throttledFn('d'); // t=2000ms → Executes
```

## Run Tests

```bash
node tests.js
```
            }, remaining);
        }
    };
}
```

**How it works:**

- `leading = true`: Execute immediately on first call
- `trailing = true`: Execute once more after interval
- Combines benefits of both approaches

### Approach 3: Throttle with Cancel Method

```javascript
function throttle(fn, delay) {
    let timeoutId;
    let lastCall = 0;
    let lastArgs;

    const throttled = function(...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCall);

        lastArgs = args;

        if (remaining <= 0) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastCall = now;
            fn.apply(this, args);
        } else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                lastCall = Date.now();
                timeoutId = null;
                fn.apply(this, lastArgs);
            }, remaining);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeoutId);
        lastCall = 0;
        timeoutId = null;
        lastArgs = null;
    };

    throttled.flush = function() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            lastCall = Date.now();
            fn.apply(this, lastArgs);
            timeoutId = null;
            lastArgs = null;
        }
    };

    return throttled;
}
```

**How it works:**

- Adds `cancel()` to stop pending execution
- Adds `flush()` to immediately execute pending call
- Useful for cleanup scenarios

### Approach 4: RequestAnimationFrame-based Throttle

```javascript
function throttleRAF(fn) {
    let frameId;
    let lastArgs;

    return function(...args) {
        lastArgs = args;

        if (!frameId) {
            frameId = requestAnimationFrame(() => {
                fn.apply(this, lastArgs);
                frameId = null;
            });
        }
    };
}
```

**How it works:**

- Uses `requestAnimationFrame` for smooth animations
- Automatically syncs with browser refresh rate (~60fps)
- Ideal for scroll/animation handlers

## Complexity Analysis

| Approach | Time Complexity | Space Complexity | Use Case |
|----------|----------------|------------------|----------|
| Basic Throttle | O(1) | O(1) | General throttling |
| Leading/Trailing | O(1) | O(1) | Flexible control |
| With Cancel | O(1) | O(1) | Cleanup needed |
| RAF-based | O(1) | O(1) | Animations/scroll |

**Best Choice:**

- **Basic Throttle** for most use cases (scroll, resize)
- **Leading/Trailing** when you need both first and last execution
- **With Cancel** for component unmount scenarios
- **RAF-based** for smooth visual updates (60fps)

## Edge Cases

- **Empty function:** Should throw TypeError
- **Negative delay:** Should throw TypeError or default to 0
- **Rapid successive calls:** Only execute at specified intervals
- **Context preservation:** `this` should work with object methods
- **First call:** Should execute immediately (leading edge)
- **Last call:** May be ignored unless trailing edge enabled
- **Zero delay:** Should allow one execution per event loop iteration

## Interview Follow-ups

### 1. **What's the difference between throttling and debouncing?**

**Throttling:**

- Executes at **regular intervals**
- First call executes immediately
- Guarantees execution during activity
- Use case: Scroll handlers, API rate limiting

**Debouncing:**

- Executes **after** activity stops
- Delays execution until quiet period
- May never execute if activity continues
- Use case: Search input, form validation

```javascript
// Visual comparison:
Continuous scroll event: ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

Throttled (1000ms):      ✓___✓___✓___✓___
Debounced (1000ms):      ________________✓ (after scroll stops)
```

### 2. **How would you implement throttling for API rate limiting?**

```javascript
class APIThrottler {
    constructor(requestsPerSecond) {
        this.interval = 1000 / requestsPerSecond;
        this.queue = [];
        this.processing = false;
    }

    async request(fn) {
        return new Promise((resolve, reject) => {
            this.queue.push({ fn, resolve, reject });
            this.processQueue();
        });
    }

    async processQueue() {
        if (this.processing || this.queue.length === 0) return;

        this.processing = true;
        const { fn, resolve, reject } = this.queue.shift();

        try {
            const result = await fn();
            resolve(result);
        } catch (error) {
            reject(error);
        }

        setTimeout(() => {
            this.processing = false;
            this.processQueue();
        }, this.interval);
    }
}

// Usage: Max 5 requests per second
const throttler = new APIThrottler(5);

async function fetchData(url) {
    return throttler.request(() => fetch(url));
}

// These will be throttled to 5/second
for (let i = 0; i < 20; i++) {
    fetchData(`/api/data/${i}`);
}
```

### 3. **How do you handle throttling with promises?**

```javascript
function throttleAsync(fn, delay) {
    let lastCall = 0;
    let pendingPromise = null;

    return async function(...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCall);

        if (remaining <= 0) {
            lastCall = now;
            return fn.apply(this, args);
        }

        if (!pendingPromise) {
            pendingPromise = new Promise((resolve) => {
                setTimeout(() => {
                    lastCall = Date.now();
                    pendingPromise = null;
                    resolve(fn.apply(this, args));
                }, remaining);
            });
        }

        return pendingPromise;
    };
}

// Usage:
const throttledFetch = throttleAsync(fetchAPI, 1000);

// Multiple calls return the same pending promise
const promise1 = throttledFetch('/api/data'); // Executes
const promise2 = throttledFetch('/api/data'); // Waits and reuses promise
const promise3 = throttledFetch('/api/data'); // Waits and reuses promise

const [result1, result2, result3] = await Promise.all([
    promise1, promise2, promise3
]);
```

### 4. **How would you implement throttling in React?**

```javascript
import { useCallback, useRef } from 'react';

function useThrottle(callback, delay) {
    const lastCall = useRef(0);
    const timeoutRef = useRef(null);

    return useCallback((...args) => {
        const now = Date.now();
        const remaining = delay - (now - lastCall.current);

        if (remaining <= 0) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            lastCall.current = now;
            callback(...args);
        } else if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
                lastCall.current = Date.now();
                timeoutRef.current = null;
                callback(...args);
            }, remaining);
        }
    }, [callback, delay]);
}

// Usage in component:
function ScrollTracker() {
    const handleScroll = useThrottle((e) => {
        console.log('Scroll position:', window.scrollY);
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return <div>Scroll the page...</div>;
}
```

### 5. **What are the performance implications of throttling?**

**Without Throttling:**

```javascript
// Scroll event fires 100+ times per second
window.addEventListener('scroll', () => {
    updateUI(); // Called 100+ times/sec
    logAnalytics(); // Called 100+ times/sec
});

// Performance: 
// - High CPU usage
// - UI jank/stuttering
// - Excessive DOM updates
```

**With Throttling:**

```javascript
// Throttled to 10 times per second
window.addEventListener('scroll', throttle(() => {
    updateUI(); // Called 10 times/sec
    logAnalytics(); // Called 10 times/sec
}, 100));

// Performance Benefits:
// - 90% reduction in function calls
// - Smoother UI rendering
// - Better frame rate (60fps maintained)
// - Lower CPU/battery usage
```

**Metrics:**

- Function calls: 100/sec → 10/sec (90% reduction)
- CPU usage: 80% → 15% (dramatic improvement)
- Frame rate: 20fps → 60fps (smooth animations)

## Practical Applications

### 1. Infinite Scroll Implementation

```javascript
const container = document.getElementById('content');
const loadMoreContent = async () => {
    const response = await fetch('/api/load-more');
    const newItems = await response.json();
    container.innerHTML += newItems.map(item => 
        `<div class="item">${item.title}</div>`
    ).join('');
};

const throttledLoadMore = throttle(loadMoreContent, 500);

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const visible = document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const bottomOfPage = visible + scrollY >= pageHeight - 100;

    if (bottomOfPage) {
        throttledLoadMore();
    }
});
```

### 2. Mouse Move Tracker

```javascript
const cursor = document.getElementById('cursor');

const updateCursor = (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
};

// Update cursor position max 60 times per second
const throttledUpdateCursor = throttle(updateCursor, 1000/60);

document.addEventListener('mousemove', throttledUpdateCursor);
```

### 3. Button Click Prevention (Submit Button)

```javascript
const submitButton = document.getElementById('submit');

const handleSubmit = async () => {
    console.log('Submitting form...');
    await fetch('/api/submit', { method: 'POST' });
    console.log('Form submitted!');
};

// Prevent multiple submissions within 2 seconds
const throttledSubmit = throttle(handleSubmit, 2000);

submitButton.addEventListener('click', throttledSubmit);
```

### 4. Game Loop / Frame Rate Limiting

```javascript
class Game {
    constructor() {
        this.lastUpdate = 0;
        this.targetFPS = 60;
        this.frameDelay = 1000 / this.targetFPS;
    }

    update() {
        const now = Date.now();
        const delta = now - this.lastUpdate;

        if (delta >= this.frameDelay) {
            this.lastUpdate = now - (delta % this.frameDelay);
            this.render();
        }

        requestAnimationFrame(() => this.update());
    }

    render() {
        // Game rendering logic
        console.log('Frame rendered');
    }

    start() {
        this.lastUpdate = Date.now();
        this.update();
    }
}

const game = new Game();
game.start();
```

### 5. Real-time Search with Throttling

```javascript
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

const performSearch = async (query) => {
    if (query.length < 2) return;
    
    const response = await fetch(`/api/search?q=${query}`);
    const results = await response.json();
    
    resultsDiv.innerHTML = results
        .map(r => `<div class="result">${r.title}</div>`)
        .join('');
};

// Search as user types, but max 3 times per second
const throttledSearch = throttle(performSearch, 333);

searchInput.addEventListener('input', (e) => {
    throttledSearch(e.target.value);
});
```

### 6. Window Resize Handler

```javascript
const updateLayout = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    console.log(`Window resized to: ${width}x${height}`);
    
    // Update responsive layout
    if (width < 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
};

// Update layout max 5 times per second during resize
const throttledResize = throttle(updateLayout, 200);

window.addEventListener('resize', throttledResize);
```

## Real-world Libraries

Popular libraries with throttling:

1. **Lodash** - `_.throttle(func, wait)`
2. **Underscore.js** - `_.throttle(function, wait)`
3. **RxJS** - `throttleTime(duration)` operator
4. **React** - Custom hooks for throttling

## Related Challenges

- [25. Debouncing](../25-debouncing) - Execute after activity stops
- [22. Memoization](../22-memoization) - Cache function results
- [10. API Calls](../10-api-calls) - Async operations

## Run Tests

```bash
node tests.js
```

## Key Takeaways

✓ **Throttling limits execution rate** to intervals  
✓ **Guarantees regular execution** during continuous activity  
✓ **Essential for scroll/resize handlers** to maintain 60fps  
✓ **Prevents excessive API calls** and server load  
✓ **Use leading edge** for immediate first response  
✓ **Consider trailing edge** to capture final state  
✓ **RequestAnimationFrame** ideal for visual updates  
✓ **Always cleanup throttled functions** on component unmount
