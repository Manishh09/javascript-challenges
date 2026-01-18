/**
 * Test Suite for Factorial Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Factorial');
console.log('========================================\n');

console.log('Factorial (n!) = product of all positive integers ≤ n');
console.log('');
console.log('5! = 5 × 4 × 3 × 2 × 1');
console.log('   = 20 × 3 × 2 × 1');
console.log('   = 60 × 2 × 1');
console.log('   = 120 × 1');
console.log('   = 120');
console.log('');
console.log('Special cases:');
console.log('  0! = 1  (by definition)');
console.log('  1! = 1');
console.log('');

console.log('\n========================================');
console.log('Testing: Factorial (Iterative)');
console.log('========================================\n');

function factorialIterative(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Test 1: Basic factorial
console.log('Test 1: Factorial of 5');
const result1 = factorialIterative(5);
console.log('Input:  5');
console.log('Calculation: 5 × 4 × 3 × 2 × 1');
console.log('Output:', result1);
console.log('Expected: 120');
console.log(`✓ Pass: ${result1 === 120}\n`);

// Test 2: Factorial of 0
console.log('Test 2: Factorial of 0');
const result2 = factorialIterative(0);
console.log('Input:  0');
console.log('Output:', result2);
console.log('Expected: 1 (by definition)');
console.log(`✓ Pass: ${result2 === 1}\n`);

// Test 3: Factorial of 1
console.log('Test 3: Factorial of 1');
const result3 = factorialIterative(1);
console.log('Input:  1');
console.log('Output:', result3);
console.log('Expected: 1');
console.log(`✓ Pass: ${result3 === 1}\n`);

// Test 4: Large factorial
console.log('Test 4: Factorial of 10');
const result4 = factorialIterative(10);
console.log('Input:  10');
console.log('Output:', result4);
console.log('Expected: 3628800');
console.log(`✓ Pass: ${result4 === 3628800}\n`);

// Test 5: Negative number
console.log('Test 5: Factorial of negative number');
const result5 = factorialIterative(-5);
console.log('Input:  -5');
console.log('Output:', result5);
console.log('Expected: undefined (factorial not defined for negatives)');
console.log(`✓ Pass: ${result5 === undefined}\n`);

console.log('\n========================================');
console.log('Testing: Factorial (Recursive)');
console.log('========================================\n');

function factorialRecursive(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Test 6: Recursive factorial
console.log('Test 6: Recursive factorial of 6');
const result6 = factorialRecursive(6);
console.log('Input:  6');
console.log('Recursion: 6 × factorial(5)');
console.log('         = 6 × 5 × factorial(4)');
console.log('         = 6 × 5 × 4 × factorial(3)');
console.log('         = ... = 720');
console.log('Output:', result6);
console.log('Expected: 720');
console.log(`✓ Pass: ${result6 === 720}\n`);

// Test 7: Compare both methods
console.log('Test 7: Compare iterative vs recursive');
console.log('Testing n = 7:');
const iter7 = factorialIterative(7);
const rec7 = factorialRecursive(7);
console.log(`  Iterative:  ${iter7}`);
console.log(`  Recursive:  ${rec7}`);
console.log(`  ✓ Both match: ${iter7 === rec7}\n`);

console.log('\n========================================');
console.log('Factorial Table');
console.log('========================================\n');

console.log('n   | n!');
console.log('----|-----------');
for (let i = 0; i <= 10; i++) {
    const fact = factorialIterative(i);
    console.log(`${i.toString().padStart(2)}  | ${fact.toString().padStart(10)}`);
}
console.log('');

console.log('\n========================================');
console.log('Performance Comparison');
console.log('========================================\n');

const n = 20;
console.log(`Computing factorial of ${n}:\n`);

console.time('Iterative');
const iterResult = factorialIterative(n);
console.timeEnd('Iterative');
console.log(`Result: ${iterResult}\n`);

console.time('Recursive');
const recResult = factorialRecursive(n);
console.timeEnd('Recursive');
console.log(`Result: ${recResult}\n`);

console.log('Note: Iterative is typically faster (no call stack overhead)\n');

console.log('\n========================================');
console.log('Real-World Applications');
console.log('========================================\n');

console.log('Factorial is used in:');
console.log('  • Permutations: n! ways to arrange n items');
console.log('  • Combinations: nCr = n! / (r! × (n-r)!)');
console.log('  • Probability theory');
console.log('  • Taylor series expansions');
console.log('  • Algorithm analysis\n');

// Example: Permutations
console.log('Example: How many ways to arrange "ABC"?');
console.log('  3 letters → 3! = 6 ways');
console.log('  ABC, ACB, BAC, BCA, CAB, CBA\n');

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌──────────────┬──────────┬──────────┐');
console.log('│ Method       │ Time     │ Space    │');
console.log('├──────────────┼──────────┼──────────┤');
console.log('│ Iterative    │ O(n)     │ O(1)     │');
console.log('│ Recursive    │ O(n)     │ O(n)     │');
console.log('└──────────────┴──────────┴──────────┘');
console.log('');
console.log('Iterative is preferred (constant space)\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ n! = n × (n-1) × (n-2) × ... × 1');
console.log('✓ 0! = 1 by definition');
console.log('✓ Factorial not defined for negative numbers');
console.log('✓ Grows extremely fast (10! > 3 million)\n');
