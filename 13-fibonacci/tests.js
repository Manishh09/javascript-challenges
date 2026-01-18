/**
 * Test Suite for Fibonacci Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Fibonacci Sequence');
console.log('========================================\n');

console.log('The Pattern:');
console.log('');
console.log('  F(0) = 0');
console.log('  F(1) = 1');
console.log('  F(n) = F(n-1) + F(n-2)');
console.log('');
console.log('  Index:  0   1   2   3   4   5   6   7   8');
console.log('  Value:  0 → 1 → 1 → 2 → 3 → 5 → 8 → 13 → 21');
console.log('          │   │   │   │   │');
console.log('          └───┴───┘   │   │');
console.log('            0+1=1     │   │');
console.log('                  └───┴───┘');
console.log('                   1+2=3');
console.log('');

console.log('\n========================================');
console.log('Testing: generateFibonacciSeries()');
console.log('========================================\n');

// Test 1: Basic Fibonacci
console.log('Test 1: Generate first 5 numbers');
const result1 = generateFibonacciSeries(5);
console.log(`Input:  n = 5`);
console.log(`Output: [${result1}]`);
console.log(`Expected: [0, 1, 1, 2, 3]`);
console.log(`✓ Pass: ${JSON.stringify(result1) === JSON.stringify([0, 1, 1, 2, 3])}\n`);

// Test 2: First 10 numbers
console.log('Test 2: Generate first 10 numbers');
const result2 = generateFibonacciSeries(10);
console.log(`Input:  n = 10`);
console.log(`Output: [${result2}]`);
console.log(`Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`);
console.log(`✓ Pass: ${JSON.stringify(result2) === JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])}\n`);

// Test 3: Edge case - n = 0
console.log('Test 3: Edge case - n = 0');
const result3 = generateFibonacciSeries(0);
console.log(`Input:  n = 0`);
console.log(`Output: [${result3}]`);
console.log(`Expected: []`);
console.log(`✓ Pass: ${result3.length === 0}\n`);

// Test 4: Edge case - n = 1
console.log('Test 4: Edge case - n = 1');
const result4 = generateFibonacciSeries(1);
console.log(`Input:  n = 1`);
console.log(`Output: [${result4}]`);
console.log(`Expected: [0]`);
console.log(`✓ Pass: ${JSON.stringify(result4) === JSON.stringify([0])}\n`);

// Test 5: Edge case - n = 2
console.log('Test 5: Edge case - n = 2');
const result5 = generateFibonacciSeries(2);
console.log(`Input:  n = 2`);
console.log(`Output: [${result5}]`);
console.log(`Expected: [0, 1]`);
console.log(`✓ Pass: ${JSON.stringify(result5) === JSON.stringify([0, 1])}\n`);

// Test 6: Negative number
console.log('Test 6: Edge case - negative number');
const result6 = generateFibonacciSeries(-5);
console.log(`Input:  n = -5`);
console.log(`Output: [${result6}]`);
console.log(`Expected: []`);
console.log(`✓ Pass: ${result6.length === 0}\n`);

// Test 7: Large Fibonacci
console.log('Test 7: Generate 15 numbers');
const result7 = generateFibonacciSeries(15);
console.log(`Input:  n = 15`);
console.log(`Output: [${result7}]`);
console.log(`Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]\n`);

console.log('\n========================================');
console.log('Testing: fibonacci() - Method 2');
console.log('========================================\n');

if (typeof fibonacci !== 'undefined') {
    // Test 8: Alternative method
    console.log('Test 8: Alternative Fibonacci implementation');
    const result8 = fibonacci(10);
    console.log(`Input:  n = 10`);
    console.log(`Output: [${result8}]`);
    console.log(`Expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n`);
}

console.log('\n========================================');
console.log('Performance Test');
console.log('========================================\n');

// Test 9: Performance with larger numbers
console.log('Test 9: Performance test (n = 30)');
const start = Date.now();
const result9 = generateFibonacciSeries(30);
const end = Date.now();
console.log(`Generated ${result9.length} numbers in ${end - start}ms`);
console.log(`Last number: ${result9[result9.length - 1]}`);
console.log(`Expected last: 514229\n`);

console.log('\n========================================');
console.log('Recursive Approach Comparison');
console.log('========================================\n');

console.log('Naive Recursive (Without Memoization):');
console.log('  Time Complexity: O(2^n) - EXPONENTIAL! 💥');
console.log('  Each call makes 2 recursive calls');
console.log('  F(5) makes 15 function calls');
console.log('  F(10) makes 177 function calls');
console.log('  F(20) makes 21,891 function calls!');
console.log('');

console.log('Iterative Approach (Current):');
console.log('  Time Complexity: O(n) - LINEAR ✓');
console.log('  Space Complexity: O(n) - stores array');
console.log('  F(5) makes 5 iterations');
console.log('  F(10) makes 10 iterations');
console.log('  F(20) makes 20 iterations');
console.log('');

console.log('With Memoization:');
console.log('  Time Complexity: O(n) - LINEAR ✓');
console.log('  Space Complexity: O(n) - cache + recursion');
console.log('  Each value computed only once');
console.log('');

console.log('\n========================================');
console.log('Pattern Recognition');
console.log('========================================\n');

console.log('Fibonacci in Nature:');
console.log('  🌻 Sunflower seeds: Spiral patterns follow Fibonacci');
console.log('  🐚 Nautilus shells: Growth follows Fibonacci spiral');
console.log('  🌸 Flower petals: Often have Fibonacci numbers');
console.log('  🌲 Tree branches: Branch patterns follow sequence');
console.log('  🍍 Pineapples: Scale patterns in Fibonacci spirals');
console.log('');

console.log('Golden Ratio:');
console.log('  Ratio of consecutive Fibonacci numbers:');
const fib = generateFibonacciSeries(20);
console.log(`  F(10)/F(9)  = ${fib[10]}/${fib[9]}  = ${(fib[10] / fib[9]).toFixed(6)}`);
console.log(`  F(15)/F(14) = ${fib[15]}/${fib[14]} = ${(fib[15] / fib[14]).toFixed(6)}`);
console.log(`  F(19)/F(18) = ${fib[19]}/${fib[18]} = ${(fib[19] / fib[18]).toFixed(6)}`);
console.log(`  Approaches φ (phi) = 1.618034... (Golden Ratio)`);
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Fibonacci: Each number = sum of previous two');
console.log('✓ Iterative approach is most efficient');
console.log('✓ Recursive without memoization is exponential');
console.log('✓ Found in nature, art, and mathematics');
console.log('✓ Related to the Golden Ratio (φ)\n');
