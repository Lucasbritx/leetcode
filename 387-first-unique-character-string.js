/* https://leetcode.com/problems/first-unique-character-in-a-string/description/ */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const mapDuplicated = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapDuplicated.has(s[i])) {
      const duplicated = mapDuplicated.get(s[i]);
      mapDuplicated.set(s[i], [duplicated[0], duplicated[1] + 1]);
    } else {
      mapDuplicated.set(s[i], [i, 1]);
    }
  }

  for (let [key, value] of mapDuplicated) {
    if (value[1] === 1) return value[0];
  }

  return -1;
};
