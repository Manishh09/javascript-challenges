/**
 * Test Suite for Memoization Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Memoization');
console.log('========================================\n');

console.log('Cache Mechanism:');
console.log('');
console.log('Call History:');
console.log('  add(2, 3)  →  Compute: 2 + 3 = 5     → Cache: {"2,3": 5}');
console.log('  add(2, 3)  →  Cache Hit! Return 5    → Cache: {"2,3": 5}');
console.log('  add(5, 7)  →  Compute: 5 + 7 = 12    → Cache: {"2,3": 5, "5,7": 12}');
console.log('  add(2, 3)  →  Cache Hit! Return 5    → Cache: {"2,3": 5, "5,7": 12}');
console.log('');

console.log('\n========================================');
console.log('Testing: memoized()');
console.log('========================================\n');

// Test 1: Basic memoization
console.log('Test 1: Basic memoization with addition');
let computeCount = 0;

const add = (x, y) => {
    computeCount++;
    console.log(`  Computing add(${x}, ${y})... [Computation #${computeCount}]`);
    return x + y;
};

const memoizedAdd = memoized(add);

console.log('\nFirst call with (2, 3):');
console.log(`Result: ${memoizedAdd(2, 3)}`);

console.log('\nSecond call with (2, 3) - should use cache:');
console.log(`Result: ${memoizedAdd(2, 3)}`);

console.log('\nThird call with (5, 7) - new arguments:');
console.log(`Result: ${memoizedAdd(5, 7)}`);

console.log('\nFourth call with (2, 3) - should use cache:');
console.log(`Result: ${memoizedAdd(2, 3)}`);

console.log(`\nTotal computations: ${computeCount}`);
console.log('Expected: 2 (computed only for (2,3) and (5,7))\n');

// Test 2: Performance comparison
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 2: Performance - Fibonacci');
    console.log('========================================\n');
    
    // Regular Fibonacci (exponential time)
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Memoized Fibonacci
    const memoFibonacci = memoized((n) => {
        if (n <= 1) return n;
        return memoFibonacci(n - 1) + memoFibonacci(n - 2);
    });
    
    console.log('Computing Fibonacci(35):');
    
    console.log('\nWithout memoization:');
    const start1 = Date.now();
    const result1 = fibonacci(35);
    const end1 = Date.now();
    console.log(`  Result: ${result1}`);
    console.log(`  Time: ${end1 - start1}ms`);
    
    console.log('\nWith memoization:');
    const start2 = Date.now();
    const result2 = memoFibonacci(35);
    const end2 = Date.now();
    console.log(`  Result: ${result2}`);
    console.log(`  Time: ${end2 - start2}ms`);
    
    console.log(`\nSpeedup: ${((end1 - start1) / (end2 - start2)).toFixed(0)}x faster! 🚀\n`);
}, 100);

// Test 3: Multiple arguments
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 3: Multiple arguments');
    console.log('========================================\n');
    
    let multiplyCount = 0;
    const multiply = (a, b, c) => {
        multiplyCount++;
        console.log(`  Computing multiply(${a}, ${b}, ${c})...`);
        return a * b * c;
    };
    
    const memoMultiply = memoized(multiply);
    
    console.log('Call 1: multiply(2, 3, 4)');
    console.log(`Result: ${memoMultiply(2, 3, 4)}`);
    
    console.log('\nCall 2: multiply(2, 3, 4) - cached');
    console.log(`Result: ${memoMultiply(2, 3, 4)}`);
    
    console.log('\nCall 3: multiply(2, 3, 5) - different args');
    console.log(`Result: ${memoMultiply(2, 3, 5)}`);
    
    console.log(`\nComputations: ${multiplyCount} (Expected: 2)\n`);
}, 200);

// Test 4: Cache visualization
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 4: Cache state visualization');
    console.log('========================================\n');
    
    const square = (x) => {
        console.log(`  → Computing square(${x})`);
        return x * x;
    };
    
    const memoSquare = memoized(square);
    
    console.log('Building cache with values 1-5:');
    [1, 2, 3, 4, 5].forEach(n => {
        memoSquare(n);
    });
    
    console.log('\nAccessing cached values:');
    console.log('Cache lookup for square(3):');
    console.log(`Result: ${memoSquare(3)} (no computation!)`);
    
    console.log('\nCache lookup for square(1):');
    console.log(`Result: ${memoSquare(1)} (no computation!)`);
    
    console.log('\nNew value square(6):');
    console.log(`Result: ${memoSquare(6)}\n`);
}, 300);

// Test 5: Real-world - API simulation
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 5: Real-world - API call caching');
    console.log('========================================\n');
    
    let apiCallCount = 0;
    
    // Simulated API call
    const fetchUserData = (userId) => {
        apiCallCount++;
        console.log(`  📡 Making API call #${apiCallCount} for user ${userId}...`);
        
        // Simulate network delay
        return {
            id: userId,
            name: `User ${userId}`,
            email: `user${userId}@example.com`
        };
    };
    
    const memoFetchUser = memoized(fetchUserData);
    
    console.log('Fetching user 1 (first time):');
    console.log(JSON.stringify(memoFetchUser(1), null, 2));
    
    console.log('\nFetching user 1 (cached):');
    console.log(JSON.stringify(memoFetchUser(1), null, 2));
    
    console.log('\nFetching user 2 (first time):');
    console.log(JSON.stringify(memoFetchUser(2), null, 2));
    
    console.log('\nFetching user 1 again (cached):');
    console.log(JSON.stringify(memoFetchUser(1), null, 2));
    
    console.log(`\nAPI calls made: ${apiCallCount}`);
    console.log('Expected: 2 (user 1 and user 2 only)\n');
}, 400);

// Test 6: Edge cases
setTimeout(() => {
    console.log('\n========================================');
    console.log('Test 6: Edge cases');
    console.log('========================================\n');
    
    const testFunc = (...args) => {
        console.log(`  Computing with args: ${JSON.stringify(args)}`);
        return args.reduce((a, b) => a + b, 0);
    };
    
    const memoTest = memoized(testFunc);
    
    console.log('Test with no arguments:');
    console.log(`Result: ${memoTest()}`);
    
    console.log('\nTest with null:');
    console.log(`Result: ${memoTest(null, null)}`);
    
    console.log('\nTest with mixed types:');
    console.log(`Result: ${memoTest(1, "2", 3)}`);
    
    console.log('\nRepeat with mixed types (cached):');
    console.log(`Result: ${memoTest(1, "2", 3)}\n`);
}, 500);

// Final summary
setTimeout(() => {
    console.log('\n========================================');
    console.log('Tests completed!');
    console.log('========================================\n');
    console.log('Key Takeaways:');
    console.log('✓ Memoization caches expensive function results');
    console.log('✓ Massive performance gains for repeated calls');
    console.log('✓ Trade memory for speed');
    console.log('✓ Only use with pure functions (no side effects)');
    console.log('✓ Common in React (useMemo, React.memo)');
    console.log('\nWhen to use:');
    console.log('  • Expensive calculations (fibonacci, factorial)');
    console.log('  • API calls with same parameters');
    console.log('  • Complex data transformations');
    console.log('  • Recursive algorithms\n');
}, 600);
