/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 /* 
 242 Valid Anagram
 https://leetcode.com/problems/valid-anagram/
  */
var isAnagram = function(s, t) {
    // TODO evolve to a hash map
    return s.split('').sort().join('') === t.split('').sort().join('');
};