/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-26 */
function countLettersAndNumbers(str) {
  let lettersCount = 0;
  let numbersCount = 0;
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item >= "0" && item <= "9") {
      numbersCount++;
    } else if ((item >= "a" && item <= "z") || (item >= "A" && item <= "Z")) {
      lettersCount++;
    }
  }

  const lettersString =
    lettersCount === 1 ? "1 letter" : `${lettersCount} letters`;
  const numbersString =
    numbersCount === 1 ? "1 number" : `${numbersCount} numbers`;

  return `The string has ${lettersString} and ${numbersString}.`;
}
