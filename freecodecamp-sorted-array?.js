/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-08 */

function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;
  arr.map((num, index) => {
    const prevNum = arr[index - 1];
    if (prevNum && num > prevNum) {
      isDescending = false;
    }
    if (prevNum && num < prevNum) {
      isAscending = false;
    }
  });
  if (isAscending) {
    return "Ascending";
  } else if (isDescending) {
    return "Descending";
  } else {
    return "Not sorted";
  }
}
