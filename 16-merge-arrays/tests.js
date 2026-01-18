/**
 * Test Suite for Merge Arrays Challenge
 * 
 * Run this file: node tests.js
 */

console.log('\n========================================');
console.log('Visual Explanation: Merging Arrays');
console.log('========================================\n');

console.log('Array 1:  [1, 3, 5, 7]');
console.log('Array 2:  [2, 4, 6, 8]');
console.log('');
console.log('Merged:   [1, 2, 3, 4, 5, 6, 7, 8]');
console.log('');
console.log('Different merge strategies:');
console.log('  • Simple concatenation');
console.log('  • Merge sorted arrays (maintaining order)');
console.log('  • Remove duplicates after merge');
console.log('  • Merge multiple arrays');
console.log('');

console.log('\n========================================');
console.log('Testing: Simple Array Merge');
console.log('========================================\n');

// Test 1: Basic merge
console.log('Test 1: Basic concatenation');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged1 = [...arr1, ...arr2];
console.log('Array 1:', arr1);
console.log('Array 2:', arr2);
console.log('Merged: ', merged1);
console.log('Expected: [1, 2, 3, 4, 5, 6]');
console.log(`✓ Pass: ${JSON.stringify(merged1) === JSON.stringify([1, 2, 3, 4, 5, 6])}\n`);

// Test 2: Using concat()
console.log('Test 2: Using concat()');
const arr3 = ['a', 'b'];
const arr4 = ['c', 'd'];
const merged2 = arr3.concat(arr4);
console.log('Array 1:', arr3);
console.log('Array 2:', arr4);
console.log('Merged: ', merged2);
console.log('Expected: ["a", "b", "c", "d"]');
console.log(`✓ Pass: ${JSON.stringify(merged2) === JSON.stringify(['a', 'b', 'c', 'd'])}\n`);

// Test 3: Empty arrays
console.log('Test 3: Merging with empty arrays');
const arr5 = [1, 2, 3];
const arr6 = [];
const merged3 = [...arr5, ...arr6];
console.log('Array 1:', arr5);
console.log('Array 2: []');
console.log('Merged: ', merged3);
console.log('Expected: [1, 2, 3]');
console.log(`✓ Pass: ${JSON.stringify(merged3) === JSON.stringify([1, 2, 3])}\n`);

console.log('\n========================================');
console.log('Testing: Merge Sorted Arrays');
console.log('========================================\n');

function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    // Add remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

// Test 4: Merge sorted arrays
console.log('Test 4: Merge two sorted arrays');
const sorted1 = [1, 3, 5, 7];
const sorted2 = [2, 4, 6, 8];
const merged4 = mergeSortedArrays(sorted1, sorted2);
console.log('Array 1:', sorted1);
console.log('Array 2:', sorted2);
console.log('Merged: ', merged4);
console.log('Expected: [1, 2, 3, 4, 5, 6, 7, 8]');
console.log(`✓ Pass: ${JSON.stringify(merged4) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8])}\n`);

// Test 5: Different lengths
console.log('Test 5: Different length arrays');
const sorted3 = [1, 5, 9];
const sorted4 = [2, 3, 4, 6, 7, 8];
const merged5 = mergeSortedArrays(sorted3, sorted4);
console.log('Array 1:', sorted3);
console.log('Array 2:', sorted4);
console.log('Merged: ', merged5);
console.log('Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]');
console.log(`✓ Pass: ${JSON.stringify(merged5) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])}\n`);

console.log('\n========================================');
console.log('Testing: Merge with Duplicates');
console.log('========================================\n');

// Test 6: Remove duplicates
console.log('Test 6: Merge and remove duplicates');
const arr7 = [1, 2, 3, 3, 4];
const arr8 = [3, 4, 5, 6];
const merged6 = [...new Set([...arr7, ...arr8])];
console.log('Array 1:', arr7);
console.log('Array 2:', arr8);
console.log('Merged: ', merged6);
console.log('Expected: [1, 2, 3, 4, 5, 6] (unique only)');
console.log(`✓ Pass: ${merged6.length === 6 && merged6.includes(1) && merged6.includes(6)}\n`);

console.log('\n========================================');
console.log('Testing: Merge Multiple Arrays');
console.log('========================================\n');

// Test 7: Merge multiple arrays
console.log('Test 7: Merge three arrays');
const multi1 = [1, 2];
const multi2 = [3, 4];
const multi3 = [5, 6];
const merged7 = [...multi1, ...multi2, ...multi3];
console.log('Array 1:', multi1);
console.log('Array 2:', multi2);
console.log('Array 3:', multi3);
console.log('Merged: ', merged7);
console.log('Expected: [1, 2, 3, 4, 5, 6]');
console.log(`✓ Pass: ${JSON.stringify(merged7) === JSON.stringify([1, 2, 3, 4, 5, 6])}\n`);

// Test 8: Using reduce for multiple arrays
console.log('Test 8: Merge array of arrays using reduce');
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const merged8 = arrayOfArrays.reduce((acc, arr) => acc.concat(arr), []);
console.log('Input:', arrayOfArrays);
console.log('Merged:', merged8);
console.log('Expected: [1, 2, 3, 4, 5, 6]');
console.log(`✓ Pass: ${JSON.stringify(merged8) === JSON.stringify([1, 2, 3, 4, 5, 6])}\n`);

console.log('\n========================================');
console.log('Different Merge Methods');
console.log('========================================\n');

const test1 = [1, 2, 3];
const test2 = [4, 5, 6];

console.log('Array 1:', test1);
console.log('Array 2:', test2);
console.log('');

console.log('Method 1: Spread operator');
console.log('  Result:', [...test1, ...test2]);

console.log('\nMethod 2: concat()');
console.log('  Result:', test1.concat(test2));

console.log('\nMethod 3: push with spread');
const test3 = [...test1];
test3.push(...test2);
console.log('  Result:', test3);

console.log('\nMethod 4: Array.from()');
console.log('  Result:', Array.from([...test1, ...test2]));

console.log('');

console.log('\n========================================');
console.log('Performance Comparison');
console.log('========================================\n');

const large1 = Array.from({ length: 10000 }, (_, i) => i);
const large2 = Array.from({ length: 10000 }, (_, i) => i + 10000);

console.log('Merging two arrays of 10,000 elements each:\n');

console.time('Spread operator');
const spread = [...large1, ...large2];
console.timeEnd('Spread operator');

console.time('concat()');
const concatted = large1.concat(large2);
console.timeEnd('concat()');

console.time('push with spread');
const pushed = [...large1];
pushed.push(...large2);
console.timeEnd('push with spread');

console.log('');

console.log('\n========================================');
console.log('Complexity Analysis');
console.log('========================================\n');

console.log('┌─────────────────────┬──────────┬──────────┐');
console.log('│ Method              │ Time     │ Space    │');
console.log('├─────────────────────┼──────────┼──────────┤');
console.log('│ Simple concat       │ O(n+m)   │ O(n+m)   │');
console.log('│ Merge sorted        │ O(n+m)   │ O(n+m)   │');
console.log('│ Multiple arrays     │ O(k×n)   │ O(total) │');
console.log('└─────────────────────┴──────────┴──────────┘');
console.log('n, m = array lengths, k = number of arrays\n');

console.log('\n========================================');
console.log('Tests completed!');
console.log('========================================\n');
console.log('Key Takeaways:');
console.log('✓ Spread operator [...arr1, ...arr2] is clean and fast');
console.log('✓ concat() is traditional and reliable');
console.log('✓ For sorted arrays, use two-pointer technique');
console.log('✓ Use Set to remove duplicates after merge\n');
