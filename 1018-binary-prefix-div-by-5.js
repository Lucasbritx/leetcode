/* https://leetcode.com/problems/binary-prefix-divisible-by-5/description/?envType=daily-question&envId=2025-11-24 */
// Nov 24 daily leetcode
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let divisiblesBy5 = [];
    let decimal = 0;
    nums.map((bit) => {
        decimal = (decimal * 2 + bit) % 5;
        divisiblesBy5.push(decimal === 0);
    });
    return divisiblesBy5;
};