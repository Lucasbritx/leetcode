// https://leetcode.com/problems/keep-multiplying-found-values-by-two/submissions/1833746661/?envType=daily-question&envId=2025-11-19
// leetcode daily challenge nov 18 2025
// 2154. Keep Multiplying Found Values by Two
class Solution {
    public int findFinalValue(int[] nums, int original) {
        int finalValue = original;
        for (int num : nums) {
            if (num == original) {
                int newOriginal = original * 2;
                finalValue = findFinalValue(nums, newOriginal);
            }
        }
        return finalValue;
    }
}