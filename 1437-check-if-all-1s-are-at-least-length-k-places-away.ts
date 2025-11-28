/* 
https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/?envType=daily-question&envId=2025-11-28
*/
function kLengthApart(nums: number[], k: number): boolean {
  let isKLengthApart: boolean = true;
  let last1Position = -1;

  for (let i = 0; i < nums.length; i++) {
    const isOne = nums[i] === 1;
    if (isOne) {
      const zerosBetween = i - last1Position - 1;
      const isLast1PositionStarted = last1Position != -1;
      if (isLast1PositionStarted && zerosBetween < k) {
        isKLengthApart = false;
      }
      last1Position = i;
    }
  }
  return isKLengthApart;
}
