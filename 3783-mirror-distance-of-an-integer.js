/**
 * @param {number} n
 * @return {number}
 */
/* 
3783. Mirror Distance of an Integer
https://leetcode.com/problems/mirror-distance-of-an-integer/description/?envType=daily-question&envId=2026-05-02
 */
const reverseNumber = (num) => {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  );
};

var mirrorDistance = function(n) {
    const mirror = reverseNumber(n);
    return Math.abs(n - mirror);
};