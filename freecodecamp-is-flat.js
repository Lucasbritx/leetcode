/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-01 */
function isFlat(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) return false
  }

  return true;
}