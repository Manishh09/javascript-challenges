# Method Chaining

## 📋 Problem Statement

Implement method chaining to perform a series of operations in a fluent, readable manner. Each method returns `this` to allow chaining.

```javascript
const calc = new Calculator(10);

Input:  calc.add(5).subtract(3).multiply(2).getResult()
Output: 24
```

## Solution

```javascript
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    
    add(num) {
        this.value += num;
        return this;
    }
    
    subtract(num) {
        this.value -= num;
        return this;
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    divide(num) {
        if (num === 0) throw new Error('Cannot divide by zero');
        this.value /= num;
        return this;
    }
    
    getResult() {
        return this.value;
    }
}
```

**How it works:**
- Each method modifies internal state
- Returns `this` to enable chaining
- Terminal method `getResult()` returns value

**Complexity:** O(1) per operation

## Alternative Approaches

<details>
<summary>Immutable calculator</summary>

```javascript
class ImmutableCalculator {
    constructor(value = 0) {
        this.value = value;
    }
    
    add(num) {
        return new ImmutableCalculator(this.value + num);
    }
    
    subtract(num) {
        return new ImmutableCalculator(this.value - num);
    }
    
    getResult() {
        return this.value;
    }
}
```
Each operation creates new instance - immutable pattern
</details>

<details>
<summary>Factory function pattern</summary>

```javascript
function createCalculator(initialValue = 0) {
    let value = initialValue;
    
    const api = {
        add(num) {
            value += num;
            return api;
        },
        subtract(num) {
            value -= num;
            return api;
        },
        getResult() {
            return value;
        }
    };
    
    return api;
}
```
Closure-based approach without classes
</details>

## Edge Cases

```javascript
const c = new Calculator(10);
c.add(5).getResult();           // 15
c.subtract(3).multiply(2).getResult(); // 24
c.divide(0);                    // Error: Cannot divide by zero
```

## Run Tests

```bash
node tests.js
```
        add(num) {
            value += num;
            return api;
        },
        subtract(num) {
            value -= num;
            return api;
        },
        multiply(num) {
            value *= num;
            return api;
        },
        divide(num) {
            if (num === 0) throw new Error('Cannot divide by zero');
            value /= num;
            return api;
        },
        getResult() {
            return value;
        }
    };
    
    return api;
}

// Usage
const calc = createCalculator(10);
const result = calc.add(5).subtract(3).getResult();  // 12
```

## Real-World Examples

### Example 1: Salary Calculator
```javascript
class SalaryCalculator {
    constructor(baseSalary) {
        this.salary = baseSalary;
    }
    
    addBonus(amount) {
        this.salary += amount;
        return this;
    }
    
    addBonusPercent(percent) {
        this.salary += this.salary * (percent / 100);
        return this;
    }
    
    deductTax(percent) {
        this.salary -= this.salary * (percent / 100);
        return this;
    }
    
    deductAmount(amount) {
        this.salary -= amount;
        return this;
    }
    
    getTotalSalary() {
        return Math.round(this.salary);
    }
}

// Usage
const salary = new SalaryCalculator(5000)
    .addBonus(500)
    .addBonusPercent(10)
    .deductTax(20)
    .getTotalSalary();  // 4840
```

### Example 2: Query Builder
```javascript
class QueryBuilder {
    constructor() {
        this.query = { filters: [], sorts: [], limit: null };
    }
    
    where(field, operator, value) {
        this.query.filters.push({ field, operator, value });
        return this;
    }
    
    orderBy(field, direction = 'asc') {
        this.query.sorts.push({ field, direction });
        return this;
    }
    
    limit(count) {
        this.query.limit = count;
        return this;
    }
    
    build() {
        return this.query;
    }
}

// Usage
const query = new QueryBuilder()
    .where('age', '>', 18)
    .where('status', '===', 'active')
    .orderBy('name', 'asc')
    .limit(10)
    .build();
```

### Example 3: String Builder
```javascript
class StringBuilder {
    constructor(str = '') {
        this.parts = [str];
    }
    
    append(str) {
        this.parts.push(str);
        return this;
    }
    
    appendLine(str) {
        this.parts.push(str, '\n');
        return this;
    }
    
    prepend(str) {
        this.parts.unshift(str);
        return this;
    }
    
    clear() {
        this.parts = [];
        return this;
    }
    
    toString() {
        return this.parts.join('');
    }
}

// Usage
const html = new StringBuilder()
    .append('<div>')
    .appendLine('  <h1>Title</h1>')
    .appendLine('  <p>Content</p>')
    .append('</div>')
    .toString();
```

### Example 4: Array Processor
```javascript
class ArrayProcessor {
    constructor(arr) {
        this.data = arr;
    }
    
    filter(fn) {
        this.data = this.data.filter(fn);
        return this;
    }
    
    map(fn) {
        this.data = this.data.map(fn);
        return this;
    }
    
    sort(fn) {
        this.data = this.data.sort(fn);
        return this;
    }
    
    take(count) {
        this.data = this.data.slice(0, count);
        return this;
    }
    
    getResult() {
        return this.data;
    }
}

// Usage
const result = new ArrayProcessor([1, 2, 3, 4, 5])
    .filter(x => x > 2)
    .map(x => x * 2)
    .sort((a, b) => b - a)
    .getResult();  // [10, 8, 6]
```

## Benefits of Method Chaining

1. **Readability:** Fluent, English-like syntax
2. **Conciseness:** Less code, no intermediate variables
3. **Expressiveness:** Clear intent
4. **Immutability:** Can implement immutable patterns

## Edge Cases

- Forgetting to return `this`
- Null/undefined values
- Error handling in chain
- Breaking the chain intentionally
- Type safety in TypeScript

## Interview Follow-ups

1. **How to add error handling without breaking chain?**
   ```javascript
   class SafeCalculator extends Calculator {
       constructor(value) {
           super(value);
           this.error = null;
       }
       
       divide(num) {
           if (num === 0) {
               this.error = new Error('Cannot divide by zero');
               return this;  // Continue chain
           }
           this.value /= num;
           return this;
       }
       
       getResult() {
           if (this.error) throw this.error;
           return this.value;
       }
   }
   ```

2. **How to implement lazy evaluation?**
   ```javascript
   class LazyCalculator {
       constructor(value) {
           this.value = value;
           this.operations = [];
       }
       
       add(num) {
           this.operations.push(v => v + num);
           return this;
       }
       
       multiply(num) {
           this.operations.push(v => v * num);
           return this;
       }
       
       execute() {
           return this.operations.reduce((result, op) => op(result), this.value);
       }
   }
   ```

3. **What about conditional chaining?**
   ```javascript
   class ConditionalCalculator extends Calculator {
       when(condition, fn) {
           if (condition) {
               fn(this);
           }
           return this;
       }
   }
   
   // Usage
   new ConditionalCalculator(10)
       .add(5)
       .when(someCondition, calc => calc.multiply(2))
       .subtract(3)
       .getResult();
   ```

4. **How to implement in functional programming style?**
   ```javascript
   const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
   
   const add = x => y => y + x;
   const multiply = x => y => y * x;
   const subtract = x => y => y - x;
   
   const calculate = pipe(
       add(5),
       multiply(2),
       subtract(3)
   );
   
   calculate(10);  // (10 + 5) * 2 - 3 = 27
   ```

## Popular Libraries Using Method Chaining

- **jQuery:** `$('.class').hide().fadeIn()`
- **Lodash:** `_.chain(data).filter().map().value()`
- **Moment.js:** `moment().add(1, 'days').format()`
- **Promise:** `.then().catch().finally()`
- **Array methods:** `.filter().map().reduce()`

## Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Mutable chaining | O(n) operations | O(1) |
| Immutable chaining | O(n) operations | O(n) |

## Practical Applications

- Calculator implementations
- Query builders (SQL, MongoDB)
- DOM manipulation (jQuery-like)
- Configuration builders
- Request builders (HTTP)
- Test assertions (Chai, Jest)

## Related Concepts

- Builder pattern
- Fluent interface
- Pipeline pattern
- Functional composition
- Monads (flatMap chaining)

## Run Tests

```bash
node tests.js
```
