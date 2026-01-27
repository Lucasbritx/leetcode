/* https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/ */
function check(nums: number[]): boolean {
    let breakingPoints = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) breakingPoints++;
    }

    if (breakingPoints == 0) return true

    if (breakingPoints == 1 && nums[0] >= nums[nums.length - 1]) {
        return true;
    }
    return false;
};