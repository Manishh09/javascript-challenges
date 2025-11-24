/**
 * Problem Statement:
 * Implement a computeAmount() function that calculates monetary amounts using Indian currency denominations through method chaining.
 * 
 * Requirements:
 * - The function should support the following methods:
 * 
 * crores(n) - Adds n crores to the total (1 crore = 10,000,000)
 * lacs(n) - Adds n lakhs to the total (1 lakh = 100,000)
 * thousand(n) - Adds n thousands to the total (1 thousand = 1,000)
 * value() - Returns the final computed amount as a number
 */

function computeAmount() {
    let totalAmount = 0;

    return {
        crores: function (n) {
            totalAmount += n * 10000000;
            return this;
        },
        lacs: function (n) {
            totalAmount += n * 100000;
            return this;
        },
        thousand: function (n) {
            totalAmount += n * 1000;
            return this;
        },
        value: function () {
            return totalAmount;
        }
    }
}

// Example usage:
const amount = computeAmount()
    .lacs(15)
    .crores(5)
    .crores(2)
    .lacs(20)
    .thousand(45)
    .crores(7)
    .value();
console.log(amount); // Output: 140204500