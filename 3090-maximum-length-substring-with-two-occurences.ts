/* https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/ */
function maximumLengthSubstring(s: string): number {
  let r = 0;
  let l = 0;
  let max = 1;
  const map = new Map();

  while (r < s.length) {
    if (map.get(s[r])) {
      map.set(s[r], map.get(s[r]) + 1);
    } else {
      map.set(s[r], 1);
    }
    while (map.get(s[r]) == 3) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
}
