/**
 * @param {number[]} nums
 * @return {number}
 */
/* https://leetcode.com/problems/maximum-erasure-value/?envType=daily-question&envId=2025-07-22 */
/* WRONG need to fix, instead unique values create subarrays to see highest value */
const maximumUniqueSubarray = function (nums) {
    const uniqueValues = [...new Set(nums)];
    const counter = uniqueValues.reduce((a, b) => a + b, 0);
    return counter;
};