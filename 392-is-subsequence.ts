/* https://leetcode.com/problems/is-subsequence/description/ */
function isSubsequence(s: string, t: string): boolean {
  let foundStrings = 0;
  for (var i = 0; i < t.length; i++) {
    if (s[foundStrings] === t[i]) {
      foundStrings++;
    }
  }
  return s.length === foundStrings;
}
