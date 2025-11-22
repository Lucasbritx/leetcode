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