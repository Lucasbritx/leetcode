/* https://leetcode.com/problems/keyboard-row/ */
/**
 * @param {string[]} words
 * @return {string[]}
 */
const firstRow = "qwertyuiop".split("");
const secondRow = "asdfghjkl".split("");
const thirdRow = "zxcvbnm".split("");
var findWords = function (words) {
  const result = [];
  words.map((word) => {
    let haveOnlyFirstRow = true;
    let haveOnlySecondRow = true;
    let haveOnlyThirdRow = true;
    word.split("").map((letter) => {
      if (!firstRow.includes(letter.toLowerCase())) haveOnlyFirstRow = false;
      if (!secondRow.includes(letter.toLowerCase())) haveOnlySecondRow = false;
      if (!thirdRow.includes(letter.toLowerCase())) haveOnlyThirdRow = false;
    });
    if (haveOnlyFirstRow || haveOnlySecondRow || haveOnlyThirdRow) {
      result.push(word);
    }
  });
  return result;
};
