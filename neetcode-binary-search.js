/* https://neetcode.io/problems/binary-search/history */
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle = Math.trunc((nums.length - 1) / 2);
    while (left <= right) {
      if (nums[middle] === target) {
        return middle;
      }
      if (target > nums[middle]) {
        left = middle + 1;
        middle = Math.trunc((right - left) / 2) + left;
      } else {
        right = middle - 1;
        middle = Math.trunc((right - left) / 2) + left;
      }
    }
    return -1;
  }
}
