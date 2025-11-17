// create a function to check if one string can be formed by rearranging the letters of another string
// without using inbuilt methods like split, sort, join

function canBeArranged(str1, str2) {
  // Check the types

  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }

  // check length , if not same, return false

  if (str1.length !== str2.length) {
    return false;
  }

  // Count character counts
  const charCount1 = {};
  const charCount2 = {};

  // Count char in str1
  for (const char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count char in str2
  for (const char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare char frequencies in charCount1, charCount2

  // console.log("charcounts", {charCount1, charCount2})

  // check in charCount1
  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  // check im charCount2
  for (const char in charCount2) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}
console.log(canBeArranged("abc", "cab")); // true
console.log(canBeArranged("listen", "silent")); // true
console.log(canBeArranged("hello", "elloh")); // true
console.log(canBeArranged("abc", "abcd")); // false