// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * 
 * 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

 */

 
/**
 * Checks if a given number is a palindrome.
 * A palindrome is a number that reads the same backward as forward.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns `true` if the number is a palindrome, otherwise `false`.
 */
const isPalindrome = (num) => {

    // check if the number is negative
    if(num < 0) return false;

    // check if the number is a single digit
    if(num > 0 && num < 10) return false;

    // check if the number is a multiple of 10 and not zero
    if(num % 10 === 0 && num !== 0)  return false;

    let sum = 0;
    const original = num;
    
    while(x > 0){
         
        sum = sum * 10 + (num % 10);
        
        num = Math.floor(num / 10);
        
    }
    return original === sum;
};

console.log(isPalindrome(-121));