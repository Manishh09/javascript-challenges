/**
 * Test Suite for Two-Way Binding Challenge
 * 
 * Run this file with a browser (open two-way-binding.html)
 * This test file validates the JavaScript logic separately
 */

console.log('\n========================================');
console.log('Visual Explanation: Two-Way Data Binding');
console.log('========================================\n');

console.log('Two-way binding synchronizes data between:');
console.log('  Model (JavaScript object)');
console.log('    ↕');
console.log('  View (HTML elements)');
console.log('');
console.log('When model changes → view updates automatically');
console.log('When view changes  → model updates automatically');
console.log('');
console.log('Example:');
console.log('  Input field: "John"');
console.log('       ↓');
console.log('  model.name = "John"');
console.log('       ↓');
console.log('  Display: "Hello, John!"');
console.log('');

console.log('\n========================================');
console.log('Testing: Simple Two-Way Binding');
console.log('========================================\n');

// Simple implementation of two-way binding
class TwoWayBinding {
    constructor(initialData = {}) {
        this.data = new Proxy(initialData, {
            set: (target, property, value) => {
                target[property] = value;
                this.notify(property, value);
                return true;
            }
        });
        
        this.listeners = {};
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

// Test 1: Basic binding
console.log('Test 1: Basic property binding');
const binding1 = new TwoWayBinding({ name: 'Alice' });
let displayValue = '';

binding1.on('name', (value) => {
    displayValue = value;
    console.log(`  View updated: ${value}`);
});

console.log('Initial name:', binding1.get('name'));
console.log('Changing name to "Bob"...');
binding1.set('name', 'Bob');
console.log('Model value:', binding1.get('name'));
console.log('Display value:', displayValue);
console.log(`✓ Pass: ${binding1.get('name') === 'Bob' && displayValue === 'Bob'}\n`);

// Test 2: Multiple listeners
console.log('Test 2: Multiple listeners');
const binding2 = new TwoWayBinding({ count: 0 });
let listener1Value = 0;
let listener2Value = 0;

binding2.on('count', (value) => {
    listener1Value = value;
    console.log(`  Listener 1: ${value}`);
});

binding2.on('count', (value) => {
    listener2Value = value * 2;
    console.log(`  Listener 2 (doubled): ${value * 2}`);
});

console.log('Setting count to 5...');
binding2.set('count', 5);
console.log(`✓ Pass: ${listener1Value === 5 && listener2Value === 10}\n`);

// Test 3: Multiple properties
console.log('Test 3: Multiple properties');
const binding3 = new TwoWayBinding({ 
    firstName: 'John', 
    lastName: 'Doe' 
});
let fullName = '';

binding3.on('firstName', (value) => {
    console.log(`  First name changed: ${value}`);
    fullName = `${value} ${binding3.get('lastName')}`;
});

binding3.on('lastName', (value) => {
    console.log(`  Last name changed: ${value}`);
    fullName = `${binding3.get('firstName')} ${value}`;
});

console.log('Initial:', binding3.get('firstName'), binding3.get('lastName'));
console.log('Changing last name to "Smith"...');
binding3.set('lastName', 'Smith');
console.log('Full name:', fullName);
console.log(`✓ Pass: ${fullName === 'John Smith'}\n`);

console.log('\n========================================');
console.log('Visual Flow Example');
console.log('========================================\n');

console.log('Creating binding for user profile:\n');

const userBinding = new TwoWayBinding({
    username: '',
    email: ''
});

// Simulate input fields
const inputs = {
    username: '',
    email: ''
};

// Simulate display elements
const displays = {
    username: '',
    email: ''
};

// Set up listeners (View → Model)
userBinding.on('username', (value) => {
    inputs.username = value;
    displays.username = `Username: ${value}`;
    console.log(`  ↓ ${displays.username}`);
});

userBinding.on('email', (value) => {
    inputs.email = value;
    displays.email = `Email: ${value}`;
    console.log(`  ↓ ${displays.email}`);
});

console.log('User types "johndoe" in username field:');
userBinding.set('username', 'johndoe');

console.log('\nUser types "john@example.com" in email field:');
userBinding.set('email', 'john@example.com');

console.log('\nFinal state:');
console.log('  Model:', userBinding.data);
console.log('  Displays:', displays);
console.log('');

console.log('\n========================================');
console.log('Reactive Object Pattern');
console.log('========================================\n');

function createReactive(obj) {
    const listeners = {};
    
    return new Proxy(obj, {
        get(target, property) {
            return target[property];
        },
        set(target, property, value) {
            const oldValue = target[property];
            target[property] = value;
            
            if (listeners[property]) {
                listeners[property].forEach(fn => fn(value, oldValue));
            }
            
            return true;
        },
        defineProperty(target, property, descriptor) {
            if (descriptor.watch) {
                if (!listeners[property]) {
                    listeners[property] = [];
                }
                listeners[property].push(descriptor.watch);
            }
            return true;
        }
    });
}

console.log('Test: Reactive object');
const reactive = createReactive({ 
    temperature: 20,
    status: 'normal'
});

// Add watcher
const tempListener = [];
Object.defineProperty(reactive, 'temperature', {
    watch: (newVal, oldVal) => {
        console.log(`  Temperature changed: ${oldVal}°C → ${newVal}°C`);
        tempListener.push(newVal);
    }
});

console.log('Initial temperature:', reactive.temperature);
console.log('Setting temperature to 25°C...');
reactive.temperature = 25;
console.log('Setting temperature to 30°C...');
reactive.temperature = 30;
console.log('');

console.log('\n========================================');
console.log('Practical Use Cases');
console.log('========================================\n');

console.log('Use Case 1: Form Validation');
const formBinding = new TwoWayBinding({ 
    email: '',
    isValid: false 
});

formBinding.on('email', (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    formBinding.data.isValid = isValid;
    console.log(`  Email: ${value} → ${isValid ? 'Valid ✓' : 'Invalid ✗'}`);
});

console.log('Testing email validation:');
formBinding.set('email', 'invalid-email');
formBinding.set('email', 'valid@email.com');
console.log('');

console.log('Use Case 2: Real-time Character Counter');
const textBinding = new TwoWayBinding({ 
    text: '',
    charCount: 0,
    wordCount: 0
});

textBinding.on('text', (value) => {
    textBinding.data.charCount = value.length;
    textBinding.data.wordCount = value.trim().split(/\s+/).filter(Boolean).length;
    console.log(`  Text length: ${textBinding.data.charCount} chars`);
    console.log(`  Word count: ${textBinding.data.wordCount} words`);
});

console.log('Typing text...');
textBinding.set('text', 'Hello world this is a test');
console.log('');

console.log('\n========================================');
console.log('Framework Comparison');
console.log('========================================\n');

console.log('Different frameworks implement two-way binding:');
console.log('');
console.log('Vue.js:');
console.log('  <input v-model="message">');
console.log('  {{ message }}');
console.log('');
console.log('Angular:');
console.log('  <input [(ngModel)]="message">');
console.log('  {{ message }}');
console.log('');
console.log('React (controlled component):');
console.log('  <input value={message} onChange={e => setMessage(e.target.value)}>');
console.log('  {message}');
console.log('');
console.log('Vanilla JS (our implementation):');
console.log('  binding.on("message", val => display.textContent = val)');
console.log('  input.addEventListener("input", e => binding.set("message", e.target.value))');
console.log('');

console.log('\n========================================');
console.log('Key Concepts');
console.log('========================================\n');

console.log('┌─────────────────────┬────────────────────────────┐');
console.log('│ Concept             │ Description                │');
console.log('├─────────────────────┼────────────────────────────┤');
console.log('│ Proxy               │ Intercept property access  │');
console.log('│ Observer Pattern    │ Notify listeners of change │');
console.log('│ Event Listeners     │ Capture user input         │');
console.log('│ DOM Manipulation    │ Update view elements       │');
console.log('└─────────────────────┴────────────────────────────┘');
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Two-way binding keeps model and view in sync');
console.log('✓ Use Proxy for intercepting property changes');
console.log('✓ Observer pattern notifies all listeners');
console.log('✓ Essential for reactive UI frameworks\n');
console.log('Note: Open two-way-binding.html in browser for full demo\n');
