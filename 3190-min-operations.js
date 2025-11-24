/* https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/?envType=daily-question&envId=2025-11-24 */
// leetcode daily question nov 22

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let minOperations = 0;

    nums.map((num)=> {
        if (num % 3 === 0) {
        } else if ((num + 1) % 3 === 0 ) {
            minOperations += 1;
        } else if ((num - 1) % 3 === 0 ) {
            minOperations += 1;
        }
    })
    return minOperations;
};