/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* https://leetcode.com/problems/two-sum/description/?envType=daily-question&envId=2025-07-19 */
const twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (i != j && nums[i] + nums[j] == target) {
        result = [i, j];
      }
    }
  }
  return result;
};
