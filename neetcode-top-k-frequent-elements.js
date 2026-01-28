class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    /* https://neetcode.io/problems/top-k-elements-in-list/question */
    topKFrequent(nums, k) {
        const values = new Map();
        for (const num of nums) {
            if (values.has(num)) {
                values.set(num, values.get(num) + 1);
            } else {
                values.set(num, 1);
            }
        }
        return Array.from(values.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(([num]) => num);
    }
}
