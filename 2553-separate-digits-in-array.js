/**
 * @param {number[]} nums
 * @return {number[]}
 */
 /* 2553. Separate the Digits in an Array */
var separateDigits = function (nums) {
    return Array.from(nums.join(''), Number);
};