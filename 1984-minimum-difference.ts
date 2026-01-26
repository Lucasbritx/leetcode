/* https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/?envType=daily-question&envId=2026-01-26 */
function minimumDifference(nums: number[], k: number): number {
  nums.sort(function (a, b) {
    return a - b;
  });
  let actualDifference: number =
    nums.length > k - 1 ? Number(nums[k - 1] - nums[0]) : 0;

  for (let i = 0; i <= nums.length - k; i++) {
    const difference = nums[i + k - 1] - nums[i];
    if (nums[i + k - 1] - nums[i] < actualDifference) {
      actualDifference = difference;
    }
  }
  return actualDifference;
}
