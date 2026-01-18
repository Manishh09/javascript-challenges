/**
 * Test Suite for Increment and Reset Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Closures & State');
console.log('========================================\n');

console.log('How Closure Maintains State:');
console.log('');
console.log('  function createCounter() {');
console.log('    let count = 0;  ← Private variable');
console.log('    return {');
console.log('      increment: () => ++count,');
console.log('      getValue: () => count');
console.log('    }');
console.log('  }');
console.log('');
console.log('  const counter = createCounter();');
console.log('  counter.increment(); // count = 1');
console.log('  counter.increment(); // count = 2');
console.log('  counter.getValue();  // returns 2');
console.log('');

console.log('\n========================================');
console.log('Testing: Increment and Reset');
console.log('========================================\n');

// Test 1: Basic increment functionality
console.log('Test 1: Basic increment');

function createCounter() {
    let value = 0;
    return {
        increment: () => ++value,
        reset: () => value = 0,
        getValue: () => value
    };
}

const counter1 = createCounter();
console.log('  Initial value:', counter1.getValue());
console.log('  After increment:', counter1.increment());
console.log('  After increment:', counter1.increment());
console.log('  After increment:', counter1.increment());
console.log('  Current value:', counter1.getValue());
console.log('  Expected: 3');
console.log(`  ✓ Pass: ${counter1.getValue() === 3}\n`);

// Test 2: Reset functionality
console.log('Test 2: Reset functionality');
console.log('  Current value:', counter1.getValue());
console.log('  After reset:', counter1.reset());
console.log('  After reset getValue:', counter1.getValue());
console.log('  Expected: 0');
console.log(`  ✓ Pass: ${counter1.getValue() === 0}\n`);

// Test 3: Multiple increments after reset
console.log('Test 3: Increment after reset');
counter1.reset();
console.log('  After reset:', counter1.getValue());
console.log('  Increment 5 times:');
for (let i = 0; i < 5; i++) {
    const val = counter1.increment();
    console.log(`    Increment ${i + 1}: ${val}`);
}
console.log(`  ✓ Pass: ${counter1.getValue() === 5}\n`);

// Test 4: Independent counters
console.log('Test 4: Independent counters (closure isolation)');
const counterA = createCounter();
const counterB = createCounter();

counterA.increment();
counterA.increment();
counterB.increment();

console.log('  Counter A incremented 2 times:', counterA.getValue());
console.log('  Counter B incremented 1 time:', counterB.getValue());
console.log('  Expected: A=2, B=1');
console.log(`  ✓ Pass: ${counterA.getValue() === 2 && counterB.getValue() === 1}\n`);

// Test 5: Counter with custom increment value
console.log('Test 5: Counter with custom increment');

function createCustomCounter(step = 1) {
    let value = 0;
    return {
        increment: () => value += step,
        decrement: () => value -= step,
        reset: () => value = 0,
        getValue: () => value
    };
}

const counter5 = createCustomCounter(5);
console.log('  Counter with step = 5');
console.log('  After increment:', counter5.increment());
console.log('  After increment:', counter5.increment());
console.log('  After decrement:', counter5.decrement());
console.log('  Current value:', counter5.getValue());
console.log('  Expected: 5 (5 + 5 - 5)');
console.log(`  ✓ Pass: ${counter5.getValue() === 5}\n`);

// Test 6: Counter with initial value
console.log('Test 6: Counter with initial value');

function createCounterWithInit(initialValue = 0) {
    let value = initialValue;
    return {
        increment: () => ++value,
        reset: () => value = initialValue,
        getValue: () => value
    };
}

const counter6 = createCounterWithInit(100);
console.log('  Initial value: 100');
console.log('  After increment:', counter6.increment());
console.log('  After increment:', counter6.increment());
console.log('  Current value:', counter6.getValue());
console.log('  Expected: 102');
counter6.reset();
console.log('  After reset:', counter6.getValue());
console.log('  Expected: 100 (back to initial)');
console.log(`  ✓ Pass: ${counter6.getValue() === 100}\n`);

// Test 7: Multiple operations
console.log('Test 7: Chain of operations');
const counter7 = createCounter();
const results = [];
results.push(counter7.increment()); // 1
results.push(counter7.increment()); // 2
results.push(counter7.increment()); // 3
counter7.reset();                    // 0
results.push(counter7.increment()); // 1
results.push(counter7.increment()); // 2

console.log('  Operations: inc, inc, inc, reset, inc, inc');
console.log('  Results:', results);
console.log('  Expected: [1, 2, 3, 1, 2]');
console.log(`  ✓ Pass: ${JSON.stringify(results) === JSON.stringify([1, 2, 3, 1, 2])}\n`);

// Test 8: Private variable protection
console.log('Test 8: Private variable protection');
const counter8 = createCounter();
counter8.increment();
counter8.increment();
console.log('  Counter value:', counter8.getValue());
console.log('  Trying to access: counter8.value');
console.log('  Result:', counter8.value);
console.log('  ✓ Private variable is NOT accessible');
console.log('  This is the power of closures!\n');

console.log('\n========================================');
console.log('Real-World Example: Like Button');
console.log('========================================\n');

function createLikeButton() {
    let likes = 0;
    let isLiked = false;
    
    return {
        toggle: function() {
            if (isLiked) {
                likes--;
                isLiked = false;
                return { likes, message: 'Unliked' };
            } else {
                likes++;
                isLiked = true;
                return { likes, message: 'Liked' };
            }
        },
        getLikes: () => likes,
        getState: () => ({ likes, isLiked })
    };
}

const likeButton = createLikeButton();
console.log('Like button simulation:');
console.log('  Initial state:', likeButton.getState());
console.log('  Click 1:', likeButton.toggle());
console.log('  Click 2:', likeButton.toggle());
console.log('  Click 3:', likeButton.toggle());
console.log('  Final state:', likeButton.getState());
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Closures maintain private state');
console.log('✓ Each instance has independent state');
console.log('✓ Variables are protected from external access');
console.log('✓ Useful for encapsulation and data privacy\n');
