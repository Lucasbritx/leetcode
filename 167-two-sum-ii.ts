/* https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/ */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0, j = nums.length - 1; i < j; ) {
    const numberI = nums[i];
    const numberJ = nums[j];
    const sum = numberI + numberJ;
    if (sum === target) return [i + 1, j + 1];

    if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return [];
}
