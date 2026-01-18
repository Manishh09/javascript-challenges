# Two-Way Data Binding

## 📋 Problem Statement

Implement two-way data binding where changes in the model automatically update the view, and vice versa.

```javascript
Model (JavaScript) ↔ View (HTML)

model.name = "John" → <input value="John"> → <span>Hello, John!</span>
```

## Solution

```javascript
class TwoWayBinding {
    constructor(initialData = {}) {
        this.listeners = {};
        
        this.data = new Proxy(initialData, {
            set: (target, property, value) => {
                target[property] = value;
                this.notify(property, value);
                return true;
            }
        });
    }
    
    on(property, callback) {
        if (!this.listeners[property]) {
            this.listeners[property] = [];
        }
        this.listeners[property].push(callback);
    }
    
    notify(property, value) {
        if (this.listeners[property]) {
            this.listeners[property].forEach(callback => callback(value));
        }
    }
    
    set(property, value) {
        this.data[property] = value;
    }
    
    get(property) {
        return this.data[property];
    }
}
```

**How it works:**
- Use Proxy to intercept property changes
- Notify all registered listeners on change
- Listeners update the view

**Complexity:** O(1) per update

## Alternative Approaches

<details>
<summary>Using Object.defineProperty</summary>

```javascript
function createBinding(obj) {
    const handlers = {};
    const binding = {};
    
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        
        Object.defineProperty(binding, key, {
            get() { return value; },
            set(newValue) {
                value = newValue;
                if (handlers[key]) {
                    handlers[key].forEach(handler => handler(newValue));
                }
            }
        });
    });
    
    binding.$on = function(key, handler) {
        if (!handlers[key]) handlers[key] = [];
        handlers[key].push(handler);
    };
    
    return binding;
}
```
Legacy approach, works in older browsers
</details>

<details>
<summary>Simple event emitter</summary>

```javascript
class DataModel {
    constructor(data) {
        this._data = data;
        this._listeners = {};
    }
    
    set(key, value) {
        this._data[key] = value;
        this._emit(key, value);
    }
    
    get(key) {
        return this._data[key];
    }
    
    on(key, callback) {
        if (!this._listeners[key]) this._listeners[key] = [];
        this._listeners[key].push(callback);
    }
    
    _emit(key, value) {
        if (this._listeners[key]) {
            this._listeners[key].forEach(cb => cb(value));
        }
    }
}
```
Manual updates, explicit set/get methods
</details>

## Edge Cases

```javascript
const binding = new TwoWayBinding({ name: 'John' });
binding.on('name', value => console.log(value));

binding.set('name', 'Jane');  // Logs: "Jane"
binding.get('name');          // "Jane"
```

## Run Tests

```bash
node tests.js
```    return binding;
}

// Usage
const model = createBinding({ name: 'John' });
model.$on('name', (value) => {
    console.log('Name changed to:', value);
});
model.name = 'Jane';  // Triggers handler
```

### Approach 3: Event-Based Binding
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(data));
        }
    }
}

class Model extends EventEmitter {
    constructor(data = {}) {
        super();
        this._data = data;
    }
    
    set(key, value) {
        this._data[key] = value;
        this.emit('change', { key, value });
        this.emit(`change:${key}`, value);
    }
    
    get(key) {
        return this._data[key];
    }
}

// Usage
const model = new Model({ name: 'John' });
model.on('change:name', (value) => {
    console.log('Name updated:', value);
});
model.set('name', 'Jane');
```

## Real-World Example (Vanilla JS)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Two-Way Binding Demo</title>
</head>
<body>
    <h1>User Profile</h1>
    
    <label>Name:
        <input type="text" id="nameInput" placeholder="Enter name">
    </label>
    
    <label>Email:
        <input type="email" id="emailInput" placeholder="Enter email">
    </label>
    
    <div id="display">
        <p>Name: <span id="displayName">-</span></p>
        <p>Email: <span id="displayEmail">-</span></p>
    </div>
    
    <script>
        class TwoWayBinding {
            constructor(initialData = {}) {
                this.listeners = {};
                this.data = new Proxy(initialData, {
                    set: (target, property, value) => {
                        target[property] = value;
                        this.notify(property, value);
                        return true;
                    }
                });
            }
            
            on(property, callback) {
                if (!this.listeners[property]) {
                    this.listeners[property] = [];
                }
                this.listeners[property].push(callback);
            }
            
            notify(property, value) {
                if (this.listeners[property]) {
                    this.listeners[property].forEach(cb => cb(value));
                }
            }
            
            set(property, value) {
                this.data[property] = value;
            }
        }
        
        // Create binding
        const userBinding = new TwoWayBinding({
            name: '',
            email: ''
        });
        
        // Model → View (update display when model changes)
        userBinding.on('name', (value) => {
            document.getElementById('displayName').textContent = value || '-';
        });
        
        userBinding.on('email', (value) => {
            document.getElementById('displayEmail').textContent = value || '-';
        });
        
        // View → Model (update model when input changes)
        document.getElementById('nameInput').addEventListener('input', (e) => {
            userBinding.set('name', e.target.value);
        });
        
        document.getElementById('emailInput').addEventListener('input', (e) => {
            userBinding.set('email', e.target.value);
        });
    </script>
</body>
</html>
```

## Key Concepts

### 1. Observer Pattern
```javascript
// Subject maintains list of observers
// Notifies observers of state changes
```

### 2. Proxy Traps
```javascript
new Proxy(target, {
    get(target, prop) {
        // Intercept property access
    },
    set(target, prop, value) {
        // Intercept property assignment
    }
});
```

### 3. Getters and Setters
```javascript
Object.defineProperty(obj, 'name', {
    get() { return this._name; },
    set(value) {
        this._name = value;
        // Trigger updates
    }
});
```

## Framework Examples

### Vue.js Style
```javascript
const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    }
});

// <input v-model="message">
// {{ message }}
```

### Angular Style
```javascript
@Component({
    template: `
        <input [(ngModel)]="name">
        <p>{{ name }}</p>
    `
})
class MyComponent {
    name = 'John';
}
```

### React (Controlled Components)
```javascript
function MyComponent() {
    const [name, setName] = useState('John');
    
    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <p>{name}</p>
        </>
    );
}
```

## Interview Follow-ups

1. **How to handle nested objects?**
   ```javascript
   function deepProxy(obj, handler) {
       return new Proxy(obj, {
           get(target, prop) {
               const value = target[prop];
               if (typeof value === 'object' && value !== null) {
                   return deepProxy(value, handler);
               }
               return value;
           },
           set(target, prop, value) {
               target[prop] = value;
               handler(prop, value);
               return true;
           }
       });
   }
   ```

2. **What about performance with many listeners?**
   - Use event delegation
   - Debounce updates
   - Virtual DOM diffing (like React)
   - Batch updates

3. **How to implement dirty checking (Angular 1 style)?**
   ```javascript
   class DirtyChecker {
       constructor() {
           this.watches = [];
           this.oldValues = new Map();
       }
       
       watch(expression, callback) {
           this.watches.push({ expression, callback });
       }
       
       digest() {
           this.watches.forEach(watch => {
               const newValue = watch.expression();
               const oldValue = this.oldValues.get(watch);
               
               if (newValue !== oldValue) {
                   watch.callback(newValue, oldValue);
                   this.oldValues.set(watch, newValue);
               }
           });
       }
   }
   ```

4. **How does it differ from one-way binding?**
   - One-way: Model → View only
   - Two-way: Model ← → View
   - Two-way is more convenient but can cause complexity

## Complexity Considerations

- **Time:** O(n) for n listeners per property change
- **Space:** O(m) for m listeners across all properties
- **Performance:** Can be expensive with many bindings

## Best Practices

1. **Minimize bindings:** Only bind what's necessary
2. **Debounce updates:** Especially for frequent changes
3. **Clean up listeners:** Prevent memory leaks
4. **Consider one-way flow:** Sometimes simpler
5. **Use framework solutions:** Don't reinvent the wheel

## Practical Applications

- Form inputs
- Real-time dashboards
- Chat applications
- Collaborative editing
- Configuration panels
- Live previews

## Related Concepts

- Observer pattern
- Reactive programming
- Virtual DOM
- State management
- Event-driven architecture

## Run Tests

```bash
node tests.js
```

**Note:** For full demo, open [two-way-binding.html](two-way-binding.html) in a browser.
