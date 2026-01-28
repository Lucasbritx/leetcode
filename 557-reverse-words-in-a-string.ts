/* https://leetcode.com/problems/reverse-words-in-a-string-iii/description/ */
function reverseWords(s: string): string {
  let res = [];
  let i = 0;
  let j = 0;
  const splittedString = s.split("");
  for (; j < s.length; ) {
    if (s[j] !== " ") {
      j++;
    } else {
      res.push(splittedString.slice(i, j).reverse().join(""));
      res.push(" ");
      j++;
      i = j;
    }
  }
  res.push(splittedString.slice(i, j).reverse().join(""));

  return res.join("");
}
