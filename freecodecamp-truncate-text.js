/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-04 */
function truncateText(text) {
  if (text.length <= 20) return text;
  const textArray = text.split("");

  while (textArray.length > 20 - 3) {
    textArray.pop();
  }
  textArray.push(".");
  textArray.push(".");
  textArray.push(".");
  return textArray.join("");
}
