/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-27 */
function oddOrEvenDay(timestamp) {
  const dateObject = new Date(timestamp);

  const dayOfMonth = dateObject.getUTCDate();
  return dayOfMonth % 2 === 0 ? "even" : "odd";
}