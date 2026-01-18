# Contributing to JavaScript Coding Challenges

Thank you for your interest in contributing to this repository! This guide will help you add new challenges, improve existing ones, and maintain consistency across the project.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Repository Structure](#repository-structure)
- [Adding a New Challenge](#adding-a-new-challenge)
- [Coding Standards](#coding-standards)
- [Documentation Guidelines](#documentation-guidelines)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

## 🚀 Getting Started

### Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/javascript-challenges.git
cd javascript-challenges

# Create a new branch
git checkout -b feature/your-challenge-name
```

### Prerequisites

- Node.js (v14 or higher)
- Basic understanding of JavaScript
- Familiarity with Git and GitHub

## 📁 Repository Structure

```
javascript-challenges/
├── README.md                      # Main repository documentation
├── CONTRIBUTING.md               # This file
├── XX-challenge-name/            # Challenge folder (numbered)
│   ├── solution-file.js         # Main solution implementation
│   ├── alternative-solution.js  # Alternative approaches (optional)
│   ├── tests.js                 # Comprehensive test file
│   ├── README.md                # Challenge-specific documentation
│   └── notes.md                 # Additional notes (optional)
```

## ➕ Adding a New Challenge

### Step 1: Create Challenge Folder

1. Determine the next available number (e.g., `27-`, `28-`, etc.)
2. Create folder with format: `XX-descriptive-name`

   ```bash
   mkdir 27-your-challenge-name
   cd 27-your-challenge-name
   ```

### Step 2: Create Solution File(s)

**Filename:** Use descriptive, kebab-case names

- `find-duplicates.js`
- `reverse-string.js`
- `merge-sorted-arrays.js`

**File Structure:**

```javascript
/**
 * PROBLEM: [Brief problem statement]
 * 
 * Given [input description], [task description].
 * 
 * Examples:
 *   Input:  [example input]
 *   Output: [expected output]
 * 
 * Constraints:
 *   - [constraint 1]
 *   - [constraint 2]
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 * 
 * @param {type} param - Description
 * @returns {type} Description
 */

function solutionName(param) {
    // Your implementation here
    
    // Add inline comments for complex logic
    // Explain your approach
    
    return result;
}

// Test cases (basic)
console.log(solutionName(input1)); // Expected output
console.log(solutionName(input2)); // Expected output
```

### Step 3: Create Tests File

**Filename:** `tests.js`

**Template:**

```javascript
/**
 * Test Suite for [Challenge Name]
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: [Challenge Name]');
console.log('========================================\n');

// ASCII diagram or visual representation
console.log('[Visual explanation of the problem]');
console.log('');

console.log('\n========================================');
console.log('Testing: [Primary Approach]');
console.log('========================================\n');

// Import or define solution
function solution(input) {
    // Solution code or import
}

// Test 1: Basic case
console.log('Test 1: [Description]');
const input1 = [/* test data */];
const result1 = solution(input1);
console.log('Input: ', input1);
console.log('Output:', result1);
console.log('Expected: [expected value]');
console.log(`✓ Pass: ${/* condition */}\n`);

// Test 2: Edge case
console.log('Test 2: [Edge case description]');
// ... similar structure

// Test 3-6: Various scenarios
// - Empty input
// - Single element
// - Large input
// - Boundary conditions
// - Special cases

console.log('\n========================================');
console.log('Testing: [Alternative Approach]');
console.log('========================================\n');

// Test alternative approaches

console.log('\n========================================');
console.log('Performance Comparison');
console.log('========================================\n');

// Compare different approaches
console.time('Approach 1');
// Run approach 1
console.timeEnd('Approach 1');

console.time('Approach 2');
// Run approach 2
console.timeEnd('Approach 2');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ [Key point 1]');
console.log('✓ [Key point 2]');
console.log('✓ [Key point 3]\n');
```

### Step 4: Create README.md

**Template:**

```markdown
# [Challenge Name]

## Problem Statement

[Clear, concise problem description]

**Example:**
\`\`\`javascript
Input:  [example input]
Output: [expected output]
\`\`\`

## Solutions

### Approach 1: [Name]
\`\`\`javascript
function solution(input) {
    // Implementation
}
\`\`\`

**How it works:**
- [Step 1]
- [Step 2]
- [Step 3]

### Approach 2: [Alternative Name]
[Alternative implementation]

## Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Approach 1 | O(?) | O(?) |
| Approach 2 | O(?) | O(?) |

**Best Choice:** [Recommendation and reasoning]

## Edge Cases

- [Edge case 1]: [Expected behavior]
- [Edge case 2]: [Expected behavior]

## Interview Follow-ups

1. **[Follow-up question 1]?**
   \`\`\`javascript
   // Answer/solution
   \`\`\`

2. **[Follow-up question 2]?**
   [Explanation]

## Practical Applications

- [Application 1]
- [Application 2]
- [Application 3]

## Related Challenges

- [Related challenge 1]
- [Related challenge 2]

## Run Tests

\`\`\`bash
node tests.js
\`\`\`
```

### Step 5: Update Main README

Add your challenge to the main `README.md`:

```markdown
## 📚 Challenge Categories

### [Category Name]
- [XX. Challenge Name](./XX-challenge-name) - Brief description
```

## 📝 Coding Standards

### JavaScript Style

```javascript
// ✓ Good: Use const/let, not var
const numbers = [1, 2, 3];
let count = 0;

// ✓ Good: Use arrow functions for callbacks
const doubled = numbers.map(n => n * 2);

// ✓ Good: Descriptive variable names
const userAge = 25;
const isActive = true;

// ✗ Bad: Single letter variables (except loops)
const x = 25;
const f = true;

// ✓ Good: Add JSDoc comments
/**
 * Calculate the sum of an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of all numbers
 */
function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
```

### Formatting

- **Indentation:** 4 spaces (no tabs)
- **Line length:** Max 100 characters
- **Semicolons:** Optional but be consistent
- **Quotes:** Single quotes preferred
- **Trailing commas:** Use for multi-line

### Naming Conventions

```javascript
// Functions: camelCase, verb-based
function calculateTotal() {}
function fetchUserData() {}

// Variables: camelCase, descriptive
const userName = 'John';
const totalPrice = 100;

// Constants: UPPERCASE with underscores
const MAX_RETRIES = 3;
const API_BASE_URL = 'https://api.example.com';

// Classes: PascalCase
class UserAccount {}
class ShoppingCart {}
```

## 📖 Documentation Guidelines

### Problem Statements

- Clear and concise
- Include examples
- Specify constraints
- Define input/output types

### Code Comments

```javascript
// ✓ Good: Explain WHY, not WHAT
// Use two-pointer technique for O(1) space complexity
let left = 0;
let right = arr.length - 1;

// ✗ Bad: Stating the obvious
// Set left to 0
let left = 0;

// ✓ Good: Explain complex algorithms
// Boyer-Moore majority vote algorithm
// Maintains candidate and count to find majority element in O(n) time
```

### ASCII Diagrams

Use ASCII art for visual explanations:

```javascript
console.log('Array: [1, 3, 5, 7]');
console.log('       ↓  ↓  ↓  ↓');
console.log('       ✓  ✗  ✓  ✗');
```

## ✅ Testing Requirements

### Minimum Test Coverage

Every challenge must have:

1. **Basic functionality test** - Happy path
2. **Empty input test** - `[]`, `""`, `null`, etc.
3. **Single element test** - Minimal valid input
4. **Large input test** - Performance check
5. **Edge cases** - Boundary conditions
6. **Error cases** - Invalid inputs (if applicable)

### Test Structure

```javascript
// ✓ Good: Descriptive test names
console.log('Test 1: Basic array of positive numbers');
console.log('Test 2: Empty array returns default value');
console.log('Test 3: Array with single element');

// ✓ Good: Show input, output, and expected
console.log('Input:   ', input);
console.log('Output:  ', result);
console.log('Expected:', expected);
console.log(`✓ Pass: ${result === expected}\n`);
```

## 🔄 Pull Request Process

### Before Submitting

1. **Run all tests**

   ```bash
   node your-challenge/tests.js
   ```

2. **Check for errors**
   - No console errors
   - All tests pass
   - Code is properly formatted

3. **Update documentation**
   - Challenge README complete
   - Main README updated
   - Code comments added

### PR Template

```markdown
## Description
[Brief description of the challenge]

## Type of Change
- [ ] New challenge
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests included and passing
- [ ] README.md created/updated
- [ ] Main README updated
- [ ] Comments added for complex logic

## Challenge Details
- **Difficulty:** Easy/Medium/Hard
- **Category:** Array/String/Algorithm/etc.
- **Time Complexity:** O(?)
- **Space Complexity:** O(?)
```

### Review Process

1. Automated checks run
2. Maintainer reviews code
3. Feedback provided if needed
4. Once approved, PR is merged
5. Your contribution is live!

## 🎨 Style Guide

### File Organization

```javascript
// 1. Problem statement and explanation
/**
 * PROBLEM: ...
 */

// 2. Main solution
function mainSolution() {}

// 3. Alternative solutions
function alternativeSolution() {}

// 4. Helper functions
function helperFunction() {}

// 5. Test cases (basic)
console.log(mainSolution(test1));
```

### Complexity Annotations

```javascript
/**
 * Time Complexity: O(n log n) - sorting dominates
 * Space Complexity: O(n) - additional array for results
 */
```

### Example Quality

```javascript
// ✓ Good: Clear, realistic examples
// Find duplicates: [1, 2, 3, 2, 4] → [2]

// ✗ Bad: Vague or unrealistic
// Input: array → output: result
```

## 🤝 Community Guidelines

### Be Respectful

- Constructive feedback only
- Respect different approaches
- Help others learn

### Code of Conduct

- Be welcoming and inclusive
- Focus on what's best for the community
- Show empathy towards others

## 📞 Getting Help

- **Issues:** Open a GitHub issue for bugs or questions
- **Discussions:** Use GitHub Discussions for general questions
- **Examples:** Look at existing challenges for reference

## 🎯 Challenge Difficulty Guidelines

### Easy

- Basic array/string operations
- Simple loops and conditions
- Common built-in methods
- Time: 5-10 minutes

### Medium

- Multiple steps required
- Data structure knowledge
- Algorithm understanding
- Time: 15-30 minutes

### Hard

- Complex algorithms
- Optimization required
- Advanced data structures
- Time: 30+ minutes

## 📊 Quality Checklist

Before submitting, ensure:

- [ ] Solution is correct and efficient
- [ ] Code is clean and readable
- [ ] Comments explain complex parts
- [ ] Tests are comprehensive
- [ ] README is complete
- [ ] Examples are clear
- [ ] Main README is updated
- [ ] No console errors
- [ ] Follows naming conventions
- [ ] ASCII diagrams where helpful

## 🙏 Thank You

Your contributions make this repository valuable for everyone learning JavaScript. We appreciate your time and effort!

Happy coding! 🚀
