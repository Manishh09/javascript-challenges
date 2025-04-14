// Given two strings. Write a function to Find if one string can be formed by rearranging the letters of other string.

// For example, "abc" and "cab" are anagrams of each other.

// "abc" and "abcd" are not anagrams of each other.

function areAnagrams(str1, str2) {
    // Check if both inputs are strings
    // Check Type of str1, str2, if not string, return false
    if(typeof str1 !== "string" || typeof str2 !== "string"){
        return false
    }

    // Check length
    if (str1.length !== str2.length) {
        return false;
    }

    // Split, Sort, and Join
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    // Compare sorted strings
    // If sorted strings are equal, they are anagrams
    // console.log("sortedStr1, sortedStr2", {sortedStr1, sortedStr2})
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("abc", "cab")); // true
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "elloh")); // true
console.log(areAnagrams("abc", "abcd")); // false
