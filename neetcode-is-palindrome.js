/* https://neetcode.io/problems/is-palindrome/question?list=blind75 */
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase()
            .replace(/[^a-z0-9]/g, '');

        return string === string.split('').reverse().join('');
    }
}
