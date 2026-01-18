# API Calls

## 📋 Problem Statement

Demonstrate how to make API calls in JavaScript using fetch with promises and async/await.

```javascript
Input:  userId = 1
Output: { id: 1, name: "John", ... }
```

## Solution

```javascript
async function fetchUser(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```

**How it works:**
- Use fetch API to make HTTP request
- Check response status
- Parse JSON response
- Handle errors with try/catch

**Complexity:** O(1) time, O(1) space (network call)

## Alternative Approaches

<details>
<summary>Using promises</summary>

```javascript
function fetchUser(userId) {
    return fetch(`https://api.example.com/users/${userId}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}
```
Chained promises approach
</details>

<details>
<summary>Multiple concurrent requests</summary>

```javascript
async function fetchMultipleUsers(userIds) {
    try {
        const promises = userIds.map(id => 
            fetch(`https://api.example.com/users/${id}`).then(r => r.json())
        );
        return await Promise.all(promises);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```
Parallel API calls with Promise.all
</details>

## Edge Cases

```javascript
// Network error
try { await fetchUser(1); } catch (e) { /* handle */ }

// 404 response
try { await fetchUser(999999); } catch (e) { /* handle */ }

// Invalid JSON
// Handle response.json() errors
```

## Run Tests

```bash
node tests.js
```

### Basic Try-Catch

```javascript
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;  // Or throw, depending on needs
    }
}
```

### With Retry Logic

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}
```

### With Timeout

```javascript
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout');
        }
        throw error;
    }
}
```

## Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Single fetch | O(1) | O(n) response size |
| Parallel requests | O(1) | O(k×n) k requests |
| Sequential requests | O(k) | O(n) |

## Common HTTP Methods

```javascript
// GET request
fetch(url);

// POST request
fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John', age: 30 })
});

// PUT request
fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John Doe' })
});

// DELETE request
fetch(url, { method: 'DELETE' });

// PATCH request
fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ age: 31 })
});
```

## Interview Follow-ups

1. **What's the difference between Promise.all() and Promise.allSettled()?**
   - `Promise.all()`: Fails fast if any promise rejects
   - `Promise.allSettled()`: Waits for all promises, returns all results

2. **How to cancel a fetch request?**

   ```javascript
   const controller = new AbortController();
   fetch(url, { signal: controller.signal });
   controller.abort();  // Cancel the request
   ```

3. **What about handling rate limiting?**

   ```javascript
   async function rateLimit(fn, limit, interval) {
       const queue = [];
       let running = 0;
       
       return async function(...args) {
           while (running >= limit) {
               await new Promise(resolve => setTimeout(resolve, interval));
           }
           running++;
           try {
               return await fn(...args);
           } finally {
               running--;
           }
       };
   }
   ```

4. **How to implement caching?**

   ```javascript
   const cache = new Map();
   
   async function fetchWithCache(url, ttl = 60000) {
       if (cache.has(url)) {
           const { data, timestamp } = cache.get(url);
           if (Date.now() - timestamp < ttl) {
               return data;
           }
       }
       
       const data = await fetch(url).then(r => r.json());
       cache.set(url, { data, timestamp: Date.now() });
       return data;
   }
   ```

## Best Practices

1. **Always handle errors**
2. **Check response status**
3. **Use appropriate HTTP method**
4. **Set proper headers**
5. **Implement timeouts**
6. **Consider retry logic**
7. **Cache when appropriate**
8. **Use environment variables for URLs**

## Testing API Calls

```javascript
// Mock fetch for testing
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1, name: 'Test User' })
    })
);

// Test
test('fetchUser returns user data', async () => {
    const user = await fetchUser(1);
    expect(user.name).toBe('Test User');
});
```

## Related Challenges

- Promise chaining
- Error handling patterns
- Rate limiting
- Request queuing
- Caching strategies

## Run Tests

```bash
node tests.js
```

**Note:** Tests use JSONPlaceholder (<https://jsonplaceholder.typicode.com>) as a free fake API for testing.
