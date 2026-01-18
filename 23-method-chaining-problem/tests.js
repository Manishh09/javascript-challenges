/**
 * Test Suite for Method Chaining - Compute Salary
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Method Chaining');
console.log('========================================\n');

console.log('Method chaining allows you to call multiple methods in sequence:');
console.log('');
console.log('  computeAmount()');
console.log('    .crores(5)     → Add 5 crores (50,000,000)');
console.log('    .lacs(15)      → Add 15 lakhs (1,500,000)');
console.log('    .thousand(45)  → Add 45 thousand (45,000)');
console.log('    .value()       → Get final amount');
console.log('');
console.log('Each method returns "this" to enable chaining\n');

console.log('\n========================================');
console.log('Testing: computeAmount()');
console.log('========================================\n');

// Test 1: Example from problem
console.log('Test 1: Complex calculation');
const amount1 = computeAmount()
    .lacs(15)
    .crores(5)
    .crores(2)
    .lacs(20)
    .thousand(45)
    .crores(7)
    .value();

console.log('Calculation:');
console.log('  lacs(15)      = 15 × 100,000   = 1,500,000');
console.log('  crores(5)     = 5 × 10,000,000 = 50,000,000');
console.log('  crores(2)     = 2 × 10,000,000 = 20,000,000');
console.log('  lacs(20)      = 20 × 100,000   = 2,000,000');
console.log('  thousand(45)  = 45 × 1,000     = 45,000');
console.log('  crores(7)     = 7 × 10,000,000 = 70,000,000');
console.log('                                   ___________');
console.log(`  TOTAL                          = ${amount1.toLocaleString()}`);
console.log(`  Expected: 143,545,000`);
console.log(`  ✓ Pass: ${amount1 === 143545000}\n`);

// Test 2: Only crores
console.log('Test 2: Only crores');
const amount2 = computeAmount()
    .crores(1)
    .value();
console.log(`  crores(1) = ${amount2.toLocaleString()}`);
console.log(`  Expected: 10,000,000`);
console.log(`  ✓ Pass: ${amount2 === 10000000}\n`);

// Test 3: Only lacs
console.log('Test 3: Only lacs');
const amount3 = computeAmount()
    .lacs(10)
    .value();
console.log(`  lacs(10) = ${amount3.toLocaleString()}`);
console.log(`  Expected: 1,000,000`);
console.log(`  ✓ Pass: ${amount3 === 1000000}\n`);

// Test 4: Only thousands
console.log('Test 4: Only thousands');
const amount4 = computeAmount()
    .thousand(500)
    .value();
console.log(`  thousand(500) = ${amount4.toLocaleString()}`);
console.log(`  Expected: 500,000`);
console.log(`  ✓ Pass: ${amount4 === 500000}\n`);

// Test 5: Multiple crores
console.log('Test 5: Multiple crores additions');
const amount5 = computeAmount()
    .crores(1)
    .crores(2)
    .crores(3)
    .value();
console.log(`  crores(1 + 2 + 3) = ${amount5.toLocaleString()}`);
console.log(`  Expected: 60,000,000`);
console.log(`  ✓ Pass: ${amount5 === 60000000}\n`);

// Test 6: Zero values
console.log('Test 6: Starting with zero');
const amount6 = computeAmount()
    .crores(0)
    .lacs(0)
    .thousand(0)
    .value();
console.log(`  All zeros = ${amount6}`);
console.log(`  Expected: 0`);
console.log(`  ✓ Pass: ${amount6 === 0}\n`);

// Test 7: No method calls
console.log('Test 7: No method calls (just value())');
const amount7 = computeAmount().value();
console.log(`  No operations = ${amount7}`);
console.log(`  Expected: 0`);
console.log(`  ✓ Pass: ${amount7 === 0}\n`);

// Test 8: Large numbers
console.log('Test 8: Large calculation');
const amount8 = computeAmount()
    .crores(100)
    .lacs(50)
    .thousand(25)
    .value();
console.log(`  100 crores + 50 lacs + 25 thousand`);
console.log(`  = ${amount8.toLocaleString()}`);
console.log(`  Expected: 1,005,025,000`);
console.log(`  ✓ Pass: ${amount8 === 1005025000}\n`);

// Test 9: Independent instances
console.log('Test 9: Independent instances');
const calc1 = computeAmount().crores(1);
const calc2 = computeAmount().crores(2);

const result1 = calc1.value();
const result2 = calc2.value();

console.log(`  Instance 1: ${result1.toLocaleString()}`);
console.log(`  Instance 2: ${result2.toLocaleString()}`);
console.log(`  ✓ Independent: ${result1 !== result2}\n`);

console.log('\n========================================');
console.log('Currency Breakdown Examples');
console.log('========================================\n');

const salary = computeAmount()
    .crores(1)
    .lacs(50)
    .thousand(75)
    .value();

console.log(`Total: ₹${salary.toLocaleString()}`);
console.log('Breakdown:');
console.log(`  1 crore    = ₹10,000,000`);
console.log(`  50 lacs    = ₹5,000,000`);
console.log(`  75 thousand = ₹75,000`);
console.log(`  ────────────────────────`);
console.log(`  Total      = ₹${salary.toLocaleString()}\n`);

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Method chaining requires returning "this"');
console.log('✓ Closure maintains private state (totalAmount)');
console.log('✓ Each instance is independent');
console.log('✓ value() breaks the chain and returns result\n');
console.log('Indian Currency:');
console.log('  1 Thousand = 1,000');
console.log('  1 Lac (Lakh) = 100,000');
console.log('  1 Crore = 10,000,000\n');
