/* https://neetcode.io/problems/is-palindrome/question?list=blind75 */
class Solution {
  isInvalidChar(char) {
    return !/[a-z0-9]/i.test(char);
  }
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    for (let i = 0, j = s.length - 1; i < j; ) {
      const leftValue = s[i];
      const rightValue = s[j];
      if (this.isInvalidChar(leftValue)) {
        i++;
      } else if (this.isInvalidChar(rightValue)) {
        j--;
      } else {
        if (leftValue.toLowerCase() !== rightValue.toLowerCase()) return false;
        i++;
        j--;
      }
    }

    return true;
  }
}
