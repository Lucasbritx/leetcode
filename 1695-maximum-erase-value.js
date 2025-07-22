/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = function (nums) {
  nums.sort((a, b) => a - b);
  const uniqueValues = [...new Set(nums)];
  let counter = 0;
  uniqueValues.map((value) => {
    counter += value;
  });
  return counter;
};
