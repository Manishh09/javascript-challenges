/**
 * Test Suite for Throttling Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Throttling');
console.log('========================================\n');

console.log('Scenario: User scrolling webpage');
console.log('');
console.log('Time   | User Action     | Throttled Function (2000ms)');
console.log('-------|-----------------|----------------------------');
console.log('0ms    | Scroll          | ✓ Execute (first call)');
console.log('500ms  | Scroll          | × Ignore (too soon)');
console.log('1000ms | Scroll          | × Ignore (too soon)');
console.log('1500ms | Scroll          | × Ignore (too soon)');
console.log('2000ms | Scroll          | ✓ Execute (2s elapsed)');
console.log('2100ms | Scroll          | × Ignore (too soon)');
console.log('4000ms | Scroll          | ✓ Execute (2s elapsed)');
console.log('');
console.log('Result: Function executed at REGULAR INTERVALS\n');

console.log('\n========================================');
console.log('Testing: throttle()');
console.log('========================================\n');

// Test 1: Basic throttling
console.log('Test 1: Basic throttling with 2000ms delay');
let callCount = 0;
const log = (message) => {
    callCount++;
    console.log(`  ✓ Log executed (${callCount}): ${message} [Time: ${Date.now() % 100000}]`);
};

const throttledLog = throttle(log, 2000);

console.log('Simulating rapid calls every 200ms:');
throttledLog('Message 1');
console.log('  Called "Message 1"');

setTimeout(() => {
    throttledLog('Message 2');
    console.log('  Called "Message 2" (ignored - too soon)');
}, 200);

setTimeout(() => {
    throttledLog('Message 3');
    console.log('  Called "Message 3" (ignored - too soon)');
}, 400);

setTimeout(() => {
    throttledLog('Message 4');
    console.log('  Called "Message 4" (ignored - too soon)');
}, 600);

setTimeout(() => {
    throttledLog('Message 5');
    console.log('  Called "Message 5" (ignored - too soon)');
}, 800);

setTimeout(() => {
    throttledLog('Message 6');
    console.log('  Called "Message 6" (should execute - 2s passed)');
}, 2100);

setTimeout(() => {
    console.log(`\nResult: Function called ${callCount} time(s)`);
    console.log('Expected: 2 (at 0ms and ~2000ms)\n');
}, 2300);

// Test 2: Continuous throttling over time
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 2: Continuous throttling simulation');
    console.log('========================================\n');
    
    let scrollCount = 0;
    const updateScrollPosition = (position) => {
        scrollCount++;
        console.log(`  ✓ Scroll position updated (${scrollCount}): ${position}px`);
    };
    
    const throttledScroll = throttle(updateScrollPosition, 1000);
    
    console.log('Simulating continuous scroll events:');
    
    let currentScroll = 0;
    const scrollInterval = setInterval(() => {
        currentScroll += 100;
        throttledScroll(currentScroll);
        
        if (currentScroll >= 1000) {
            clearInterval(scrollInterval);
        }
    }, 100);
    
    setTimeout(() => {
        console.log(`\nScroll updates: ${scrollCount}`);
        console.log('Expected: ~2-3 updates in 1 second interval\n');
    }, 1200);
}, 2500);

// Test 3: Context preservation
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 3: Context preservation');
    console.log('========================================\n');
    
    const counter = {
        count: 0,
        increment: function() {
            this.count++;
            console.log(`  ✓ Counter value: ${this.count}`);
        }
    };
    
    counter.throttledIncrement = throttle(counter.increment, 500);
    
    console.log('Calling throttled method on object:');
    counter.throttledIncrement(); // Should work
    
    setTimeout(() => {
        counter.throttledIncrement(); // Should be ignored
    }, 100);
    
    setTimeout(() => {
        counter.throttledIncrement(); // Should work
    }, 600);
    
    setTimeout(() => {
        console.log('Expected: Context "this" preserved correctly\n');
    }, 800);
}, 3800);

// Test 4: Input validation
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 4: Input validation');
    console.log('========================================\n');
    
    try {
        throttle('not a function', 1000);
        console.log('  ✗ Should have thrown TypeError');
    } catch (error) {
        console.log(`  ✓ Caught error: ${error.message}`);
    }
    
    try {
        throttle(() => {}, -1000);
        console.log('  ✗ Should have thrown TypeError for negative delay');
    } catch (error) {
        console.log(`  ✓ Caught error: ${error.message}`);
    }
    
    try {
        throttle(() => {}, 'invalid');
        console.log('  ✗ Should have thrown TypeError for invalid delay');
    } catch (error) {
        console.log(`  ✓ Caught error: ${error.message}`);
    }
    
    console.log('\n');
}, 4700);

// Test 5: Real-world scenario - API rate limiting
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 5: Real-world - API rate limiting');
    console.log('========================================\n');
    
    let apiCallCount = 0;
    const makeAPICall = (data) => {
        apiCallCount++;
        console.log(`  → API Call #${apiCallCount}: Sending data "${data}"`);
    };
    
    const throttledAPI = throttle(makeAPICall, 1000);
    
    console.log('User clicking "Save" button rapidly:');
    const clicks = ['Click 1', 'Click 2', 'Click 3', 'Click 4', 'Click 5', 'Click 6'];
    
    clicks.forEach((click, index) => {
        setTimeout(() => {
            throttledAPI(click);
            console.log(`  User clicked: ${click}`);
        }, index * 200);
    });
    
    setTimeout(() => {
        console.log(`\nAPI calls made: ${apiCallCount}`);
        console.log('Expected: 2 (prevented multiple rapid submissions)\n');
    }, clicks.length * 200 + 200);
}, 5000);

// Test 6: Comparison with debouncing
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 6: Throttle vs Debounce comparison');
    console.log('========================================\n');
    
    let throttleCount = 0;
    let debounceCount = 0;
    
    const action = (type) => {
        if (type === 'throttle') throttleCount++;
        if (type === 'debounce') debounceCount++;
        console.log(`  ${type === 'throttle' ? '⚡' : '⏱️'} ${type.toUpperCase()} executed`);
    };
    
    const throttledAction = throttle(() => action('throttle'), 500);
    const debouncedAction = debounce(() => action('debounce'), 500);
    
    console.log('Sending 5 rapid calls to both:');
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            throttledAction();
            debouncedAction();
            console.log(`  Call ${i + 1} sent`);
        }, i * 100);
    }
    
    setTimeout(() => {
        console.log(`\nThrottle executions: ${throttleCount}`);
        console.log(`Debounce executions: ${debounceCount}`);
        console.log('\nKey difference:');
        console.log('  Throttle: Executes immediately, then waits');
        console.log('  Debounce: Waits for activity to stop\n');
    }, 1000);
}, 6500);

// Final summary
setTimeout(() => {
    console.log('\n========================================');
    console.log('Tests completed!');
    console.log('========================================\n');
    console.log('Key Takeaways:');
    console.log('✓ Throttling executes at regular intervals');
    console.log('✓ Useful for high-frequency events (scroll, resize, mousemove)');
    console.log('✓ Guarantees maximum execution rate');
    console.log('✓ First call executes immediately\n');
    console.log('When to use:');
    console.log('  Throttle: Rate limiting, periodic updates');
    console.log('  Debounce: Wait for user to finish (search, validation)\n');
}, 8000);
