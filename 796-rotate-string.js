/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
/* 
796 Rotate String
https://leetcode.com/problems/rotate-string/?envType=daily-question&envId=2026-05-08
 */
var rotateString = function (s, goal) {
  if (s === goal) return true;

  for (let i = 1; i <= s.length; i++) {
    s = s.slice(1) + s.slice(0, 1);
    if (s === goal) return true;
  }

  return false;
};
