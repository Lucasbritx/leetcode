/**
 * @param {number[]} nums
 * @return {number}
 */
/* https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/submissions/1710361320/?envType=daily-question&envId=2025-07-25 */
const maxSum = function (nums) {
  let sum = 0;
  const uniqueNumbers = [...new Set(nums)];
  const positiveNumbers = uniqueNumbers.filter((num) => {
    return num > 0;
  });
  positiveNumbers.map((num) => {
    return (sum += num);
  });

  return sum;
};
