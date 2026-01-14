/* https://neetcode.io/problems/is-anagram/history */
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check strings length
        if(s.length !== t.length) {
            return false;
        }

        // create a count for both strings
        const charCount = new Map();

        // iterate first string
        for (const char of s) {
            charCount.set(char, (charCount.get(char) || 0) + 1)
        }

        // iterate second string for each character
        // decrement the count
        // if some of these chars are not in the count(return false)
        for (const char of t) {
            if(!charCount.has(char) || charCount.get(char) === 0) {
                return false;
            }
            charCount.set(char, charCount.get(char) - 1);
        }
        return true;
    }
}
