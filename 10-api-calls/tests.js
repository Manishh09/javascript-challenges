/**
 * Test Suite for API Calls Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Async/Await & Promises');
console.log('========================================\n');

console.log('Sequential vs Parallel API Calls:');
console.log('');
console.log('Sequential (Await each):');
console.log('  ├── API Call 1 ──→ 1s');
console.log('  └── API Call 2 ──→ 1s');
console.log('  Total: 2 seconds');
console.log('');
console.log('Parallel (Promise.all):');
console.log('  ├── API Call 1 ──→ 1s ┐');
console.log('  └── API Call 2 ──→ 1s ┴→ Total: 1 second');
console.log('');

console.log('\n========================================');
console.log('Testing: API Calls (Using JSONPlaceholder)');
console.log('========================================\n');

// Note: These tests will make real API calls
// Uncomment to run with real API

console.log('Test 1: Fetch users');
console.log('Making API call to: https://jsonplaceholder.typicode.com/users');
console.log('This is a real API call example in the actual implementation');
console.log('Expected: Array of 10 users\n');

console.log('Test 2: Sequential API calls');
console.log('First: Fetch users');
console.log('Then: Fetch posts for first user');
console.log('Expected: User data + their posts\n');

console.log('Test 3: Parallel API calls');
console.log('Using Promise.all() to fetch multiple resources:');
console.log('  - Users');
console.log('  - Posts');
console.log('  - Comments');
console.log('Expected: All data fetched simultaneously\n');

console.log('\n========================================');
console.log('Error Handling Examples');
console.log('========================================\n');

console.log('Example 1: Try-Catch');
console.log('  try {');
console.log('    const data = await fetch(url);');
console.log('    return await data.json();');
console.log('  } catch (error) {');
console.log('    console.error("Error:", error);');
console.log('  }');
console.log('');

console.log('Example 2: .catch()');
console.log('  fetch(url)');
console.log('    .then(res => res.json())');
console.log('    .then(data => console.log(data))');
console.log('    .catch(error => console.error(error));');
console.log('');

console.log('\n========================================');
console.log('Best Practices');
console.log('========================================\n');

console.log('✓ Always handle errors (try-catch or .catch())');
console.log('✓ Use async/await for cleaner code');
console.log('✓ Use Promise.all() for parallel requests');
console.log('✓ Set appropriate timeouts');
console.log('✓ Check response status before parsing');
console.log('✓ Use environment variables for API keys');
console.log('');

console.log('\n========================================');
console.log('Code Examples');
console.log('========================================\n');

console.log('Sequential Pattern:');
console.log('  async function fetchUserAndPosts(userId) {');
console.log('    const user = await fetch(`/users/${userId}`);');
console.log('    const posts = await fetch(`/posts?userId=${userId}`);');
console.log('    return { user, posts };');
console.log('  }');
console.log('');

console.log('Parallel Pattern:');
console.log('  async function fetchMultiple() {');
console.log('    const [users, posts] = await Promise.all([');
console.log('      fetch("/users"),');
console.log('      fetch("/posts")');
console.log('    ]);');
console.log('    return { users, posts };');
console.log('  }');
console.log('');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('To test with real API:');
console.log('  1. Check api-calls.js implementation');
console.log('  2. Run: node api-calls.js');
console.log('  3. Observe network requests and timing\n');
