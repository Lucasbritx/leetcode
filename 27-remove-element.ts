/* https://leetcode.com/problems/remove-element/ */
function removeElement(nums: number[], val: number): number {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};