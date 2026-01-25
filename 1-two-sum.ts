/* https://leetcode.com/problems/two-sum/description/?envType=daily-question&envId=2025-07-19 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const remaining = target - number;
    if (map.has(remaining)) return [map.get(remaining), i];
    map.set(number, i);
  }
  return [];
}
