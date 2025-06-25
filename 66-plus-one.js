
/* https://leetcode.com/problems/plus-one/description/ */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const digitsLength = digits.length;
  const lastIndex = digitsLength - 1;

  if (digits[lastIndex] === 9) {
    digits[lastIndex] = 0;
    for (let i = lastIndex - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        return digits;
      }
    }
    digits.unshift(1);
  } else {
    digits[lastIndex] += 1;
  }

  return digits;
};
