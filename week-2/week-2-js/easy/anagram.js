/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let str1_low = str1.toLowerCase();
  let str2_low = str2.toLowerCase();
  let s = str1_low.split("").sort().join("");
  let s2 = str2_low.split("").sort().join("");
  return s==s2;
}

module.exports = isAnagram;
