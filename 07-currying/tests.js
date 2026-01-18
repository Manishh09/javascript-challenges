/**
 * Test Suite for Currying Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Currying');
console.log('========================================\n');

console.log('Normal vs Curried Function:');
console.log('');
console.log('  Normal:    add(a, b, c) → result');
console.log('');
console.log('  Curried:   add(a) → function');
console.log('                ↓');
console.log('             function(b) → function');
console.log('                ↓');
console.log('             function(c) → result');
console.log('');
console.log('Each step returns a function until all arguments are provided\n');

console.log('\n========================================');
console.log('Testing: Basic Currying');
console.log('========================================\n');

// Test 1: Simple curried sum
console.log('Test 1: Simple curried sum');
const curriedSum = (a) => (b) => (c) => a + b + c;

const result1 = curriedSum(1)(2)(3);
console.log('  curriedSum(1)(2)(3) =', result1);
console.log('  Expected: 6');
console.log(`  ✓ Pass: ${result1 === 6}\n`);

// Test 2: Partial application
console.log('Test 2: Partial application');
const add5 = curriedSum(5);
const add5And10 = add5(10);
const final = add5And10(15);
console.log('  const add5 = curriedSum(5)');
console.log('  const add5And10 = add5(10)');
console.log('  const final = add5And10(15)');
console.log('  Result:', final);
console.log('  Expected: 30');
console.log(`  ✓ Pass: ${final === 30}\n`);

// Test 3: Reusable specialized functions
console.log('Test 3: Reusable specialized functions');
const multiply = (a) => (b) => (c) => a * b * c;
const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);

console.log('  multiply(2)(3)(4) =', multiplyBy2And3(4));
console.log('  multiply(2)(3)(5) =', multiplyBy2And3(5));
console.log('  multiply(2)(3)(6) =', multiplyBy2And3(6));
console.log('  ✓ Same base function, different final arguments\n');

console.log('\n========================================');
console.log('Testing: Running Total (currying-1.js)');
console.log('========================================\n');

// Test 4: Running total with closure
console.log('Test 4: Running total maintains state');
function sum() {
    let total = 0;
    return (num = 0) => total += num;
}

const counter = sum();
console.log('  counter(5) =', counter(5));    // 5
console.log('  counter(3) =', counter(3));    // 8
console.log('  counter(2) =', counter(2));    // 10
console.log('  counter() =', counter());      // 10 (no change)
console.log('  Expected: 5, 8, 10, 10\n');

// Test 5: Multiple independent counters
console.log('Test 5: Multiple independent counters');
const counter1 = sum();
const counter2 = sum();

console.log('  counter1(10) =', counter1(10)); // 10
console.log('  counter2(5) =', counter2(5));   // 5
console.log('  counter1(5) =', counter1(5));   // 15
console.log('  counter2(10) =', counter2(10)); // 15
console.log('  ✓ Each closure maintains its own state\n');

console.log('\n========================================');
console.log('Real-World Examples');
console.log('========================================\n');

// Test 6: API request builder
console.log('Test 6: API Request Builder');
const makeRequest = (baseURL) => (endpoint) => (method) => (data) => {
    return {
        url: `${baseURL}${endpoint}`,
        method: method,
        body: JSON.stringify(data)
    };
};

const apiRequest = makeRequest('https://api.example.com');
const userEndpoint = apiRequest('/users');
const postRequest = userEndpoint('POST');
const request = postRequest({ name: 'John', age: 30 });

console.log('  Base URL: https://api.example.com');
console.log('  Endpoint: /users');
console.log('  Method: POST');
console.log('  Request:', JSON.stringify(request, null, 2));
console.log('\n');

// Test 7: Validation functions
console.log('Test 7: Validation Function Factory');
const validate = (regex) => (errorMsg) => (value) => {
    return regex.test(value)
        ? { valid: true, value }
        : { valid: false, error: errorMsg };
};

const validateEmail = validate(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
)('Invalid email format');

const validatePhone = validate(
    /^\d{3}-\d{3}-\d{4}$/
)('Invalid phone format (XXX-XXX-XXXX)');

console.log('  Email validation:');
console.log('    test@example.com →', JSON.stringify(validateEmail('test@example.com')));
console.log('    invalid →', JSON.stringify(validateEmail('invalid')));

console.log('\n  Phone validation:');
console.log('    123-456-7890 →', JSON.stringify(validatePhone('123-456-7890')));
console.log('    1234567890 →', JSON.stringify(validatePhone('1234567890')));
console.log('\n');

// Test 8: Event handler factory
console.log('Test 8: Event Handler Factory');
const createLogger = (level) => (module) => (message) => {
    return `[${level.toUpperCase()}] [${module}] ${message}`;
};

const logError = createLogger('error');
const logErrorAuth = logError('Auth');
const logErrorAPI = logError('API');

console.log('  Error in Auth:', logErrorAuth('User not found'));
console.log('  Error in API:', logErrorAPI('Request timeout'));
console.log('\n');

// Test 9: Discount calculator
console.log('Test 9: Discount Calculator');
const applyDiscount = (percent) => (tax) => (price) => {
    const discounted = price * (1 - percent / 100);
    return discounted * (1 + tax / 100);
};

const tenPercentOff = applyDiscount(10);
const tenPercentOffWithTax = tenPercentOff(8); // 8% tax

console.log('  Original price: $100');
console.log('  10% discount + 8% tax:', `$${tenPercentOffWithTax(100).toFixed(2)}`);
console.log('  Expected: $97.20 (90 * 1.08)\n');

// Test 10: Function composition
console.log('Test 10: Function Composition');
const add = (a) => (b) => a + b;
const multiplyTwo = (a) => (b) => a * b;
const square = (x) => x * x;

// Compose: square(multiply(2)(add(3)(5)))
const addFive = add(5);
const timesTwo = multiplyTwo(2);

const pipeline = (value) => square(timesTwo(addFive(value)));

console.log('  Pipeline: value → +5 → *2 → square');
console.log('  pipeline(3) = square(timesTwo(addFive(3)))');
console.log('  = square(timesTwo(8))');
console.log('  = square(16)');
console.log('  = 256');
console.log('  Result:', pipeline(3));
console.log(`  ✓ Pass: ${pipeline(3) === 256}\n`);

console.log('\n========================================');
console.log('Advanced Patterns');
console.log('========================================\n');

// Test 11: Infinite currying
console.log('Test 11: Infinite Currying');
function infiniteAdd(a) {
    return function(b) {
        if (b !== undefined) {
            return infiniteAdd(a + b);
        }
        return a;
    };
}

console.log('  infiniteAdd(1)(2)(3)(4)() =', infiniteAdd(1)(2)(3)(4)());
console.log('  infiniteAdd(5)(10)(15)() =', infiniteAdd(5)(10)(15)());
console.log('  ✓ Can chain unlimited times\n');

// Test 12: Generic curry function
console.log('Test 12: Generic Curry Function');
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function sumThree(a, b, c) {
    return a + b + c;
}

const curriedSumThree = curry(sumThree);

console.log('  curriedSumThree(1)(2)(3) =', curriedSumThree(1)(2)(3));
console.log('  curriedSumThree(1, 2)(3) =', curriedSumThree(1, 2)(3));
console.log('  curriedSumThree(1, 2, 3) =', curriedSumThree(1, 2, 3));
console.log('  ✓ Flexible argument application\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Currying transforms multi-arg functions into chains');
console.log('✓ Enables partial application and reusability');
console.log('✓ Closures maintain access to outer scope');
console.log('✓ Perfect for configuration and specialized functions');
console.log('✓ Common in functional programming patterns\n');
console.log('When to use:');
console.log('  • Creating specialized versions of generic functions');
console.log('  • Building configurable utilities (loggers, validators)');
console.log('  • Function composition and pipelines');
console.log('  • Event handlers with preset parameters\n');
