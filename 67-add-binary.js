/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/* 
67. Add Binary
https://leetcode.com/problems/add-binary/?envType=daily-question&envId=2026-05-02
 */
/* TODO improve? */
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
