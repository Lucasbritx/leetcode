/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-23 */
function isValidHex(str) {
  if (!str.startsWith("#")) return false;
  const regex = /^([0-9a-f]{3}|[0-9a-f]{6})$/i;
  const hex = str.slice(1);
  return regex.test(hex);
}