/* https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num) && i - map.get(num) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
}
