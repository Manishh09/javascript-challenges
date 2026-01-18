/**
 * Test Suite for Debouncing Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Debouncing');
console.log('========================================\n');

console.log('Scenario: User typing in search box');
console.log('');
console.log('Time  | User Action | Debounced Function (300ms)');
console.log('------|-------------|---------------------------');
console.log('0ms   | Types "a"   | Timer started (300ms)');
console.log('100ms | Types "ap"  | Timer reset (300ms)');
console.log('200ms | Types "app" | Timer reset (300ms)');
console.log('500ms | [waiting]   | Timer reset finished');
console.log('510ms | [waiting]   | ✓ Execute search("app")');
console.log('');
console.log('Result: Function executed only ONCE after user stopped typing\n');

console.log('\n========================================');
console.log('Testing: debounce()');
console.log('========================================\n');

// Test 1: Basic debouncing
console.log('Test 1: Basic debouncing with 300ms delay');
let callCount = 0;
const search = (query) => {
    callCount++;
    console.log(`  → Search executed (${callCount}): "${query}"`);
};

const debouncedSearch = debounce(search, 300);

console.log('Simulating rapid calls:');
debouncedSearch('a');
console.log('  Called with "a"');
debouncedSearch('ap');
console.log('  Called with "ap"');
debouncedSearch('app');
console.log('  Called with "app"');
debouncedSearch('appl');
console.log('  Called with "appl"');
debouncedSearch('apple');
console.log('  Called with "apple"');

setTimeout(() => {
    console.log(`\nResult: Function called ${callCount} time(s)`);
    console.log('Expected: 1 (only the last call "apple" should execute)\n');
}, 400);

// Test 2: Multiple debounce cycles
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 2: Multiple debounce cycles');
    console.log('========================================\n');
    
    let cycle2Count = 0;
    const logAction = (action) => {
        cycle2Count++;
        console.log(`  ✓ Action executed (${cycle2Count}): ${action}`);
    };
    
    const debouncedLog = debounce(logAction, 200);
    
    console.log('Cycle 1: Rapid calls');
    debouncedLog('scroll-1');
    debouncedLog('scroll-2');
    debouncedLog('scroll-3');
    console.log('  Waiting 250ms...');
    
    setTimeout(() => {
        console.log('\nCycle 2: Rapid calls again');
        debouncedLog('scroll-4');
        debouncedLog('scroll-5');
        console.log('  Waiting 250ms...');
    }, 250);
    
    setTimeout(() => {
        console.log(`\nTotal executions: ${cycle2Count}`);
        console.log('Expected: 2 (one per cycle)\n');
    }, 550);
}, 500);

// Test 3: Immediate calls after debounce completes
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 3: Context preservation');
    console.log('========================================\n');
    
    const user = {
        name: 'John',
        greet: function() {
            console.log(`  ✓ Hello, ${this.name}!`);
        }
    };
    
    user.debouncedGreet = debounce(user.greet, 100);
    
    console.log('Calling debounced method on object:');
    user.debouncedGreet();
    
    setTimeout(() => {
        console.log('Expected: Should preserve "this" context\n');
    }, 150);
}, 1200);

// Test 4: Error handling
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 4: Input validation');
    console.log('========================================\n');
    
    try {
        debounce('not a function', 100);
        console.log('  ✗ Should have thrown TypeError');
    } catch (error) {
        console.log(`  ✓ Caught error: ${error.message}`);
    }
    
    try {
        debounce(() => {}, -100);
        console.log('  ✗ Should have thrown TypeError for negative delay');
    } catch (error) {
        console.log(`  ✓ Caught error: ${error.message}`);
    }
    
    try {
        debounce(() => {}, 'invalid');
        console.log('  ✗ Should have thrown TypeError for invalid delay');
    } catch (error) {
        console.log(`  ✓ Caught error: ${error.message}`);
    }
    
    console.log('\n');
}, 1400);

// Test 5: Real-world scenario - Form validation
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 5: Real-world - Email validation');
    console.log('========================================\n');
    
    let validationCount = 0;
    const validateEmail = (email) => {
        validationCount++;
        const isValid = email.includes('@');
        console.log(`  → Validation #${validationCount}: "${email}" - ${isValid ? 'Valid ✓' : 'Invalid ✗'}`);
    };
    
    const debouncedValidation = debounce(validateEmail, 150);
    
    console.log('User typing email: "john@example.com"');
    const emailChars = ['j', 'jo', 'joh', 'john', 'john@', 'john@e', 'john@ex', 'john@example.com'];
    
    emailChars.forEach((partial, index) => {
        setTimeout(() => {
            debouncedValidation(partial);
            if (index < emailChars.length - 1) {
                console.log(`  User typed: "${partial}"`);
            }
        }, index * 50);
    });
    
    setTimeout(() => {
        console.log(`\nValidation ran ${validationCount} time(s)`);
        console.log('Expected: 1 (validated only final email)\n');
    }, emailChars.length * 50 + 200);
}, 1600);

// Final summary
setTimeout(() => {
    console.log('\n========================================');
    console.log('Tests completed!');
    console.log('========================================\n');
    console.log('Key Takeaways:');
    console.log('✓ Debouncing delays execution until activity stops');
    console.log('✓ Useful for expensive operations (API calls, validation)');
    console.log('✓ Saves resources by preventing unnecessary executions');
    console.log('✓ Commonly used in search, form validation, auto-save\n');
}, 2400);
